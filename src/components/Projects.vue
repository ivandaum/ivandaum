<template>
  <ul class="Projects is-column is-flex is-wrap js-rainbowed is-relative">
    <li
      v-for="(project, index) in work"
      :key="index"
      class="
        Project
        is-column
        is-4-widescreen
        is-5-desktop
        is-5-tablet
        is-12-phone
        is-margin-bottom-2
        is-offset-1
      "
    >
      <a
        :href="project.url"
        :title="project.title + ' - ' + project.type"
        target="_blank"
        rel="noreferrer"
      >
        <div
          ref="project"
          class="Project--picture is-relative is-flex is-margin-bottom-1"
          :style="{ backgroundColor: project.color }"
          v-html="project.coverHtml"
        ></div>
        <div class="is-flex is-baseline is-justified-x">
          <h3 class="Project--title is-h2 is-padding-right-1">
            <span>{{ project.title }}</span>
          </h3>
        </div>
        <p class="is-column is-9 is-12-touch">
          <span v-if="project.type">{{ project.type }}</span>
          <span v-if="project.description"> — {{ project.description }}</span>
        </p>
      </a>
    </li>
  </ul>
</template>
<script>
// import { observe, range, lerp } from '../assets/scripts/helpers/dom'

export default {
  name: "Projects",
  props: {
    work: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      scales: [],
      imgDatas: [],
    };
  },
  methods: {
    // getProjectsDatas() {
    //     const height = window.innerHeight
    //     this.imgDatas = []
    //     this.$refs.project.map(project => {
    //         const rect = project.getBoundingClientRect()
    //         const top = rect.top - height
    //         const bottom = top + height
    //         this.imgDatas.push({ bottom, top })
    //         this.scales.push(1)
    //     })
    // },
    // render() {
    //     const scroll = this.ScrollManager.scroll
    //     this.$refs.project.map((project, i) => {
    //         const d = this.imgDatas[i]
    //         if (d.isIntersecting) {
    //             const p = range(this.ScrollManager.scroll, d.top, d.bottom) * 0.01
    //             if ((p >= 0) & (p <= 1)) {
    //                 this.$set(this.scales, i, lerp(1.3, 1, p))
    //             }
    //         }
    //     })
    // },
    // onResize() {},
  },

  mounted() {
    // this.getProjectsDatas()
    // this.$refs.project.map((project, i) => {
    //     observe(project, ({ isIntersecting }) => {
    //         this.imgDatas[i].isIntersecting = isIntersecting
    //     })
    // })
    // this.RafManager.addQueue(() => this.render())
  },
};
</script>

<style lang="scss">
@import "~/styles/_base";

.Projects {
  transform: translate3d(0, var(--padding), 0);
  transition: transform var(--speed) var(--easing),
    opacity var(--speed) var(--easing);
}

.Project {
  &--picture {
    padding-top: 100%;
    overflow: hidden;

    picture {
      top: 0;
      position: absolute;
      left: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  &--picture img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  &--title {
    margin-bottom: calc(var(--padding) * 0.5);
  }

  a:hover &--title span {
    border-bottom: 0.1rem solid var(--color-text);
  }

  @include tablet {
    &:nth-of-type(even) {
      transform: translateY(calc(var(--padding) * 10));
    }
  }
}

#app.loaded .Projects {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
</style>
