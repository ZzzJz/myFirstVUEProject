<template>
	<div>
		<h2>{{msg}}</h2>
		<hr />
		<h3>{{$store.state.count}}</h3>
		<div>
			<button @click="addAction">+</button>
			<button @click="reduceAction">-</button>
		</div>
	</div>
</template>

<script>
	import store from '@vuex/store'
	import {mapState,mapMutations,mapGetters} from 'vuex';
	
	export default{
		data(){
			return{
				msg:'hello vuex'
			}
		},
		store,
		computed:{
			...mapState(["count"]),
			...mapGetters(["count"])
		},
		methods:mapMutations([
			'add','reduce','getters'
		])
	}
</script>

<style>
</style>