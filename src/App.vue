<template>
  <div class="App">
    <router-view />
  </div>
</template>
<script>
import "~/plugins/raf-manager.js";
import "~/plugins/scroll-manager.js";

export default {
  mounted() {
    const style = "background:black; padding:5px; color:white;";
    console.log("%cThis portfolio was made with Vue", style);
    console.log("%cFind the source on github :", style);
    console.log("%chttps://github.com/ivandaum/ivandaum", style);

    this.calcVh();

    window.addEventListener("resize", () => {
      this.calcVh();
    });

    setTimeout(() => this.$el.classList.add("loaded"), 500);
  },
  methods: {
    calcVh() {
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
  },
};
</script>


<style lang="scss">
@import "~/styles";
</style>