# ux-template

A GitHub template repository with everything you need to start exploring **GenUI** — AI-generated UI — using the Sage design system.

## What's included

- **Vite + React 19 + TypeScript** — fast modern build setup
- **Storybook 10** — component explorer with Vitest integration for story tests
- **`@sage/xtrem-fusion-components`** — full Sage Fusion component library
- **`@sage/design-tokens`** — Sage design tokens (color, spacing, typography, elevation) as CSS variables
- **Tailwind CSS v4** — utility classes, configured alongside Fusion components
- **[Ultracite](https://www.ultracite.ai)** — zero-config Biome preset for linting and formatting, with AI agent rules pre-generated
- **TypeScript** — strict config with separate app and node targets
- **[ux-skills](https://github.com/Sage-ERP-X3/ux-skills)** — Sage UX agent skills pre-installed for your AI coding agent (brand, content, accessibility, responsive design)

## Getting started

### 1. Use this template

Click **"Use this template"** on GitHub to create a new repository from this scaffold. Then clone your new repo locally.

### 2. Install dependencies

```bash
pnpm install
```

The `postinstall` script automatically:
1. Pulls and runs the Sage UX skills installer from `Sage-ERP-X3/ux-skills`
2. Registers the Agentation MCP server with your AI coding agent

> Requires `gh` (GitHub CLI) to be authenticated: `gh auth login`

### 3. Start Storybook

```bash
pnpm storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

To refresh skills later (e.g. after an update to `ux-skills`), run:

```bash
pnpm run skills
```

> Skip this if you just ran `pnpm install` — `postinstall` already ran it for you.

## Scripts

| Command | Description |
|---|---|
| `pnpm storybook` | Start Storybook dev server on port 6006 |
| `pnpm build-storybook` | Build static Storybook for deployment |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm format` | Lint and auto-fix all files with Ultracite/Biome |
| `pnpm check` | Lint without writing changes |
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

The `agentation` package is included as a dev dependency, the `<Agentation>` component is mounted in the Storybook preview (dev-only), and the MCP server is registered automatically on `pnpm install` via `npx add-mcp`.

Start the server before opening Storybook:

```bash
npx agentation-mcp server
```

Verify the setup with:

```bash
npx agentation-mcp doctor
```

The server runs on port `4747` by default.

### Optional Figma MCP

This template also supports a guided Figma MCP onboarding flow. If you want Figma-backed help, `/start` explains the setup and offers to connect your personal Figma account.

The connection is optional. It is written to your global MCP configuration, so the template still works if you skip it or connect it later.

To run the guided setup directly, use:

```bash
pnpm run wizard:figma-mcp
```

## Linting & formatting

This template uses [Ultracite](https://www.ultracite.ai) (a Biome preset) for linting and formatting. `pnpm install` installs the `ultracite` and `@biomejs/biome` packages, and `biome.jsonc` is already committed — no setup script to run.

The one manual step: **install the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)** (or your editor's Biome plugin) so format-on-save works. VS Code users will get an "install recommended extensions" prompt from `.vscode/extensions.json` on first open.

```bash
pnpm format   # lint + auto-fix
pnpm check    # lint only, no changes
```

## Node version

Requires **Node ≥ 20.9.0**.

## Troubleshooting

### `ERR_PNPM_IGNORED_BUILDS` (esbuild) on `pnpm install`

This template's `pnpm-workspace.yaml` allowlists `esbuild`'s install script via both `onlyBuiltDependencies` (older pnpm) and `allowBuilds` (pnpm 11+, which requires an explicit `true`/`false` per package — `onlyBuiltDependencies` alone is no longer enough). If you templated this repo before that fix landed, or copied files manually instead of using **"Use this template"**, your repo may be missing `pnpm-workspace.yaml`. Add it back:

```yaml
onlyBuiltDependencies:
  - esbuild
allowBuilds:
  esbuild: true
```

then re-run `pnpm install`.
