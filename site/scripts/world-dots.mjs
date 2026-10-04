// Builds src/data/world-dots.json: a dot-matrix world map for the Global
// Presence section. Run with `node scripts/world-dots.mjs` after changing the
// grid or the highlighted countries; the output is committed so builds need
// no geodata.
import { readFile, writeFile } from "node:fs/promises";
import { feature } from "topojson-client";
import { geoContains } from "d3-geo";

const STEP = 2; // degrees between dots
const NORTH = 74;
const SOUTH = -56;
/* ISO 3166-1 numeric ids drawn in the accent color: US, Canada, India. */
const HIGHLIGHT = ["840", "124", "356"];

const load = async (name) =>
  JSON.parse(
    await readFile(
      new URL(`../node_modules/world-atlas/${name}`, import.meta.url),
    ),
  );

const landTopo = await load("land-110m.json");
const land = feature(landTopo, landTopo.objects.land);

const countryTopo = await load("countries-110m.json");
const highlighted = feature(
  countryTopo,
  countryTopo.objects.countries,
).features.filter((country) => HIGHLIGHT.includes(country.id));

const cols = 360 / STEP;
const rows = (NORTH - SOUTH) / STEP;
let path = "";
let highlight = "";
let count = 0;
for (let r = 0; r <= rows; r++) {
  const lat = NORTH - r * STEP;
  for (let c = 0; c < cols; c++) {
    const lon = -180 + STEP / 2 + c * STEP;
    const point = [lon, lat];
    if (!geoContains(land, point)) continue;
    const dot = `M${c}.5 ${r}h0`;
    if (highlighted.some((country) => geoContains(country, point))) {
      highlight += dot;
    } else {
      path += dot;
    }
    count++;
  }
}

const out = {
  step: STEP,
  north: NORTH,
  south: SOUTH,
  width: cols,
  height: rows,
  count,
  path,
  highlight,
};
await writeFile(
  new URL("../src/data/world-dots.json", import.meta.url),
  JSON.stringify(out),
);
console.log(
  `world-dots: ${count} dots, ${highlight.split("M").length - 1} highlighted`,
);
