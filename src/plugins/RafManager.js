import Vue from 'vue'

const RafManager = {
    callbacks: [],
    raf: null,
    init() {
        this.render()
    },

    addQueue(func) {
        const index = Date.now().toString(36) + Math.random().toString(36).substr(2)
        this.callbacks[index] = func
        return index
    },

    removeQueue(index) {
        if (this.callbacks[index]) {
            delete this.callbacks[index]
            return true
        }

        return false
    },

    render(deltaY) {
        this.raf = requestAnimationFrame(this.render.bind(this))
        for (const key in this.callbacks) {
            if (this.callbacks[key]) {
                this.callbacks[key](deltaY)
            }
        }
    },
}
RafManager.init()
Vue.prototype.RafManager = RafManager
