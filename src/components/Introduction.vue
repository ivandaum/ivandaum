<template>
    <div class="Introduction has-width-100 has-height-100" />
</template>
<script>
import TextureLoader from "~/scripts/utils/TextureLoader";
import { getMousePosition } from "~/scripts/functions";
import { mapState } from "vuex";

export default {
    computed: mapState(["windowWidth", "windowHeight"]),
    mounted() {
        const width = this.windowWidth;
        const height = this.windowHeight;

        const projects = window.projects;
        const images = [];
        document.fonts.ready.then(() => {
            for (let i = 0; i < projects.length; i++) {
                const text = projects[i].title;
                const image = TextureLoader.generateFromText({
                    text,
                    fontSize: 64,
                    width,
                    height,
                });

                images.push({ text, image });

                document.body.appendChild(image);
            }
        });
    },
    methods: {
        onResize() {
            const width = this.windowWidth;
            const height = this.windowHeight;
        },
        onClick(e) {
            const { x, y } = getMousePosition(e);
            console.log(x, y);
        },
    },
};
</script>
<style lang="scss">
.Introduction {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
