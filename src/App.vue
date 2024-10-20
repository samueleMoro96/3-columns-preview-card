<script setup lang="ts">
</script>

<template>
  <main>
    <my-column v-for="(column, index) in columnData"
      :key="index"
      :imagePath="column.imagePath"
      :imageAlt="column.imageAlt"
      :title="column.title"
      :description="column.description"
      :columnColor="columnColors[index]"
    />
  </main>
</template>

<script lang="ts">
import Column from './components/Column.vue'

export default {
  data() {
    return {
      columnData: [
        {
          imagePath: '',
          imageAlt: '',
          title: '',
          description: '',
        }
      ],
      columnColors: ['orange', 'cyan', 'dark-cyan']
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
        this.columnData = data.columnData // Imposto i dati ricevuti
      })
      .catch(error => {
        console.error('Error fetching profile data:', error)
      })
  },
  components: {
    'my-column': Column
  }
}
</script>

<style scoped>

</style>
