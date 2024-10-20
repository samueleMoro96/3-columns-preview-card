import type { Meta, StoryObj } from "@storybook/vue3";
import SocialList from '../components/SocialList.vue'

// Configurazione del componente per Storybook
export default {
    title: "Social Link List",
    component: SocialList,
    argTypes: {
        socials: { control: "object" }
    }
} as Meta<typeof SocialList>


export const Default: StoryObj<typeof SocialList> = {
    render: (args) => ({
        components: { SocialList },
        setup() {
            return { args }
        },
        template: '<SocialList v-bind="args" />'
    }),
    args: {
        socials: [
            { label: 'GitHub', link: 'https://github.com' },
            { label: 'Frontend Mentor', link: 'https://frontendmentor.com' },
            { label: 'LinkedIn', link: 'https://linkedin.com' },
            { label: 'Twitter', link: 'https://x.com' },
            { label: 'Instragram', link: 'https://instagram.com' },
        ]
    }
}