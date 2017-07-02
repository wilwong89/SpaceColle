<template>
    <v-layout row>
        <v-flex xs9 class="pa-0">
			<router-view class="b-red main-display"></router-view>
		</v-flex>
		<v-flex xs3 class="pa-0">
			<div class="b-green sidebar">
				<v-btn router to="/">Home Link</v-btn>
				<v-btn router to="/testView">Kasumi Link</v-btn>
				<br>
				&nbsp
			</div>
		</v-flex>
    </v-layout>
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
