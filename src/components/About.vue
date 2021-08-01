<template>
  <div class="About is-margin-top-1 js-rainbowed is-relative">
    <h2 class="is-h1 is-padding-top-2 is-padding-bottom-2" id="about">About</h2>

    <div
      class="
        is-h2
        is-column
        is-4-widescreen
        is-5-desktop
        is-6-tablet
        is-offset-1
        is-12-phone
      "
      v-html="bio"
    ></div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    bio: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.About p {
  margin-bottom: 2rem;

  a {
    text-decoration: underline;
  }
}
</style>