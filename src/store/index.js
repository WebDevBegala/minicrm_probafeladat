import { createStore } from 'vuex'
import * as api from '../api/api'
export default createStore({
  state: {
    store: {},
    comments: [],
    storeId: null
  },
  mutations: {
    setStore(state, store) {
      state.store = store;
    },
    setStoreId(state,storeId){
      state.storeId = storeId
    },
    setComments(state, comments) {
      state.comments = comments.map((comment) => {
        return {
          ...comment,
          date: new Date(comment.date).toLocaleDateString()
        }
      });
    },
    setStoreAvgRating(state){
      const avgRating = (state.comments.reduce((rating,comment) => rating + comment.rating,0) / state.comments.length)
      state.store = {
        ...state.store,
        avgRating
      }
    }
  },
  actions: {
    fetchStore({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.fetchStoreDetail(params)
          .then((response) => {
            const { data } = response;
            commit('setStore', data)
            resolve();
          })
          .catch(() => {
            reject();
          })
      })
    },
    // eslint-disable-next-line no-unused-vars
    fetchComments({ commit }, params) {
      return new Promise((resolve, reject) => {
        const id = this.state.storeId;
        api.fetchComments(params = {id})
          .then((response) => {
            const { data } = response;
            commit('setComments', data)
            commit('setStoreAvgRating');
            resolve();
          })
          .catch(() => {
            reject();
          })
      })
    },
    // eslint-disable-next-line no-unused-vars
    createComment({ commit }, params) {
      return new Promise((resolve, reject) => {
        params = {
          ...params,
          storeId: this.state.storeId
        }
        api.createComments(params)
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          })
      })
    }
  },
})
