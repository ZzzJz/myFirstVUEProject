<template>
	<html>
		<myHeader></myHeader>
		<h2 v-text="dat.title"></h2>
		<p v-if="dat.author">作者：{{dat.author.loginname}}      发表时间：{{$utils.goodTime(dat.create_at)}}</p>
		<hr />
		<article v-html="dat.content"></article>
		<h3>网友回复：</h3>
		<ul>
			<li v-for="i in dat.replies">
				<p>评论者：{{i.author.loginname}}      评论于：{{$utils.goodTime(i.create_at)}}</p>
				<article v-html="i.content"></article>
			</li>
		</ul>
		<myFooter></myFooter>
	</html>
</template>

<script>
	import myHeader from '../components/header.vue'
	import myFooter from '../components/footer.vue'
	export default{
		components:{myHeader,myFooter},
		data(){
			return{
				id:this.$route.params.id,
				dat:{}
			}
		},
		created(){
			this.getData()
		},
		methods:{
			getData(){
				var t = this
				t.$api.get("topic/" + t.id,null,function(r){
					console.log(t.$route)
					t.dat = r.data
				})
			}
		}
	}
	
</script>

<style>
	
</style>