# ux-template

A GitHub template repository with everything you need to start exploring **GenUI** — AI-generated UI — using the Sage design system.

## What's included

- **Vite + React 19 + TypeScript** — fast modern build setup
- **Storybook 10** — component explorer with Vitest integration for story tests
- **`@sage/xtrem-fusion-components`** — full Sage Fusion component library
- **`@sage/design-tokens`** — Sage design tokens (color, spacing, typography, elevation) as CSS variables
- **Tailwind CSS v4** — utility classes, configured alongside Fusion components
- **Prettier** — opinionated formatter pre-configured for `.ts`, `.tsx`, and `.css`
- **TypeScript** — strict config with separate app and node targets

## Getting started

### 1. Use this template

Click **"Use this template"** on GitHub to create a new repository from this scaffold. Then clone your new repo locally.

### 2. Install dependencies

```bash
npm install
```

The `postinstall` script automatically pulls and runs the Sage UX skills installer from `Sage-ERP-X3/ux-skills`, so your Claude Code agent will be set up with the correct skills out of the box.

> Requires `gh` (GitHub CLI) to be authenticated: `gh auth login`

### 3. Start Storybook

```bash
npm run storybook
```

Storybook runs at [http://localhost:6006](http://localhost:6006).

## Scripts

| Command | Description |
|---|---|
| `npm run storybook` | Start Storybook dev server on port 6006 |
| `npm run build-storybook` | Build static Storybook for deployment |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run format` | Format all `.ts`, `.tsx`, `.css` files with Prettier |

## Project structure

```
src/
└── stories/        # Storybook stories (use fullscreen layout for page-level stories)
.storybook/         # Storybook configuration
```

## Design system rules

- Use `@sage/xtrem-fusion-components` components — never build primitives from scratch when a Fusion component exists.
- Use `@sage/design-tokens` CSS variables for color, spacing, typography, and elevation — never hardcode hex values, pixel sizes, or font names.
- Import component styles from `@sage/xtrem-fusion-components/styles.css`.
- Import base tokens from `@sage/xtrem-fusion-components/styles/base.css`.

## Node version

Requires **Node ≥ 20.9.0**.
