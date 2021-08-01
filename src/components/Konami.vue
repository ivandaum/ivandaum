<template>
  <div
    class="Konami is-fixed"
    :style="{
      transform: `translate3d(${x}vw, ${y}vh, 0) rotate(${rotate}deg)`,
    }"
  >
    <transition name="konami-slide">
      <img v-show="active" :src="src" @onload="onLoad()" alt="" />
    </transition>
  </div>
</template>
<script>
const imgCount = 5;
// const path = '/trump/trump{src}.png'
const path = "/dist/nicolas.png";
// const positions = [
// [-50, 0],
// [50, 0],
// [0, -50],
// [0, 50],
// ]

const positions = [
  [-35, 0],
  [-25, 0],
  [-5, 0],
  [0, 0],
  [5, 0],
  [25, 0],
  [35, 0],
];
import { rand } from "~/scripts/helpers/dom";

export default {
  name: "Konami",
  data() {
    return {
      active: false,
      src: null,
      index: 1,
      x: 0,
      y: 0,
      rotate: 0,
    };
  },
  mounted() {
    const k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let n = 0;
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === k[n++]) {
        if (n === k.length) {
          this.activate();
          n = 0;
          return false;
        }
      } else {
        n = 0;
      }
    });
  },
  methods: {
    activate() {
      this.active = true;
      // this.src = path.replace('{src}', this.index)

      // this.index++
      // if (this.index > imgCount) {
      //     this.index = 1
      // }

      this.src = path;
      const p = positions[rand(0, positions.length - 1)];
      this.x = p[0];
      this.y = p[1];

      // if (this.x < 0) this.rotate = 90
      // if (this.x > 0) this.rotate = -90
      // if (this.y < 0) this.rotate = 180
      // if (this.y > 0) this.rotate = 0

      setTimeout(() => {
        this.active = false;
      }, 1000);
    },
    onLoad(e) {
      console.log(e);
    },
  },
};
</script>
<style lang="scss">
@import "~/styles/_base";

.Konami {
  z-index: map-get($zindex, above-all);
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 15vw;
  max-height: 25vh;
  transform-origin: center center;
}

.konami-slide-enter-active,
.konami-slide-leave-active {
  transition: transform 0.6s;
}

.konami-slide-enter,
.konami-slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(0, 100%, 0);
}
</style>
