---
title: Modernizing a legacy application without freezing the roadmap
summary: How to keep shipping while the platform underneath is rebuilt.
description: Field notes on modernizing a legacy application in slices, with tests, observability and data migration planned in, while the product roadmap keeps moving.
category: Digital Engineering
type: Field notes
order: 5
photo: insight-5
published: "2026-10-05"
takeaways:
  - Big-bang rewrites freeze new features and rarely land on time. Modernizing in slices keeps shipping.
  - Put a routing layer in front of the old system, and move one capability at a time behind it.
  - Tests, deployment pipelines and monitoring come first, because they make every later change safe.
  - Agree how capacity is split between new features and modernization, and protect that split.
topic: cap-code
related:
  label: Scalable Products
  href: /capabilities/digital-product-engineering
---

Every enterprise has one: the application that runs something important, that nobody wants to touch, and that slows down every new idea. The obvious answer is to rebuild it from scratch. The business's answer is usually that it can't stop shipping for two years while you do.

Both are right. The way through is to modernize the application in slices, while new features keep going out.

## Why the big rewrite fails

A full rewrite looks clean on a whiteboard. In practice it runs into the same problems again and again:

- **The target keeps moving.** The old system keeps changing while the new one is built, so the rewrite is always catching up.
- **Hidden behavior surfaces late.** Years of fixes and edge cases live in the old code, and many are only found when users notice they're missing.
- **Value arrives at the end.** Nothing reaches users until the switch-over, so the business pays for months of work it can't see.
- **Two systems need running.** The old one still needs fixes while the new one is built, which stretches the same team twice.

## Modernize in slices

The alternative is often called the strangler pattern, after a vine that grows around a tree until it can stand on its own.

1. **Put a routing layer in front of the old system.** All traffic flows through it, so you can decide, request by request, which system answers.
2. **Pick one capability to move.** Choose by value and risk: something that changes often or holds the roadmap back, without being the most fragile part of the system.
3. **Build it in the new platform.** Use the architecture, tools and standards you want for the future.
4. **Shift traffic gradually.** Start with a small share of users, compare results with the old path and widen as confidence grows.
5. **Retire the old code.** Once nothing calls it, remove it. Modernization only pays off when old code is actually switched off.
6. **Repeat.** Each slice makes the old system smaller and the new one more complete.

## Make change safe first

Before moving anything, invest in what makes change safe:

- **Tests that describe what the system does today**, including its quirks, so you know when behavior changes.
- **An automated pipeline** that builds, tests and deploys every change the same way.
- **Monitoring** through logs, metrics and traces that show how both old and new paths behave in production.
- **Feature flags**, so new paths can be switched on for some users and switched off in seconds.
- **Infrastructure as code**, so environments can be created and rebuilt the same way every time.

This work doesn't show up on the roadmap, but it's what lets every later slice move quickly.

## Data is the hard part

Code is often easier to move than data. Legacy applications tend to share one large database, with many parts reading and writing the same tables.

Some patterns that help:

- **Put an interface in front of the old data**, so new services stop reading tables directly.
- **Move data domain by domain**, with each new service owning its own data.
- **Use change data capture** to keep old and new stores in step during the move, instead of writing to both from the application.
- **Plan reconciliation**, with checks that compare old and new data until you're confident enough to switch.

## Keep the roadmap moving

Modernization competes with features for the same people. A few rules keep both moving:

- **Agree the split up front.** Decide what share of each sprint goes to modernization, and protect it when deadlines get tight.
- **Build new features on the new side** whenever the slice they belong to has moved, so the roadmap pulls modernization along.
- **Show progress in business terms**: faster releases, fewer incidents and features that weren't possible before.
- **Keep one backlog**, so modernization work is planned and prioritized alongside everything else.

## A sequence that works

1. Map the application's capabilities and how they depend on each other.
2. Put tests, deployment pipelines and monitoring in place.
3. Add the routing layer.
4. Move the first slice, chosen to show value early.
5. Retire the old code for that slice.
6. Repeat, reviewing priorities after each slice.

## How ManyaIT helps

Our digital product engineering teams modernize applications this way, slice by slice, alongside the teams that own the roadmap. They are matched to your stack, productive from week one and focused on keeping releases going out while the platform underneath improves. Tell us about your application, and we'll map a modernization path that keeps the roadmap moving.
