<template>
    <div class="App has-width-100">
        <div class="has-width-100 is-relative">
            <router-view />
        </div>
    </div>
</template>
<script>
// import { getMousePosition } from "~/scripts/functions";

export default {
    components: {
        // Nav,
    },
    created() {
        // this.$store.commit("onResize", () => this.onResize());
        // window.addEventListener("mousemove", (e) => this.onMouseMove(e));
    },
    methods: {
        // onResize() {
        //     const windowWidth = window.innerWidth;
        //     const windowHeight = window.innerHeight;
        //     this.$store.commit("set", { windowWidth, windowHeight });
        // },
        // onMouseMove(e) {
        //     const mouse = getMousePosition(e);
        //     this.$store.commit("set", { mouse });
        // },
    },
};
</script>
<style lang="scss">
@import "~/styles/main.scss";

.App {
    height: vh(100);
}
</style>
