<template>
  <div class="Index" @mousemove="onMouseMove">
    <div
      class="
        Ruler
        is-column
        is-12
        is-12-touch
        is-fixed
        is-flex
        is-padding-left-2
        is-padding-right-2
      "
    >
      <div
        class="is-relative is-column is-1 is-1-touch"
        :key="i"
        v-for="i in 12"
      ></div>
    </div>

    <Konami />

    <p
      class="Label is-fixed"
      ref="label"
      v-html="$store.state.string"
      v-show="$store.state.visible"
      :style="{ transform: `translate3d(${cursor[0]}px,${cursor[1]}px, 0)` }"
    />

    <div class="Index__content js-view is-padding-left-2 is-padding-right-2">
      <Introduction :contact="contact" />
      <Projects :work="work" />
      <About :bio="bio" />

      <Footer :contact="contact" />
      <!-- <canvas class="Index__canvas is-absolute" @mousedown="$el.classList.add('is-focused')" @mouseup="$el.classList.remove('is-focused')" /> -->
    </div>
  </div>
</template>

<script>
import Introduction from "~/components/Introduction.vue";
import About from "~/components/About.vue";
import Projects from "~/components/Projects.vue";
import Footer from "~/components/Footer.vue";
import Konami from "~/components/Konami.vue";
import { copyToClipboard } from "~/scripts/helpers/dom.js";
// import RainbowMaker from '~/scripts/fun/RainbowMaker.js'

export default {
  components: {
    Introduction,
    About,
    Projects,
    Footer,
    Konami,
  },
  data() {
    return {
      cursor: [],
      contact: [],
      work: window.projects,
      bio: window.about.bio,
      contact: window.about.contact,
    };
  },

  mounted() {
    const mailto = document.querySelectorAll('a[href*="mailto:"]');
    mailto.forEach((link) => this.toClipboard(link));

    const scrollto = document.querySelectorAll('a[href*="#"]');
    scrollto.forEach((link) => this.scrollTo(link));

    // this.RainbowMaker = new RainbowMaker({ canvas: this.$el.querySelector('canvas') })

    this.RafManager.addQueue(() => this.ScrollManager.onScroll());
    // this.RafManager.addQueue(() => this.RainbowMaker.render())

    // setTimeout(() => this.toggleRainbow(), 50)
  },

  methods: {
    scrollTo(link) {
      link.addEventListener("click", (e) => {
        this.$store.commit("hideLabel");
        const $el = this.$el.querySelector("#" + link.href.split("#")[1]);
        if ($el) {
          e.preventDefault();
          let y = this.ScrollManager.scroll + $el.getBoundingClientRect().top;

          if (y + window.innerHeight > this.$el.offsetHeight) {
            y = this.$el.offsetHeight - window.innerHeight;
          }

          this.ScrollManager.scrollTo({ y });
        }
      });
    },

    toClipboard(link) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        copyToClipboard(link.href.replace("mailto:", ""));
        this.$store.commit("showLabel", {
          string: "It's in your clipboard now!",
        });
      });
    },

    onMouseMove(e) {
      this.cursor = [e.clientX + 10, e.clientY + 10];
    },
  },
};
</script>

<style lang="scss">
@import "~/styles/_base";

.Label {
  color: var(--color-background);
  background-color: var(--color-text);
  display: inline-block;
  font-size: 1em;
  line-height: 1em;
  padding: 0.25em;
  text-transform: lowercase;
  z-index: map-get($zindex, above-all);
}

.Ruler {
  z-index: map-get($zindex, above-all);
  pointer-events: none;
  opacity: 0.1;
  display: none;

  > div::before {
    content: "";
    border-left: 0.1rem solid var(--color-text);
    height: 100vh;
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
  }

  > div:last-of-type::before {
    border-right: 0.1rem solid var(--color-text);
  }
}

// .RainbowBtn {
//     z-index: map-get($zindex, above-section);

//     &--trigger {
//         overflow: hidden;
//         display: inline-block;
//         height: 1.25em;
//         color: var(--color-text);
//         padding: 0;

//         p {
//             transition: transform var(--speed) var(--easing);
//             line-height: 1em;
//         }

//         p:last-of-type {
//             left: 0;
//             transform: translate3d(0, 1.25em, 0);
//         }
//     }
// }

// .js-rainbowed {
//     transition: opacity var(--speed) var(--easing);
// }

// body.rainbow-everywhere {
//     .js-rainbowed {
//         opacity: 0;
//         pointer-events: none;
//         z-index: map-get($zindex, base);
//     }

//     .Index {
//         cursor: grab !important;
//     }

//     .Index.is-focused {
//         cursor: grabbing !important;
//     }

//     .RainbowBtn {
//         p:first-of-type {
//             transform: translate3d(0, -1.5em, 0) rotate(5deg);
//         }

//         p:last-of-type {
//             transform: translate3d(0, 0.1em, 0) rotate(-5deg);
//         }
//     }

//     .Index__canvas {
//         display: block;
//     }
// }
</style>
