import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  user: {},
  myVaults: {},
  myKeeps: {},
  keeps: [],
  error: {}
}

let handleError = (err) => {
  state.error = err
}

export default new Vuex.Store ({
  state,
  mutations: {
     setUser(state, user) {
      state.user = user
    },
      setLogout(state, user){
        state.user = null
      },
      setKeeps(state, keeps){
        state.keeps = keeps
      },
      setAuth(state, user) {
      if(user == null){
        state.user = {}
        router.push('/')
      }
      state.user = user
    },

  },
  actions: {
    register({ commit, dispatch }, user) {
      debugger
      auth.post('register', user)
        .then(res => {
          commit('setUser', res.data.data)
          if (res.data.error) {
            return handleError(res.data.error)
          }
        })
        .catch(handleError)
    },
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          debugger
          commit('setUser', res.data.data)
        })
        .catch(handleError)
    },
    logout({commit, dispatch}){
      auth.delete('logout')
        .then(res => {
          commit('setLogout', res.data.data)
        })
    },
    getAuth({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          commit('setAuth', res.data.data)
        }).catch(err => {
        })
    },
    getKeeps({commit, dispatch}){
      api('keeps')
        .then(res => {
          commit('setKeeps', res.data.data)
        }).catch(handleError)
    },
    getMyKeeps({commit, dispatch}){
      api('mykeeps')
        .then(res => {
          commit('setMyKeeps', res.data.data)
        })
    },
    createKeep({commit, dispatch}, newKeep){
      api.post('keeps', newKeep)
        .then(res => {
          debugger
          dispatch('getKeeps')
        }).catch(handleError)
    }
    }
})


