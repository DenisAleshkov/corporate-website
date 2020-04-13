export const state = () => ({
    token: null
})

export const mutations = {
   	setToken(state, token){
		state.token = token;
	}
  }

export const actions = {
  	login({commit}) {
		commit('setToken', 'truetoken');
	},
	logout({commit}) {
		commit('setToken', null);
	}
  }

export const  getters={
	hasToken: s => !!s.token
}

