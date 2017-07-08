import Vue from 'vue'

import Router from 'vue-router'
import 'vue-material/dist/vue-material.css'
import VueMaterial from 'vue-material'

import Hello from '@/views/Hello'
import testView from '@/views/TestView'
import kashView from '@/views/Kashima'

Vue.use(Router)

Vue.use(VueMaterial)

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
		},
		{
			path: '/kashView',
			component: kashView
		}
	]
})
