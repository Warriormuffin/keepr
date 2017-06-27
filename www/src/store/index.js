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
  //Dummy Data
  // keeps: [{
  //   title: 'Learn to Draw',
  //   imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
  //   body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
  //   keepCount: 100,
  //   shareCount: 300,
  //   viewCount: 900,
  //   author: 'JimyJonJones'
  // }, {
  //   title: 'Build Beautiful sites',
  //   imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
  //   body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
  //   keepCount: 100,
  //   shareCount: 300,
  //   viewCount: 900,
  //   author: 'JimyJonJones'
  // }, {
  //   title: 'Learn to Draw',
  //   imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/c7/80/e3/c780e34c14258f4087df410f03d76e83.jpg',
  //   body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatisconsectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
  //   keepCount: 100,
  //   shareCount: 300,
  //   viewCount: 900,
  //   author: 'JimyJonJones'
  // }, {
  //   title: 'Build Beautiful sites',
  //   imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
  //   body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
  //   keepCount: 100,
  //   shareCount: 300,
  //   viewCount: 900,
  //   author: 'JimyJonJones'
  // }, {
  //   title: 'Learn to Draw',
  //   imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
  //   body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
  //   keepCount: 100,
  //   shareCount: 300,
  //   viewCount: 900,
  //   author: 'JimyJonJones'
  // }, {
  //   title: 'Build Beautiful sites',
  //   imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
  //   body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
  //   keepCount: 100,
  //   shareCount: 300,
  //   viewCount: 900,
  //   author: 'JimyJonJones'
  // }],
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
    createKeep({commit, dispatch}, newKeep){
      debugger
      api.post('keeps', newKeep)
        .then(res => {
          debugger
          dispatch('getKeeps')
        }).catch(handleError)
    }
    }
})


