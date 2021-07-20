import Vue from 'vue'
import Vuex from 'vuex'
import '~/plugins/RafManager'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        windowWidth: 0,
        windowHeight: 0,
        mouse: [0, 0]
    },
    mutations: {
        set(state, attrs) {
            for (let name in attrs) {
                state[name] = attrs[name]
            }
        },
        onResize(state, callback) {
            callback()
            window.addEventListener('resize', () => callback())
        },
    },
})
