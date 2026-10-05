---
title: "Two cities, one team: how a platform runs around the clock"
summary: Handoffs, overlap hours and the habits that keep a two-city team working as one.
description: Field notes on running an enterprise platform with one team across Dallas and Hyderabad, covering overlap hours, handoffs, follow-the-sun support and the habits that hold it together.
category: Enterprise Technology
type: Field notes
order: 4
photo: insight-4
published: "[Publish date]"
takeaways:
  - The time difference between Dallas and Hyderabad is an advantage when handoffs are designed, not improvised.
  - Use the short daily overlap for decisions. Everything else moves in writing.
  - One backlog, one definition of done and one on-call rota make two locations work as one team.
  - Treat the handoff note as a product, because the next shift depends on it.
topic: capability-center
related:
  label: Our locations
  href: /locations
---

When the working day ends in Dallas, it's the middle of the night in Hyderabad, and the Hyderabad team starts its morning while Dallas sleeps. The two cities are ten and a half hours apart in summer and eleven and a half in winter, because Texas changes its clocks and India doesn't.

That gap can work two ways. Badly run, it means slow answers, late-night calls and work that waits a day for a decision. Well run, it means a platform that moves forward around the clock, with problems handled while the other city sleeps.

These are the habits we've found make the difference.

## Use the overlap for decisions

The two cities share a short window each day: early morning in Dallas is evening in Hyderabad. At 8:00 a.m. in Dallas it's 6:30 p.m. in Hyderabad in summer, and 7:30 p.m. in winter.

That window is precious, so protect it:

- **Use it for decisions and unblocking**, not status updates. Status belongs in writing.
- **Keep it short and regular.** The same time every day is easier to plan around than ad hoc calls.
- **Share the inconvenience.** If one city always takes the late or early call, rotate it. Fairness keeps people for the long term.
- **Record what was decided**, in the same place every time, so people who couldn't join know by their morning.

## Make the handoff a product

At the end of each day, one city hands the work to the other. A good handoff note means the next shift starts working, not asking questions.

| Section          | What goes in it                                           |
| ---------------- | --------------------------------------------------------- |
| What changed     | Work finished, deployed or merged today, with links       |
| In progress      | What's half done, where it stands and the next step       |
| Blocked          | What's stuck, why, and who can unblock it                 |
| Decisions needed | Questions only the other city can answer, with a deadline |
| Watch list       | Alerts, risks or fragile areas to keep an eye on          |

Keep the format the same every day, write it where the whole team can see it and make writing it part of the definition of done for the day.

## One team, not two

The biggest risk in a two-city setup is drifting into two teams: one that decides and one that delivers. To stay one team:

- **Keep one backlog** and one set of priorities, owned jointly.
- **Share one definition of done**, one set of tools and one way of reviewing code.
- **Split work by feature, not by city**, so both locations build, test and release.
- **Pair across cities** when the overlap allows, especially on new or tricky work.
- **Meet in person when you can.** A visit early on builds the trust that makes the written handoffs work.

## Running a platform around the clock

For platforms that can't stop, two time zones make follow-the-sun support possible: each city covers its own daytime, so nobody is woken up for routine issues.

That works when:

- **the on-call rota covers both cities**, with a clear handover between them;
- **runbooks are written down and kept current**, so whoever is on call can act without waiting for the original author;
- **alerts go to whoever is awake**, not to whoever built the service;
- **incidents are handed over like any other work**, with what's known, what's been tried and what's next; and
- **reviews after incidents are blameless** and shared across both cities, so both learn from every one.

## What the client sees

For the enterprise, a well-run two-city team should feel simple. The Dallas team, our Client & Leadership Hub, works in North American hours and is the day-to-day point of contact. The engineering teams in Hyderabad, our Engineering & Talent Hub, carry the work forward overnight. Each morning starts with a clear summary of what moved, what's next and what needs a decision.

## Habits that make it work

- Write first, meet second.
- Keep decisions in one place everyone can find.
- Make every handoff note complete enough to act on without a call.
- Rotate the inconvenient hours.
- Measure how long work waits between cities, and work to shorten it.

## How ManyaIT works

ManyaIT runs this way every day, with client leadership in Dallas and engineering teams in Hyderabad working as one team for each enterprise. If you're planning a capability center or a team that spans time zones, share a skills brief and we'll show you how we'd set it up.
