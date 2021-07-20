<template>
    <span
        class="LetterWeight"
        v-html="letter"
        :style="`font-weight:${weightEased}; transform: translate3d(${xEased}px,${yEased}px,0)`"
    />
</template>
<script>
import { range, distance2d, lerp } from "~/scripts/functions";
import { mapState } from "vuex";

const EASING = 0.1;

export default {
    computed: mapState(["windowWidth", "windowHeight"]),
    name: "LetterWeight",
    props: {
        letter: {
            type: String,
            default: "",
        },
        calcCenter: {
            type: Boolean,
            default: false,
        },
        isWeightInverted: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            weight: 100,
            weightEased: 100,
            center: 0,
            x: 0,
            y: 0,
            xEased: 0,
            yEased: 0,
        };
    },
    watch: {
        calcCenter(v) {
            if (v) {
                this.$store.commit("onResize", () => this.onResize());
            }
        },
    },
    mounted() {
        const min = 100;
        const max = 800;

        this.weightArea = [min, max];
        if (this.isWeightInverted) {
            this.weightArea = [max, min];
        }

        this.RafManager.addQueue(() => this.render());
    },
    methods: {
        onResize() {
            const r = this.$el.getBoundingClientRect();
            const x = r.x + r.width * 0.5;
            const y = r.y + r.height * 0.5;

            this.center = [Math.floor(x), Math.floor(y)];
        },
        render() {
            this.calcWeight();
            // this.calcTranslate();
        },
        calcWeight() {
            const max = this.windowHeight;
            const mouse = this.$store.state.mouse;

            const d = distance2d([mouse[0], 0], [this.center[0], 0]);
            const t = range(d, max, 0) * 0.01;

            this.weight = lerp(this.weightArea[0], this.weightArea[1], t);
            const e = (this.weight - this.weightEased) * EASING;
            this.weightEased += Math.floor(e);
        },
        calcTranslate() {
            const mouse = this.$store.state.mouse;
            const mx = mouse[0];
            const my = mouse[1];

            const max = this.windowWidth;

            let x = 0;
            let y = 0;

            const dx = distance2d([mx, 0], [this.center[0], 0]);
            const tx = range(dx, max, 0) * 0.01;

            const dy = distance2d([0, my], [0, this.center[1]]);
            const ty = range(dy, max, 0) * 0.01;

            if (Math.abs(tx) <= 1 && Math.abs(ty) <= 1) {
                const xDirection = mouse[0] < this.center[0] ? -1 : 1;
                const yDirection = mouse[1] < this.center[1] ? -1 : 1;

                x = (1 - tx) * 10 * xDirection;
                y = (1 - ty) * 10 * yDirection;
            }

            this.xEased += (x - this.xEased) * 0.2;
            this.yEased += (y - this.yEased) * 0.2;
        },
    },
};
</script>
<style lang="scss">
.LetterWeight {
    transform-origin: center center;
}
</style>
