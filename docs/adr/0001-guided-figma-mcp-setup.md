---
status: accepted
---

# Guided Figma MCP setup

We want this template to help users connect Figma MCP without forcing it. The setup experience should appear in `/start` for agent bootstrap and in Storybook as a guided demo flow, both using the same optional, skipable explanation. If the user chooses to connect, the setup writes to the user's global MCP configuration so the connection persists across repos.

## Considered Options

- **`/start` only**: good for agent users, but the template itself would not explain the flow.
- **Storybook only**: useful for demoing the experience, but it would not help the agent bootstrap path.
- **Both `/start` and Storybook**: gives a subtle, guided first-time experience in both places without making the setup mandatory.

## Consequences

- The repo needs one shared concept for the Figma connection so the agent flow and the Storybook flow stay aligned.
- The setup flow must remain skippable; the template should still be usable without Figma MCP.
- The implementation should target the user's global MCP config rather than a repo-local setting.
