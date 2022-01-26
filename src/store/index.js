import { createStore } from 'vuex';
import todos from './modules/todos.js';

const store = createStore({
   state: {},

   modules: {
      todos,
   },

   getters: {},

   actions: {},

   mutations: { }
});

export default store;