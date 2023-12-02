import type { Meta, StoryObj } from 'storybook-solidjs'

import Background from './Background.tsx'

type Story = StoryObj<typeof Background>

const meta: Meta<typeof Background> = {
  component: Background,
  title: 'Background'
}

export const _default: Story = {}

export default meta
