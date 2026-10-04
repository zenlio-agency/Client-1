// Builds src/data/world-dots.json: a dot-matrix world map for the Global
// Presence section. Run with `node scripts/world-dots.mjs` after changing the
// grid; the output is committed so builds need no geodata.
import { readFile, writeFile } from "node:fs/promises";
import { feature } from "topojson-client";
import { geoContains } from "d3-geo";

const STEP = 2; // degrees between dots
const NORTH = 74;
const SOUTH = -56;

const topo = JSON.parse(
  await readFile(
    new URL("../node_modules/world-atlas/land-110m.json", import.meta.url),
  ),
);
const land = feature(topo, topo.objects.land);

const cols = 360 / STEP;
const rows = (NORTH - SOUTH) / STEP;
let path = "";
let count = 0;
for (let r = 0; r <= rows; r++) {
  const lat = NORTH - r * STEP;
  for (let c = 0; c < cols; c++) {
    const lon = -180 + STEP / 2 + c * STEP;
    if (geoContains(land, [lon, lat])) {
      path += `M${c}.5 ${r}h0`;
      count++;
    }
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
};
await writeFile(
  new URL("../src/data/world-dots.json", import.meta.url),
  JSON.stringify(out),
);
console.log(`world-dots: ${count} dots, ${path.length} chars`);
