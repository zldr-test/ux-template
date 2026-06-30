---
status: accepted
---

# Guided Figma MCP setup

We want this template to help users connect Figma MCP without forcing it. The setup experience should appear in `/start` and in user-facing docs using the same optional, skippable explanation. If the user chooses to connect, the setup writes to the user's global MCP configuration so the connection persists across repos.

## Considered Options

- **`/start` only**: good for agent users, but the template itself would not explain the flow.
- **Docs only**: useful for explaining the flow, but it would not help the agent bootstrap path.
- **Both `/start` and docs**: gives a subtle, guided first-time experience in both places without making the setup mandatory.

## Consequences

- The repo needs one shared concept for the Figma connection so the agent flow and the docs stay aligned.
- The setup flow must remain skippable; the template should still be usable without Figma MCP.
- The implementation should target the user's global MCP config rather than a repo-local setting.
