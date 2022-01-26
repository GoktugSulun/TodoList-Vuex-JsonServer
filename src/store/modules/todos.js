import axios from 'axios';

export default {

   state: {
      allTodos: [],
   },

   getters: {
      getAllTodos(state){
         return state.allTodos;
      }
   },

   actions: {
      async fetchData({commit}){
         const response = await axios.get('http://localhost:3000/todos');
         console.log(response);
         commit('getData', response.data);
      },

      async addTodo(context, title){

         let canAdded = true;
         for(let i=0; i<context.state.allTodos.length; i++){
            if(context.state.allTodos[i].title === title){
               canAdded = false;
            }
         }

         if(canAdded){
            const todo = {
               title: title,
               completed: false,
            }
            const response = await axios.post('http://localhost:3000/todos', todo);
            context.commit('addData', response.data);
         }else {
            alert(`'${title}' was alrady in the list!`);
         }         
         
      },

      async deleteTodo({commit}, todo){
         await axios.delete(`http://localhost:3000/todos/${todo.id}`);
         commit('deleteData', todo.id);
      },

      async updateTodo({commit}, todo){
         const updTodo = {
            id: todo.id,
            title: todo.title,
            completed: !todo.completed
         }
         const response = await axios.put(`http://localhost:3000/todos/${todo.id}`, updTodo);
         commit('updateData', response.data);
      }
   },

   mutations: {
      getData: (state, todos) => {
         // display output in reverse (because last todo that added by user should be front)
         for(let i=todos.length; i>0; i--){
            state.allTodos.push(todos[i-1]);
         }
      },
      addData: (state, todo) => state.allTodos = [ todo, ...state.allTodos],
      deleteData: (state, id) => state.allTodos = state.allTodos.filter(todo => todo.id !== id),
      updateData: (state, todo) => {
         const index = state.allTodos.findIndex(i => i.id === todo.id);
         state.allTodos.splice(index, 1, todo);
      }
   }

}