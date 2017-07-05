
<template>
	<div class="gameArea b-white border-black">
		<md-layout md-gutter="0">
			<md-layout md-flex="80">
				<router-view class="b-black main-display main-and-sidebar-height">
						
				<!-- Router display templates loaded here -->

				</router-view>
			</md-layout>
			<md-layout md-flex="20">	

				<sidebar class="b-gray main-and-sidebar-height">
				</sidebar>
			</md-layout>
		</md-layout>
			

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
.gameArea {
	min-height: 720px;
	max-height: 720px;
	min-width: 1280px;
	max-width: 1280px;
}
.rowOne {
	min-height: 520px;
	max-height: 520px;
	min-width: 1280px;
	max-width: 1280px;
}
.main-display {
	width: 100%;
	overflow: auto;
}
.main-and-sidebar-height {
	height: 520px;
}
.sidebar {
	background-color: white;
	vertical-align: top;
	min-height: 520px;
	max-height: 520px;
	min-width: 260px;
	max-width: 260px;
}

.b-red {
	background-color: red;
}
.b-green {
	background-color: green;
}
.b-yellow {
	background-color: yellow;
}
.b-black {
	background-color: black;
}
.b-white {
	background-color: white;
}
.b-gray {
	background-color: gray;
}
.back-gray {
	background-color: gray;
}
.inblock {
	display: block;
}
.border-black {
	border-color: yellow;
	border-width: 2px;
	border-style: solid;
}
</style>
