# indoor.rocks — parked branch: `park/back-forward-morph`

> **This is not `main`.** This branch is a working prototype of animating the browser's Back and
> Forward buttons between the gym list and a gym's page, parked on 2026-11-21. It works, but it
> leans on React and Next.js internals, so it was left off `main` in favor of keeping things
> idiomatic. Don't merge it as-is.

## What it does

On `main`, the expand/collapse links, a second click on a selected gym's title, and Escape all
play the morph between the list's card and the gym's page (`GymMorph`). Back and Forward between
the same two pages don't: they swap pages instantly. This branch makes them morph too.

| File | What it is |
| --- | --- |
| `src/app/PopStateFirst.tsx` | Adds a `popstate` listener when the module is first evaluated, and lets handlers claim the event (`stopImmediatePropagation`) before Next sees it. The root layout renders `<PopStateFirst />` only so the module always loads before the app hydrates. |
| `src/app/climbing-gyms/MorphOnTraverse.tsx` | Rendered by `GymMorph.Page`. Claims Back/Forward only when moving between the list and a gym's page, then, just after the event, replays the same URL with `router.replace(href, { scroll: false, transitionTypes })`: open toward a gym's page, close toward the list. Everything else is left to Next. |

## Why it needs a workaround

- **React** finishes a transition started inside a `popstate` event synchronously
  (`shouldAttemptEagerTransition` in react-dom), so the browser can restore scroll. Synchronous
  updates never get a view transition. Next handles Back/Forward inside `popstate`, so they never
  animate. The Next view-transitions guide says the shared-element morph still plays on Back; in
  Next 16.4.6 / React 19.3.1 it doesn't.
- **Getting ahead of Next** means running before its `popstate` listener. For an event fired at
  `window`, Chrome runs listeners in the order they were added, and `capture: true` doesn't jump
  the queue (checked: a bubble listener added first ran before a capture listener added second).
  Next adds its listener when the app router mounts, so the only earlier point is module
  evaluation, from a module the root layout always loads.

## What it depends on (all undocumented)

1. React's eager handling of transitions inside `popstate`. That's deliberate on React's part, so
   it's stable, but it's the reason any of this is needed.
2. Next adding its `popstate` listener at app router mount, after this module has evaluated. This
   is the fragile one.
3. Skipping Next's `popstate` handler and replaying with `router.replace` leaving Next's history
   state consistent. In testing, history length, URLs and selection all came out right.

If either framework changes, the likely failure is the animation quietly not playing, or a
redundant navigation to the URL the browser is already on, not broken navigation.

## How it was tested

In Chrome, on the dev server and on a production build served from `out/`:

- Back, Forward and Back again between `?focus=vital-brooklyn` and `/climbing-gyms/vital-brooklyn/`
  each played the morph (2 gym view-transition groups per navigation), with `history.length`
  unchanged and the selection restored.
- Back to the list landed on the card for Niagara Climbing Center, last in New York's long list.
- Escape after a Forward still returned to the list.
- Further Back (to the bare list, then to home) was left to Next and behaved as usual.

## What a clean version would need

An official way to animate traversals: React not running `popstate` transitions synchronously
when a view transition would run, Next handling Back/Forward outside the event, or Next using the
Navigation API. Worth rechecking on each Next/React upgrade.

---

# indoor.rocks (<http://indoor.rocks>)

> NOTE: this is very much a work-in-progress, and isn't yet near the point where its giving any value

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install NodeJS:

```bash
nvm use
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

Unit tests use [Vitest](https://vitest.dev/) and live next to the code they cover, as `*.test.ts`:

```bash
npm test            # run once
npm run test:watch  # re-run on change
```

## Contributing

Reach out to me if you wanna help! I'd be thrilled to have folks to pair with and am open to suggestions and contributions.

## Development Log

Check out the [Dev Log](./DEVLOG.md) to check out what I've been doing day-to-day (and/or check out the commits!)
