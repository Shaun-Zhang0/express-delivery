/*
 * @Author: Shaun.Zhang
 * @Date: 2019-04-27 17:16:44
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 16:14:22
 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buyInfo: {}
  },
  mutations: {
    submitOrder: (state, objOrder) => {
      for (let k in objOrder) {
        state.buyInfo[k] = objOrder[k];
      }
    }
  }
});
