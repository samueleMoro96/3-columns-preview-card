<script setup lang="ts">
</script>

<template>
  <main>
    <my-profile-card v-if="profileData.length"
      :profileName="profileData[0].profileName"
      :location="profileData[0].location"
      :description="profileData[0].description"
      :socials="profileData[0].socials"
    />
  </main>
</template>

<script lang="ts">
import CardProfile from './components/Card.vue'

export default {
  data() {
    return {
      profileData: [
        {
          profileName: '',
          location: '',
          description: '',
          socials: [{ label: '', link: '', targetBlank: false }],
        }
      ]
    }
  },
  mounted() {
    fetch('/database.json')
      .then(res => {
        if ( !res.ok ) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then(data => {
        this.profileData = data.profileData // Imposto i dati ricevuti
      })
      .catch(error => {
        console.error('Error fetching profile data:', error)
      })
  },
  components: {
    'my-profile-card': CardProfile
  }
}
</script>

<style scoped>

</style>
