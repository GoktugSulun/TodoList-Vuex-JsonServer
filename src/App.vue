<template>
  <AddTodo />
  <Info />
  <Todos />
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import Info from './components/Info.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    Info
  }
}
</script>

<style>
  body {
    background: #ececec;
    padding: 30px;
    font-family: sans-serif;
  }
</style>
