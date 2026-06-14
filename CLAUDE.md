# Agent Rules

## Design system

- Always use `@sage/xtrem-fusion-components` components. Never build primitives from scratch when a Fusion component exists.
- Always use `@sage/design-tokens` CSS variables for color, spacing, typography, and elevation. Never hardcode hex values, pixel sizes, or font names.
- Import component styles from `@sage/xtrem-fusion-components/styles.css`. Import base tokens from `@sage/xtrem-fusion-components/styles/base.css`.
- All stories live in `src/stories/`. Use `fullscreen` layout for page-level stories.

## Skill routing

- Starting something new (new feature, new screen, new branch, beginning a session): run `/start` first.
- Pushing to git, creating a PR, merging: run `/ship` first. Never push directly to `master` or `main`.
