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
				<td>{{storage}}</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
		</table>
		<md-button v-on:click.native="findFuel" class="md-raised">Fuel</md-button>
		<md-button v-on:click.native="findAmmo" class="md-raised">Ammo</md-button>
		<md-button v-on:click.native="printLn" class="md-raised">Print</md-button>
	</div>
</template>

<script>
import {mapState} from 'vuex'
var text = 'text'
export default {
	name: 'hello',
	data () {
		return {
			storage: text
		}
	},
	computed: {
		...mapState(['count', 'count2', 'count3']),
		shipName () { return this.$store.getters.returnStat('ammo') },
		argument () { return 'ammo' }
	},
	methods: {
		findFuel () { text = 'fuel' },
		findAmmo () { text = 'weapons' },
		printLn () { console.log(text) }
	}
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
