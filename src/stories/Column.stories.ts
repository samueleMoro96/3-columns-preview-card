import type { Meta, StoryObj } from "@storybook/vue3";
import Column from '../components/Column.vue'
import IconSedans from '../assets/images/icon-sedans.svg'

// Configurazione del componente per Storybook
export default {
    title: "Column",
    component: Column,
    argTypes: {
        imagePath: { control: "text" },
        imageAlt: { control: "text" },
        title: { control: "text" },
        description: { control: "boolean" }
    }
} as Meta<typeof Column>


export const Default: StoryObj<typeof Column> = {
    render: (args) => ({
        components: { Column },
        setup() {
            return { args }
        },
        template: '<Column v-bind="args" />'
    }),
    args: {
        imagePath: IconSedans,
        imageAlt: 'Sedans image',
        title: 'Sedans',
        description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
    }
}