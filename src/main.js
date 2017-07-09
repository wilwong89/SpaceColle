// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import titanic from './Objects/USS_Titanic'
import willie from './Objects/USS_WillieD'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
	state: {
		count: 0,
		count2: 5,
		count3: 10
	},
	mutations: {
		increment (state) {
			state.count++
		}
	},
	getters: {
		returnCount: (state) => {
			return state['count2'] + 5
		},
		returnVari: (state, getters) => (stat) => {
			return state[stat]
		}
	},
	modules: {
		a: titanic,
		b: willie
	}
})
console.log(store.state)
new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: { App }
})
Vue.material.registerTheme('default', {
	primary: 'blue',
	accent: 'red',
	warn: 'red',
	background: 'grey'
})
