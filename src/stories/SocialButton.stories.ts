import type { Meta, StoryObj } from "@storybook/vue3";
import SocialButton from '../components/SocialButton.vue'

// Configurazione del componente per Storybook
export default {
    title: "Social Link",
    component: SocialButton,
    argTypes: {
        label: { control: "text" },
        link: { control: "text" },
        targetBlank: { control: "boolean" }
    }
} as Meta<typeof SocialButton>


export const Default: StoryObj<typeof SocialButton> = {
    render: (args) => ({
        components: { SocialButton },
        setup() {
            return { args }
        },
        template: '<SocialButton v-bind="args" />'
    }),
    args: {
        label: 'GitHub',
        link: 'https://www.github.com',
        targetBlank: true
    }
}