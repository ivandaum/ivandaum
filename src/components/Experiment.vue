<template>
  <div
    @click="onClick"
    @touchstart="onMove"
    @touchmoves="onMove"
    @mousemove="onMove"
    class="Experiment has-width-100 has-height-100"
  />
</template>
<script>
import ImageLoader from '~/scripts/utils/ImageLoader'
import Experiment from '~/scripts/Experiment'

import { getMousePosition } from '~/scripts/functions'
import { mapState } from 'vuex'

export default {
  computed: mapState(['windowWidth', 'windowHeight']),
  mounted() {
    const $el = this.$el
    const width = this.windowWidth
    const height = this.windowHeight

    this.Experiment = new Experiment({ width, height, $el })

    this.loadImages(imageDatas => this.Experiment.createPlanes(imageDatas))
    this.raf = this.RafManager.addQueue(t => this.Experiment.render(t))

    this.$store.commit('onResize', () => this.onResize())
  },
  methods: {
    onResize() {
      const width = this.windowWidth
      const height = this.windowHeight
      this.Experiment.onResize({ width, height })
    },
    onClick(e) {
      const { x, y } = getMousePosition(e)
      this.Experiment.switchPlane({ x, y })
    },
    onMove(e) {
      // const { x, y } = getMousePosition(e)
    },
    loadImages(callback) {
      const url = '/images/image-{number}.jpg'
      const length = 5
      const urls = [...Array(length)].map((a, i) => url.replace('{number}', i + 1))
      ImageLoader.load(urls).then(imageDatas => callback(imageDatas))
    },
  },
}
</script>
<style lang="scss">
.Experiment {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
