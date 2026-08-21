# Portfolio agent guide

## Goal
Build a polished, accessible portfolio for Jeremy Rivera, a Product Designer who bridges UX and front-end engineering.

## Rules
- Keep `main` production-safe; work through reviewable branches and pull requests.
- Do not invent project metrics, employers, dates, responsibilities, or outcomes.
- Use approved or recreated visuals only. Never add confidential company material.
- Preserve WCAG-conscious contrast, keyboard access, semantic HTML, responsive behavior, and visible focus states.
- Reuse the blue brand tokens in `app/globals.css`.
- Never merge or deploy production without Jeremy's approval.

## Required checks
- `npm run build`
- Mobile review near 390px
- Desktop review near 1440px
- Verify light and dark appearance

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
