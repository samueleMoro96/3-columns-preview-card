<template>
    <div class="columnContainer" :class="`columnContainer--${columnColor}`">
        <img :src="imagePath" :alt="imageAlt">
        <p class="columnContainer_title">
            {{ title }}
        </p>
        <p class="columnContainer_description">
            {{ description }}
        </p>
        <div class="columnContainer_buttonContainer">
            <a href="#" class="columnContainer_button">Learn More</a>
        </div>
    </div>
</template>

<script lang="ts">
import '../assets/css/base.css'


export default {
    name: "ColumnItem",
    props: {
        imagePath: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        columnColor: {
            type: String,
            required: false,
            default: 'orange'
        }
    }
}
</script>