import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import testView from '@/views/TestView'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(Vuetify)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/testView',
			component: testView
		}
	]
})
