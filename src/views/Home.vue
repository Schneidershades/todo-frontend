<template>
	<div class="wrapper flex">
		<h1 class="header">To Do</h1>
    <form @submit.prevent="submitTodo">
      <div class="inputField">
       <input v-model="form.todo" type="text" required="" placeholder="What needs to be done?">
       <button type="submit"><i class="fas fa-plus"></i>Add</button>
     </div>
   </form>
    <ul class="todoList">
      <li v-for="list in lists" :key="list.id">
        <template v-if="list.complete==false">
          <a @click="completeTodo(list.id)">{{list.todo}}</a> 
          <button class="delete" @click="removeTodo(list.id)"><i class="fas fa-plus"></i>Delete</button>
        </template>
        <template v-else>
          <span class="faint"><del>{{list.todo}}</del> </span> 
        </template>
    </li>
   </ul>
 </div>
</template>


<script>
// @ is an alias to /src

import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Home',
	components: {

	},

  data () {
    return {
      form : {
        todo : ''
      }
    }
  },

  computed: {
    ...mapGetters({
      lists: 'todo/todos'
    }),
  },

  methods: {
    ...mapActions({
      getTodos: 'todo/getTodos',
      postTodos: 'todo/postTodos',
      completeTodos: 'todo/completeTodos',
      removeTodos: 'todo/removeTodos'
    }),

    submitTodo () {
      this.postTodos(this.form).then(() => {
        this.form.todo = ''
      })
    },

    completeTodo (id) {
      this.completeTodos(id).then(() => {
      })
    },

    removeTodo (id) {
      this.removeTodos(id).then(() => {
      })
    }
  },

  mounted () {
    this.getTodos()
  }
}
</script>
