<template>
	<div class="hello text-green">
		sdFSdfsdfsdfs {{count}}
		<table>
			<tr>
				<td>Ship Name:</td>
				<td>{{shipName}}</td>
			</tr>
			<tr>
				<td>Ship class</td>
				<td></td>
			</tr>
			<tr>
				<td><md-button class="md-raised">Mutations!</md-button></td>
				<td></td>
			</tr>
		</table>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'hello',
	computed: {
		...mapState(['count', 'count2', 'count3']),
		shipName () { return this.$store.getters.returnStat('ammo') }
	}
/*
		count () { return this.$store.getters.returnVari('count3') },
*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
}
.text-green {
	color: green;
}
ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>
