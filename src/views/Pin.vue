<template>
	<div class="wrapper flex">
    <form @submit.prevent="submitPin">
      <div class="inputField">
       <!-- <input v-model="form.todo" type="text" required="" placeholder="What needs to be done?"> -->
       <button type="submit" :disabled="disabled"><i class="fas fa-plus"></i>Generate</button>
     </div>
   </form>
   
    <h1 class="header">Generated Pins</h1>
    <ul class="todoList">
      <li v-for="list in lists" :key="list.id">
        <span >{{list.pin}} </span> 
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
      disabled: false,
      form : {
        todo : ''
      }
    }
  },

  computed: {
    ...mapGetters({
      lists: 'pin/pins'
    }),
  },

  methods: {
    ...mapActions({
      getPins: 'pin/getPins',
      postPins: 'pin/postPins',
    }),

    submitPin () {
      this.disabled = true
      this.postPins().then(() => {
        this.disabled = false
      })
    },
  },

  mounted () {
    this.getPins()
  }
}
</script>
