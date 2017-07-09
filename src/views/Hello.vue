<template>
	<div class="hello text-green">
		Count for 'Home Link' pressed: {{count}}
		<table>
			<tr>
				<td>Ship Name:</td>
				<td>{{shipName}}</td>
			</tr>
			<tr>
				<td>Ship class</td>
				<td>{{}}</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
		</table>
		<md-button v-on:click.native="titanic" class="md-raised">Fuel</md-button>
		<md-button v-on:click.native="willieD" class="md-raised">Ammo</md-button>
		<md-button v-on:click.native="" class="md-raised">Print</md-button>
	</div>
</template>

<script>
import { mapState } from 'vuex'
var displayObject = { text: 'fuel' }
var viewedShip = {}
var initialShip = 'willieD'

export default {
	name: 'hello',
	data: function () {
		return displayObject
	},
	computed: {
		...mapState(['count', 'count2', 'count3']),
		shipName () {
			switch (initialShip) {
				case 'titanic':
					return this.$store.state.a.shipName
				case 'willieD':
					return this.$store.state.b.shipName
				default:
					return viewedShip
			}
		}
	},
	methods: {
		titanic () { initialShip = 'titanic' },
		willieD () { initialShip = 'willieD' }
	}
}
/*
name: 'hello',
	data: function () {
		var tempObject = Object.assign({}, displayObject, viewedShip)
		return tempObject
	},
	computed: {
		...mapState(['count', 'count2', 'count3']),
		shipName () { return this.$store.getters.returnStat(displayObject.text) },
		argument () { return 'ammo' }
	},
	methods: {
		findFuel () { displayObject.text = 'fuel' },
		findAmmo () { displayObject.text = 'weapons' },
		getShip () { viewedShip = this.$store.modules }
	}
*/
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
