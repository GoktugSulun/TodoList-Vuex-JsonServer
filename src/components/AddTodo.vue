<template>
   <div>
      <h1> TODO LIST </h1>
      <form @submit="onSubmit">
         <input type="text" v-model="title" placeholder="Add Todo...">
         <input type="submit" value="Add Todo">
      </form>
   </div>
</template>

<script>
   import { mapActions } from 'vuex';

   export default {
      name: 'AddTodo',
      data(){
         return {
            title: ''
         }
      },
      methods: {
         ... mapActions(['addTodo']),
         onSubmit(e){
            if(this.title != ''){
               this.addTodo(this.title);
               this.title = '';
            }else {
               alert('Please add a todo');
            }
            e.preventDefault();
         }
      }
   }
</script>

<style scoped>
   form {
      display: flex;
   }

   h1 {
      text-align: center;
      font-family: sans-serif;
   }

   input[type="text"] {
      flex: 10;
      display: inline-block;
      padding: 15px;
      border: 2px solid #41b883;
      border-radius: 5px;
      margin-right: 10px;
      outline: none;
      font-size: 1.1rem;
   }

   input[type="submit"] {
      flex: 2;
      display: inline-block;
      outline: none;
      background: #41b883;
      border: none;
      padding: 15px;
      border-radius: 5px;
      font-size: 1.2rem;
      transition: all 300ms;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      cursor: pointer;
   }

   input[type="submit"]:hover {
      transform: scale(.9);
   }

   @media (max-width: 900px) {
      input[type="text"] {
         flex: 6;
      }
   }

   @media (max-width: 600px) {
      form {
         flex-direction: column;
         gap: 10px;
      }

      input[type="text"] {
         margin-right: 0;
      }

   }

</style>