
import axios from 'axios'

axios.defaults.withCredentials = true

// axios.defaults.baseURL = 'https://api.parkit.ng'

axios.defaults.baseURL = 'http://localhost:8000/'

export default {
	namespaced: true,

	state: {
		todos: []
	},

	getters: {
		todos (state) {
			return state.todos
		}
	},

	mutations : {
		PUSH_TODO (state, data) {
			state.todos = data
		}
	},

	actions : {
		async getTodos ({ commit }) {
			let response = await axios.get('/api/todos')
			commit( 'PUSH_TODO', response.data )
			return response
		},

		async postTodos ({ dispatch }, item) {
			await axios.post('/api/todos', item)
			dispatch( 'getTodos' )
		},

		async completeTodos ({ dispatch }, id) {
			const url = '/api/todos/' + id
			await axios.put(url)
			dispatch( 'getTodos' )
		},

		async removeTodos ({ dispatch }, id) {
			const url = '/api/todos/' + id
			await axios.delete(url)
			dispatch( 'getTodos' )
		}
	}
}