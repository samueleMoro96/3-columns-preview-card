<template>
    <a class="cardContainer_linkSocial" :href="link" :target="targetBlank ? '_blank' : ''">{{ label }}</a>
</template>

<script lang="ts">
import '../assets/css/base.css'


export default {
    name: "LinkItem",
    props: {
        label: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        targetBlank: {
            type: Boolean,
            required: false
        }
    }
}
</script>