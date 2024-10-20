<template>
  <div id="cardContainer_sociaList">
    <my-social v-for="social in socials" :key="social" :label="social.label" :link="social.link" />
  </div>
</template>

<script lang="ts">
import SocialButton from './SocialButton.vue'

import '../assets/css/base.css'


export default {
    name: "SocialListItem",
    components: {
        'my-social': SocialButton
    },
    props: {
        socials: {
            type: Array as () => Array<{ label: string, link: string }>,
            default: () => []
        }
    }
}
</script>