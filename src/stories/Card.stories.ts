import type { Meta, StoryObj } from "@storybook/vue3";
import Card from '../components/Card.vue'

// Configurazione del componente per Storybook
export default {
    title: "Profile Card",
    component: Card,
    argTypes: {
        profileName: { control: "text" },
        location: { control: "text" },
        description: { control: "text" },
        socials: { control: "object" }
    }
} as Meta<typeof Card>


export const Default: StoryObj<typeof Card> = {
    render: (args) => ({
        components: { Card },
        setup() {
            return { args }
        },
        template: '<Card v-bind="args" />'
    }),
    args: {
        profileName: 'Jessica Randall',
        location: 'London, United Kingdom',
        description: 'Front-end developer and avid reader.',
        socials: [
            { label: 'GitHub', link: 'https://github.com', targetBlank: true },
            { label: 'Frontend Mentor', link: 'https://frontendmentor.com', targetBlank: true },
            { label: 'LinkedIn', link: 'https://linkedin.com', targetBlank: true },
            { label: 'Twitter', link: 'https://x.com', targetBlank: true },
            { label: 'Instragram', link: 'https://instagram.com', targetBlank: true },
        ]
    }
}