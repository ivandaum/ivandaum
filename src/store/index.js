import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    visible: false,
    string: ''
  },
  mutations: {
    hideLabel(state) {
      state.string = '';
      state.visible = false;
    },

    showLabel(state, { string }) {
      state.visible = true;
      state.string = string;
    },

    hideLabelDelayed(state) {
      setTimeout(() => {
        state.visible = false;
      }, 2000);
    }
  },
});
