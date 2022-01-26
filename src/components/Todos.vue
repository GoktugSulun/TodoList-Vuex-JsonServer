<template>
   <div>
      <h3> Todos </h3>
      <div class="container">
         <div 
         @dblclick="onDoubleClick(todo)"
         v-for="todo in getAllTodos" 
         :key="todo" 
         class="todo"
         :class="{ 'completed': todo.completed }">
            <span class="title"> {{ todo.title }} </span>
            <i @click="deleteTodo(todo)" class="fas fa-trash-alt delete"></i>
         </div>
      </div>
   </div>
</template>

<script>
   import { mapActions } from 'vuex';
   import { mapGetters } from 'vuex';

   export default {
      name: 'Todos',
      data(){
         return {

         }
      },

      methods: {
         ... mapActions(['fetchData', 'deleteTodo', 'updateTodo']),
         onDoubleClick(todo){
            this.updateTodo(todo);
         }
      },

      computed: {
         ... mapGetters(['getAllTodos']),
      },

      created(){
         this.fetchData();
      }
   }
</script>

<style scoped>
   .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
   }

   .todo {
      box-sizing: border-box;
      padding: 30px;
      text-align: center;
      background: #41b883;
      border-radius: 5px;
      position: relative;
      transition: all 350ms;
      font-size: 1.1rem;
      cursor: pointer;
   }

   .todo:hover {
      transform: translateY(-10px);
   }

   .completed {
      background: #35495e;
   }

   .delete {
      position: absolute;
      bottom: 10px;
      font-size: 1.2rem;
      color: #fff;
      transition: all 250ms;
      cursor: pointer;
   }

   .delete {
      right: 10px;
   }

   .delete:hover {
      color: rgb(233, 60, 60);
   }

   .title {
      color: #fff;
   }

   /* #35495e; */

   .empty {
      display: inline-block;
      padding: 20px;
      color: #35495e;
   }

   @media (max-width: 900px) {
      .container {
         grid-template-columns: repeat(2, 1fr);
      }
   }

   @media (max-width: 600px) {
      .container {
         grid-template-columns: 1fr;
      }
   }
</style>