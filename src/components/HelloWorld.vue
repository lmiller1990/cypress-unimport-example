<script setup lang="ts">
import { ref } from 'vue';

const todos = ref<any>()

$fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    todos.value = json.slice(0, 5)
  })
 </script>

<template>
  <ul>
    <li class="todo" v-for="todo of todos" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>
