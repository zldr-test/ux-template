import type { Preview } from "@storybook/react-vite"
import { Agentation } from "agentation"
import "../src/index.css"
import "@sage/xtrem-fusion-components/styles.css"

export const globalTypes = {
  fusionTheme: {
    name: "Theme",
    description: "Switch between Fusion light and dark themes",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals["fusionTheme"] as string
      document.documentElement.dataset.theme = theme

      return (
        <>
          {import.meta.env.DEV && (
            <Agentation endpoint="http://localhost:4747" />
          )}
          <Story />
        </>
      )
    },
  ],
}

export default preview
