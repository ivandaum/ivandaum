<template>
  <div
    class="
      Footer
      is-column is-padding-top-2 is-padding-bottom-2 is-margin-top-2
    "
  >
    <div class="is-flex is-wrap is-baseline">
      <p
        class="
          js-rainbowed
          is-relative
          is-margin-bottom-1
          is-column
          is-4-widescreen
          is-5-desktop
          is-5-tablet
          is-12-phone
          is-offset-1
        "
      >
        Font :
        <a
          href="https://rsms.me/inter/"
          class="is-external"
          target="_blank"
          rel="nofollow"
          >Inter</a
        >
        by Rasmus Andersson
      </p>
      <!-- <p class="RainbowBtn is-relative is-margin-bottom-1 is-column is-2-widescreen is-3-desktop is-3-tablet is-12-phone is-offset-1">
                Activate
                <button
                    class="RainbowBtn--trigger is-relative has-text-left"
                    @click="toggleRainbow()"
                    @mouseenter="$store.commit('showLabel', { string: '🤝 + 🌈 = 💪' })"
                    @mouseleave="$store.commit('hideLabel',)"
                >
                    <p class="is-inline-block is-underline">wizard mode</p>
                    <p class="is-inline-block is-absolute is-underline">old school</p>
                </button>
            </p> -->

      <div
        class="
          js-rainbowed
          is-margin-bottom-1
          is-flex
          is-baseline
          is-relative
          is-column
          is-4-widescreen
          is-5-desktop
          is-5-tablet
          is-12-phone
          is-offset-1
        "
      >
        <ul id="contact" class="Footer__contact is-flex is-wrap">
          <li class="is-capitalize" v-for="(link, name) in contact" :key="name">
            <a
              :class="'is-underline'"
              :href="link"
              rel="nofollow"
              v-html="name"
              @mouseenter="
                name === 'email'
                  ? $store.commit('showLabel', {
                      string: 'Copy to clipboard ?',
                    })
                  : null
              "
              @mouseleave="$store.commit('hideLabel')"
              @touchstart="$store.commit('hideLabelDelayed')"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: {
    contact: {
      type: [Object, Array],
      default: [],
    },
  },
};
</script>
<style lang="scss">
@import "~/styles/_base";

.Footer {
  @include touch {
    font-size: calc(var(--size) * 1.3);
  }

  &__contact li {
    &::after {
      content: ", ";
      margin-right: 0.25em;
    }

    &:last-of-type::after {
      display: none;
    }
  }
}
</style>
