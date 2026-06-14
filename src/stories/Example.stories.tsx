import type { Meta, StoryObj } from "@storybook/react-vite"

const viewports = {
  mobile: { name: "Mobile", styles: { width: "390px", height: "844px" } },
  tablet: { name: "Tablet", styles: { width: "834px", height: "1112px" } },
  desktop: { name: "Desktop", styles: { width: "1440px", height: "1024px" } },
}

function ExampleScreen() {
  return (
    <div
      style={{
        padding: "var(--space-500)",
        background: "var(--mode-color-generic-bg-nought)",
        minHeight: "100vh",
        fontFamily: "var(--font-family-base)",
      }}
    >
      <h1
        style={{
          color: "var(--mode-color-generic-txt-severe)",
          fontSize: "var(--font-size-700)",
          fontWeight: "var(--font-weight-bold)",
          marginBottom: "var(--space-300)",
        }}
      >
        Example Screen
      </h1>
      <p
        style={{
          color: "var(--mode-color-generic-txt-moderate)",
          fontSize: "var(--font-size-300)",
        }}
      >
        Replace this with your screen. Use <code>@sage/xtrem-fusion-components</code> for
        components and <code>@sage/design-tokens</code> CSS variables for all colors,
        spacing, and typography — never hardcode values.
      </p>
    </div>
  )
}

const meta = {
  title: "Screens/Example",
  component: ExampleScreen,
  parameters: {
    layout: "fullscreen",
    viewport: { viewports },
  },
} satisfies Meta<typeof ExampleScreen>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
