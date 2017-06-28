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
  activeVault: {},
  activeKeep: {},
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
        router.push('/')
      },
      setKeeps(state, keeps){
        state.keeps = keeps
      },
      setMyKeeps(state, keeps){
        state.myKeeps = keeps
      },
      setActiveKeep(state, keep){
        debugger
        state.activeKeep = keep
      },
      setActiveKeeps(state, keeps){
        debugger
        state.activeKeep = keeps
      },
      setMyVaults(state, vaults){
        state.myVaults = vaults
      },
      setActiveVault(state, vault){
        debugger
        state.activeVault = vault
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
      auth.post('register', user)
        .then(res => {

          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit('setUser', res.data.data)
        })
        .catch(handleError)
    },
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
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
    addView({commit, dispatch}, keep){
      debugger
      api.put('addview', keep)
        .then(res => {
          debugger
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
          dispatch('getMyKeeps')
        }).catch(handleError)
    },
    getActiveKeep({commit, dispatch}, keep){
      debugger
      commit('setActiveKeep', keep)
    },
    addKeepToVault({commit, dispatch}, vaultData){
      api.put('updatevaultkeepids', vaultData)
        .then(res => {
          debugger
        })
    },
    deleteKeep({commit, dispatch}, id){
      api.delete('keeps/' + id)
        .then(res => {
          dispatch('getMyKeeps')
        }).catch(handleError)
    },
    getMyVaults({commit, dispatch}, ){
      api('myvaults')
      .then(res => {
        commit('setMyVaults', res.data.data)
      })
    },
    createVault({commit, dispatch}, newVault){
      api.post('vaults', newVault)
        .then(res => {
          dispatch('getMyVaults')
        }).catch(handleError)
    },
    getVaultById({commit, dispatch}, id){
      debugger
      api.get('vaults', id )
        .then(res => {
          debugger
          commit('setActiveVault', res.data.data[0])
        })
    },
    getKeepsByVaultId({commit, dispatch}, id){
      debugger
      api.get('vaultkeeps/' + id)
        .then(res => {
          debugger
          commit('setActiveKeeps', res.data.data)
        })
    },
    deleteVault({commit, dispatch}, id){
      api.delete('vaults/' + id)
        .then(res => {
          dispatch('getMyVaults')
        }).catch(handleError)
    }
    }
})


