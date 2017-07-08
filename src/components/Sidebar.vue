<template>   
	<div>
		<router-link v-on:click.native="add" tag="md-button" class="md-raised md-primary" to="/">Home Link</router-link>
		<router-link tag="md-button" class="md-raised md-primary" to="/testView">Kasumi Link</router-link>
		<router-link tag="md-button" class="md-raised md-primary" to="/kashView">Kashima Link</router-link>
		<router-link tag="md-button" class="md-raised md-primary" to="/kashView">Ship Stats</router-link>
		<br>
		&nbsp
	</div>

</template>

<script>

export default {
	name: 'sidebar',
	methods: {
		add: function () {
			this.$store.commit('increment')
		}
	}
}
</script>

<style>

</style>
