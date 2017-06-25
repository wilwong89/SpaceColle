<template>
	<div>
		<div>
			<router-view class="inblock b-red main-display fl"></router-view>
			<div class="inblock b-green sidebar fl">
				<router-link to="/">Home Link</router-link>
				<router-link to="/testView">Test Empty Link</router-link>
				<br>
				&nbsp
			</div>
		</div>
		<div class="b-yellow inblock bottomBar">
		WRITING SOME TEXT HERE
		</div>
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
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
	min-width: 75vw;
	max-width: 75vw;
}

.sidebar {
	vertical-align: top;
	max-height: 69vh;
	min-height: 69vh;
	max-width: 20vw;
	min-width: 20vw;
}
.bottomBar{
	min-height: 25vh;
	max-height: 25vh;
	min-width: 95vw;	
	max-width: 95vw;
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
.inblock {
	display: inline-block;
}
.block {
	display: block;
}

.fl {
	float: left;
}

.fr {
	float: right;
}
</style>
