import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

const viewports = {
  mobile: { name: "Mobile", styles: { width: "390px", height: "844px" } },
  tablet: { name: "Tablet", styles: { width: "834px", height: "1112px" } },
  desktop: { name: "Desktop", styles: { width: "1440px", height: "1024px" } },
}

type SetupStage = "intro" | "connected" | "skipped" | "returning"

interface FigmaMcpSetupScreenProps {
  onConnect?: () => void
  onReset?: () => void
  onSkip?: () => void
  stage: SetupStage
}

const stageContent = {
  intro: {
    eyebrow: "Optional setup",
    title: "Connect Figma MCP",
    body: "If you want the template to pull the right Figma context for a task, connect your personal Figma account. You can skip it and continue without losing access to the template.",
    status: "Not connected",
    statusTone: "warning",
  },
  connected: {
    eyebrow: "Connected",
    title: "Figma MCP is ready",
    body: "Your connection is stored in your global MCP config, so future sessions can use the right Figma context without repeating setup.",
    status: "Connected to Figma",
    statusTone: "positive",
  },
  skipped: {
    eyebrow: "Skipped",
    title: "You can return later",
    body: "The template still works without Figma MCP. When you want it, come back to /start and connect your account from there.",
    status: "Setup skipped",
    statusTone: "neutral",
  },
  returning: {
    eyebrow: "Later return",
    title: "Pick up Figma setup whenever you want",
    body: "This step stays optional. If you decide to use Figma-backed help later, you can connect in one pass and keep going.",
    status: "Ready to connect",
    statusTone: "warning",
  },
} as const

const statusLabelByTone = {
  positive: "Ready",
  warning: "Optional",
  neutral: "Neutral",
} as const

