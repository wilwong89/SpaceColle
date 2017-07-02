<template>   
	<div class="b-green sidebar">
		<div><v-btn router class="red" to="/">Home Link</v-btn></div>
		<div><v-btn router class="blue" to="/testView">Kasumi Link</v-btn></div>
		<div><v-btn router class="green" to="/">Home Link</v-btn></div>
		<div><v-btn router class="gray" to="/">Home Link</v-btn></div>
		<div><v-btn router class="white" to="/">Home Link</v-btn></div>

		<br>
		&nbsp
	</div>

</template>

<script>
export default {
	name: 'sidebar'
}
</script>

<style>
.sidebar {
	background-color: white;
	vertical-align: top;
	max-height: 69vh;
	min-height: 69vh;
	/*max-width: 20vw;
	min-width: 20vw;*/
}
</style>
