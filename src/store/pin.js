
import axios from 'axios'

axios.defaults.withCredentials = true

// axios.defaults.baseURL = 'https://todoback123.herokuapp.com/'

axios.defaults.baseURL = 'http://localhost:8000/'

export default {
	namespaced: true,

	state: {
		pins: []
	},

	getters: {
		pins (state) {
			return state.pins
		}
	},

	mutations : {
		PUSH_PIN (state, data) {
			state.pins = data
		}
	},

	actions : {
		async getPins ({ commit }) {
			let response = await axios.get('/api/pins')
			console.log(response.data)
			commit( 'PUSH_PIN', response.data )
			return response
		},

		async postPins ({ commit }) {
			let response = await axios.post('/api/pins')
			console.log(response.data)
			commit( 'PUSH_PIN', response.data )
			return response
		},
	}
}