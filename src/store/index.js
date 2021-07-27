import { createStore } from 'vuex'

import todo from './todo'
import pin from './pin'

export default createStore({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		todo,
		pin,
	}
})
