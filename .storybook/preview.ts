import type { Preview } from 'storybook-solidjs'

import '@styles/global.css.ts'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'black',
          value: '#000000'
        },
        {
          name: 'blue',
          value: '#3139fb'
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
