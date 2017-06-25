import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import testView from '@/components/TestView'

Vue.use(Router)

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
