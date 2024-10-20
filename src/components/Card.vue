<template>
  <div id="cardContainer">
    <img src="../assets/images/avatar-jessica.jpeg" alt="Profile Image" class="cardContainer_profileImage">
    <div class="cardContainer_mainInfos">
        <h1>{{ profileName }}</h1>
        <p class="cardContainer_location">{{ location }}</p>
    </div>
    <p class="cardContainer_description">"{{ description }}"</p>
    <my-socials :socials="socials" />
  </div>
</template>

<script lang="ts">
import SocialList from './SocialList.vue'
import '../assets/css/base.css'


export default {
    name: "CardItem",
    components: {
        'my-socials': SocialList
    },
    props: {
        profileName: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        socials: {
            type: Array as () => Array<{ label: string, link: string }>,
            default: () => []
        }
    }
}
</script>