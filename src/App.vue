
<template>
	<div>
		<v-layout row>
			<v-flex xs9 class="pa-0">
				<router-view class="b-red main-display">
				
				<!-- Router display templates loaded here -->
				
				</router-view>
			</v-flex>
			<v-flex xs3 class="pa-0">
				<sidebar>
				</sidebar>
			</v-flex>				
			
		</v-layout>
		<bottombar>
		</bottombar>
	</div>
</template>

<script>
import sidebar from '@/components/Sidebar'
import bottombar from '@/components/Bottombar'

export default {
	name: 'app',
	components: {sidebar, bottombar}

}
</script>

<style >
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
  /*margin-top: 60px;*/
}

.main-display {
	min-height: 69vh;
	max-height: 69vh;
	/*min-width: 75vw;
	max-width: 75vw;*/
	overflow: auto;
}

.sidebar {
	background-color: white;
	vertical-align: top;
	max-height: 69vh;
	min-height: 69vh;
	/*max-width: 20vw;
	min-width: 20vw;*/
}
.bottomBar{
	min-height: 25vh;
	max-height: 25vh;
	/*min-width: 94vw;	
	max-width: 94vw;*/
}
.b-red {
	border-color: red;
	border-style: solid;
	border-width: 2px;
}
.b-green {
	border-color: green;
	border-style: solid;
	border-width: 2px;
}
.b-yellow {
	border-color: yellow;
	border-style: solid;
	border-width: 2px;
}

.back-gray {
	background: gray;
}


</style>
