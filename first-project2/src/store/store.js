
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	count:1
}

const getters = {
	count:function(state){
		return state.count += 100;
	}
}
const actions = {
	addAction(context){
		context.commit('add',10);
	},
	reduceAction({commit}){
		commit('reduce');
	})
}

const mutations = {
	add(state){
		state.count+=1;
	},
	reduce(state){
		state.count-=1;
	}
}

export default new Vuex.Store({
	state
})