function FigmaMcpSetupScreen({ stage, onConnect, onSkip, onReset }: FigmaMcpSetupScreenProps) {
  const content = stageContent[stage]
  const isIntro = stage === "intro"
  const isConnected = stage === "connected"

  const statusStyles = {
    positive: {
      background: "color-mix(in oklab, var(--mode-color-success-bg-subtle) 80%, white)",
      borderColor: "var(--mode-color-success-border-default)",
      color: "var(--mode-color-success-txt-default)",
    },
    warning: {
      background: "color-mix(in oklab, var(--mode-color-warning-bg-subtle) 80%, white)",
      borderColor: "var(--mode-color-warning-border-default)",
      color: "var(--mode-color-warning-txt-default)",
    },
    neutral: {
      background: "color-mix(in oklab, var(--mode-color-generic-bg-soft) 85%, white)",
      borderColor: "var(--mode-color-generic-border-moderate)",
      color: "var(--mode-color-generic-txt-moderate)",
    },
  } as const

  const accent = statusStyles[
    content.statusTone as keyof typeof statusStyles
  ] as (typeof statusStyles)[keyof typeof statusStyles]
  const statusLabel = statusLabelByTone[content.statusTone]

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "clamp(var(--space-400), 3vw, var(--space-700))",
        background:
          "radial-gradient(circle at top left, color-mix(in oklab, var(--mode-color-info-bg-subtle) 25%, transparent), transparent 30%), radial-gradient(circle at 85% 15%, color-mix(in oklab, var(--mode-color-warning-bg-subtle) 18%, transparent), transparent 24%), linear-gradient(180deg, var(--mode-color-generic-bg-nought) 0%, color-mix(in oklab, var(--mode-color-generic-bg-soft) 35%, white) 100%)",
        fontFamily: "var(--font-family-base)",
        color: "var(--mode-color-generic-txt-severe)",
      }}
    >
      <main
        style={{
          margin: "0 auto",
          display: "grid",
          minHeight: "calc(100vh - 2 * var(--space-700))",
          maxWidth: "1200px",
          alignItems: "center",
        }}
      >
        <section
          style={{
            display: "grid",
            gap: "var(--space-500)",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, 0.85fr)",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-500)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                width: "fit-content",
                alignItems: "center",
                gap: "var(--space-200)",
                borderRadius: "999px",
                border: "1px solid var(--mode-color-generic-border-moderate)",
                background: "var(--mode-color-generic-bg-nought)",
                padding: "var(--space-150) var(--space-300)",
                fontSize: "var(--font-size-100)",
                fontWeight: "var(--font-weight-medium)",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--mode-color-generic-txt-moderate)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  borderRadius: "999px",
                  background:
                    stage === "connected"
                      ? "var(--mode-color-success-border-default)"
                      : "var(--mode-color-info-border-default)",
                }}
              />
              {content.eyebrow}
            </div>

            <div
              style={{
                maxWidth: "42rem",
                display: "grid",
                gap: "var(--space-300)",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(var(--font-size-700), 4vw, var(--font-size-900))",
                  fontWeight: "var(--font-weight-bold)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                  color: "var(--mode-color-generic-txt-severe)",
                }}
              >
                {content.title}
              </h1>
              <p
                style={{
                  margin: 0,
                  maxWidth: "38rem",
                  fontSize: "var(--font-size-300)",
                  lineHeight: 1.6,
                  color: "var(--mode-color-generic-txt-moderate)",
                }}
              >
                {content.body}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-250)",
              }}
            >
              {isIntro ? (
                <>
                  <button
                    onClick={onConnect}
                    style={{
                      border: "1px solid var(--mode-color-info-border-default)",
                      borderRadius: "var(--radius-300)",
                      background: "var(--mode-color-info-bg-default)",
                      padding: "var(--space-250) var(--space-450)",
                      fontSize: "var(--font-size-200)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--mode-color-info-txt-default)",
                      boxShadow: "var(--elevation-100)",
                    }}
                    type="button"
                  >
                    Connect Figma
                  </button>
                  <button
                    onClick={onSkip}
                    style={{
                      border: "1px solid var(--mode-color-generic-border-moderate)",
                      borderRadius: "var(--radius-300)",
                      background: "transparent",
                      padding: "var(--space-250) var(--space-450)",
                      fontSize: "var(--font-size-200)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--mode-color-generic-txt-severe)",
                    }}
                    type="button"
                  >
                    Skip for now
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={onReset}
                    style={{
                      border: "1px solid var(--mode-color-generic-border-moderate)",
                      borderRadius: "var(--radius-300)",
                      background: "transparent",
                      padding: "var(--space-250) var(--space-450)",
                      fontSize: "var(--font-size-200)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--mode-color-generic-txt-severe)",
                    }}
                    type="button"
                  >
                    Start over
                  </button>
                  {isConnected ? null : (
                    <button
                      onClick={onConnect}
                      style={{
                        border: "1px solid var(--mode-color-info-border-default)",
                        borderRadius: "var(--radius-300)",
                        background: "var(--mode-color-info-bg-default)",
                        padding: "var(--space-250) var(--space-450)",
                        fontSize: "var(--font-size-200)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--mode-color-info-txt-default)",
                        boxShadow: "var(--elevation-100)",
                      }}
                      type="button"
                    >
                      Connect now
                    </button>
                  )}
                </>
              )}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "var(--space-250)",
              }}
            >
              {[
                {
                  title: "1. Link your account",
                  body: "Connect the Figma account that owns the design context you want to use.",
                },
                {
                  title: "2. Save globally",
                  body: "The MCP connection lives in your global agent config, not this repo.",
                },
                {
                  title: "3. Continue anytime",
                  body: "Skip now, connect later, or revisit the step from /start whenever needed.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  style={{
                    borderRadius: "var(--radius-300)",
                    border: "1px solid var(--mode-color-generic-border-soft)",
                    background:
                      "color-mix(in oklab, var(--mode-color-generic-bg-nought) 92%, white)",
                    padding: "var(--space-300)",
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      marginBottom: "var(--space-150)",
                      fontSize: "var(--font-size-200)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--mode-color-generic-txt-severe)",
                    }}
                  >
                    {item.title}
                  </h2>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "var(--font-size-100)",
                      lineHeight: 1.55,
                      color: "var(--mode-color-generic-txt-moderate)",
                    }}
                  >
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside
            style={{
              borderRadius: "calc(var(--radius-400) + var(--radius-100))",
              border: "1px solid var(--mode-color-generic-border-soft)",
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--mode-color-generic-bg-nought) 94%, white) 0%, var(--mode-color-generic-bg-nought) 100%)",
              boxShadow: "var(--elevation-200)",
              padding: "var(--space-500)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-400)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                gap: "var(--space-300)",
              }}
            >
              <div style={{ display: "grid", gap: "var(--space-150)" }}>
                <span
                  style={{
                    fontSize: "var(--font-size-100)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--mode-color-generic-txt-moderate)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Connection preview
                </span>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "var(--font-size-500)",
                    fontWeight: "var(--font-weight-bold)",
                    lineHeight: 1.15,
                  }}
                >
                  {content.status}
                </h2>
              </div>

              <span
                style={{
                  ...accent,
                  borderRadius: "999px",
                  border: "1px solid",
                  padding: "var(--space-150) var(--space-250)",
                  fontSize: "var(--font-size-100)",
                  fontWeight: "var(--font-weight-medium)",
                  whiteSpace: "nowrap",
                }}
              >
                {statusLabel}
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "var(--font-size-300)",
                lineHeight: 1.6,
                color: "var(--mode-color-generic-txt-moderate)",
              }}
            >
              {content.body}
            </p>

            <div
              style={{
                display: "grid",
                gap: "var(--space-250)",
              }}
            >
              <div
                style={{
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--mode-color-generic-border-soft)",
                  background: "var(--mode-color-generic-bg-nought)",
                  padding: "var(--space-300)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    marginBottom: "var(--space-200)",
                    fontSize: "var(--font-size-100)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--mode-color-generic-txt-moderate)",
                  }}
                >
                  What users get
                </p>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "var(--space-400)",
                    display: "grid",
                    gap: "var(--space-200)",
                    fontSize: "var(--font-size-200)",
                    lineHeight: 1.55,
                    color: "var(--mode-color-generic-txt-severe)",
                  }}
                >
                  <li>Figma MCP uses the user's own Figma account.</li>
                  <li>The connection persists across sessions.</li>
                  <li>The template remains usable if the user skips setup.</li>
                </ul>
              </div>

              <div
                style={{
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--mode-color-generic-border-soft)",
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--mode-color-info-bg-subtle) 85%, white) 0%, color-mix(in oklab, var(--mode-color-generic-bg-nought) 95%, white) 100%)",
                  padding: "var(--space-300)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    marginBottom: "var(--space-150)",
                    fontSize: "var(--font-size-100)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--mode-color-generic-txt-moderate)",
                  }}
                >
                  /start integration
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "var(--font-size-200)",
                    lineHeight: 1.55,
                    color: "var(--mode-color-generic-txt-severe)",
                  }}
                >
                  The startup flow should explain why Figma MCP matters, offer setup, and let users
                  continue if they skip it.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>

      {isIntro ? (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: "auto 3vw 3vw auto",
            width: "11rem",
            height: "11rem",
            borderRadius: "999px",
            background:
              "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--mode-color-info-bg-subtle) 60%, transparent), transparent 70%)",
            filter: "blur(6px)",
            pointerEvents: "none",
          }}
        />
      ) : null}
    </div>
  )
}

function InteractiveFlow() {
  const [stage, setStage] = useState<SetupStage>("intro")

  return (
    <FigmaMcpSetupScreen
      onConnect={() => setStage("connected")}
      onReset={() => setStage("intro")}
      onSkip={() => setStage("skipped")}
      stage={stage}
    />
  )
}

const meta = {
  title: "Screens/Figma MCP Setup",
  component: FigmaMcpSetupScreen,
  parameters: {
    layout: "fullscreen",
    viewport: { viewports },
  },
} satisfies Meta<typeof FigmaMcpSetupScreen>

export default meta
type Story = StoryObj<typeof meta>

export const Flow: Story = {
  render: () => <InteractiveFlow />,
}

export const Intro: Story = {
  args: {
    stage: "intro",
  },
}

export const Connected: Story = {
  args: {
    stage: "connected",
  },
}

export const Skipped: Story = {
  args: {
    stage: "skipped",
  },
}

export const ReturnLater: Story = {
  args: {
    stage: "returning",
  },
}
