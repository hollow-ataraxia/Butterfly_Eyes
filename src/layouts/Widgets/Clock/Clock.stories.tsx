import type { Meta, StoryObj } from 'storybook-solidjs'
import Clock from './Clock.tsx'

type Story = StoryObj<typeof Clock>

const meta: Meta<typeof Clock> = {
  component: Clock,
  title: 'Clock'
}

export const _default: Story = {}

export default meta
