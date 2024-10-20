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
import SocialButton from './SocialButton.vue'

import '../assets/css/base.css'


type SocialLink = {
  label: string,
  link: string
}

export default {
    name: "SocialListItem",
    components: {
        'my-social': SocialButton
    },
    props: {
        socials: {
            type: Array as () => Array<SocialLink>,
            default: () => []
        }
    }
}
</script>