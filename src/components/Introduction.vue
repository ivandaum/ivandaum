<template>
  <div
    id="top"
    class="Introduction is-padding-top-2 js-rainbowed is-relative is-column"
  >
    <h1
      class="Home__title is-h1 is-block is-margin-bottom-2 is-padding-right-1"
    >
      Ivan Daum<br />
      Freelance developer<br />
      in Paris, France
    </h1>

    <ul class="is-flex is-wrap is-h2">
      <li
        class="
          is-margin-bottom-2
          is-column
          is-5-widescreen
          is-6-desktop
          is-6-tablet
          is-12-phone
        "
      >
        Making internet things <br />
        from 2014 -->
        <a
          href="#about"
          class="is-underline"
          @mouseenter="
            $store.commit('showLabel', {
              string: 'That\'s ' + (date.getFullYear() - 2014) + '+ years yo',
            })
          "
          @mouseleave="$store.commit('hideLabel')"
          >today</a
        >
      </li>

      <li
        class="
          is-margin-bottom-2
          is-column
          is-5-widescreen
          is-6-desktop
          is-6-tablet
          is-12-phone
        "
      >
        <a
          class="is-underline"
          :href="contact['email']"
          rel="nofollow"
          @mouseenter="
            $store.commit('showLabel', { string: 'Copy to clipboard ?' })
          "
          @mouseleave="$store.commit('hideLabel')"
          @touchstart="$store.commit('hideLabelDelayed')"
          >Email</a
        >,
        <a
          class="is-underline"
          :href="contact['twitter']"
          target="_blank"
          rel="nofollow"
          @mouseenter="
            $store.commit('showLabel', { string: 'Last work in real time' })
          "
          @mouseleave="$store.commit('hideLabel')"
          >twitter</a
        >
        <span class="is-block is-hidden-phone" />and
        <a
          href="#contact"
          class="is-underline"
          @mouseenter="
            $store.commit('showLabel', { string: 'Github & linkedin' })
          "
          @mouseleave="$store.commit('hideLabel')"
        >
          others</a
        >↓.
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Introduction",
  props: {
    contact: {
      type: [Object, Array],
      default: {},
    },
  },
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>
<style lang="scss">
@import "~/styles/_base";

.Introduction {
  margin-bottom: calc(var(--padding) * 10);

  @include desktop {
    min-height: 100vh;
    margin-bottom: calc(var(--padding) * -4);
  }
}
</style>
