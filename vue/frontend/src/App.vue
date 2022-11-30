<script setup>
import { ref } from 'vue'

const idea = ref('')
const ideas = ref([])

const deleteIdea = index => {
  ideas.value.splice(index, 1)
}
</script>

<template>
  <h1>My Vue App</h1>

  <input type='text' v-model='idea' />
  <button @click='ideas.push(idea)'>Add</button>
  <ul>
    <li v-for='idea in ideas' :key='idea'>
      {{ idea }}
      <button @click='deleteIdea(index)'>Delete</button>
    </li>
  </ul>

  <p>{{ ideas.length }} awesome ideas.</p>

</template>
