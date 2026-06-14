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
- **[ux-skills](https://github.com/Sage-ERP-X3/ux-skills)** — Sage UX agent skills pre-installed for your AI coding agent (brand, content, accessibility, responsive design)

## Getting started

### 1. Use this template

Click **"Use this template"** on GitHub to create a new repository from this scaffold. Then clone your new repo locally.

### 2. Install dependencies

```bash
pnpm install
```

The `postinstall` script automatically pulls and runs the Sage UX skills installer from `Sage-ERP-X3/ux-skills`, so your Claude Code agent will be set up with the correct skills out of the box.

> Requires `gh` (GitHub CLI) to be authenticated: `gh auth login`

To refresh skills later (e.g. after an update to `ux-skills`), run:

```bash
pnpm run skills
```

> Skip this if you just ran `pnpm install` — `postinstall` already ran it for you.

### 3. Start Storybook

```bash
pnpm storybook
```

Storybook runs at [http://localhost:6006](http://localhost:6006).

## Scripts

| Command | Description |
|---|---|
| `pnpm storybook` | Start Storybook dev server on port 6006 |
| `pnpm build-storybook` | Build static Storybook for deployment |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm format` | Format all `.ts`, `.tsx`, `.css` files with Prettier |
| `pnpm run skills` | Refresh Claude Code agent skills from `ux-skills` |

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

## MCP servers

MCP (Model Context Protocol) servers extend your AI coding agent with real-time context. This template pre-configures the following servers in `.claude/settings.json`:

### Agentation

[Agentation](https://www.agentation.com) enables real-time annotation syncing and bidirectional communication between your app and your AI agent.

The `agentation` package is already included as a dev dependency and the `<Agentation>` component is mounted in the Storybook preview (dev-only). To activate the MCP server, add it to your agent config:

```bash
npx agentation-mcp init
```

Or manually add to `.claude/settings.json`:

```json
{
  "mcpServers": {
    "agentation": {
      "command": "npx",
      "args": ["-y", "agentation-mcp", "server"]
    }
  }
}
```

Then start the server before opening Storybook:

```bash
npx agentation-mcp server
```

Verify the setup with:

```bash
npx agentation-mcp doctor
```

The server runs on port `4747` by default.

## Node version

Requires **Node ≥ 20.9.0**.
