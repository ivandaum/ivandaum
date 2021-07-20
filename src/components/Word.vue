<template>
    <div
        class="Word is-flex is-center"
        :style="`width:${scale[0] * 100}%;height:${scale[1] * 100}%;`"
    >
        <div
            class="Word__content is-absolute is-flex is-space-between"
            :style="`transform: scale3d(${sxEased}, ${syEased}, 1)`"
            ref="content"
        >
            <LetterWeight
                v-for="(l, i) in word.split('')"
                :key="l + i"
                :letter="l"
                :calcCenter="isScaled"
                :isWeightInverted="isWeightInverted"
            />
        </div>
    </div>
</template>
<script>
import LetterWeight from "~/components/LetterWeight.vue";

const EASING = 0.1;

export default {
    name: "Word",
    components: { LetterWeight },
    props: {
        word: {
            type: String,
            default: "",
        },
        scale: {
            type: Array,
            default: [1, 1],
        },
        isWeightInverted: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            sx: 1,
            sy: 1,
            sxEased: 1,
            syEased: 1,
            isScaled: false,
        };
    },
    mounted() {
        this.$store.commit("onResize", () => this.onResize());
        this.RafManager.addQueue(() => this.calcSize());
    },
    methods: {
        onResize() {
            this.isScaled = false;
            this.calcSize();

            this.sxEased = this.sx;
            this.syEased = this.sy;
            this.$nextTick(() => (this.isScaled = true));
        },
        calcSize() {
            const $el = this.$el;
            const $c = this.$refs.content;

            const size = [$el.offsetWidth, $el.offsetHeight];
            const wordSize = [$c.offsetWidth, $c.offsetHeight];

            this.sx = size[0] / wordSize[0];
            this.sy = size[1] / wordSize[1];

            const x = (this.sx - this.sxEased) * EASING;
            const y = (this.sy - this.syEased) * EASING;

            this.sxEased += x;
            this.syEased += y;
        },
    },
};
</script>
<style lang="scss">
@import "~/styles/0-variables/";
@import "~/styles/0-framework/";
.Word {
    transform-origin: left center;
    font-size: 5vw;
    font-weight: 500;
}
</style>
