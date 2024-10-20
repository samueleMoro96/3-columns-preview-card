<template>
  <div id="cardContainer_sociaList">
    <my-social v-for="(social, index) in socials"
      :key="index"
      :label="social.label"
      :link="social.link"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SocialButton from './SocialButton.vue'

import '../assets/css/base.css'


interface SocialLink {
  label: string,
  link: string
}

export default defineComponent({
    name: "SocialListItem",
    components: {
        'my-social': SocialButton
    },
    props: {
        socials: {
            type: Array as PropType<SocialLink[]>,
            default: () => []
        }
    }
}
</script>