<template>
    <div class="Home is-overflow is-uppercase is-flex is-wrap is-baseline">
        <!-- <Word :scale="[0.5, 0.5]" :word="'a'" /> -->
        <Word :scale="[1, 0.5]" :word="'Freelance'" />
        <Word :scale="[1, 0.5]" :word="'developper'" :isWeightInverted="true" />
    </div>
</template>
<script>
import Word from "~/components/Word.vue";
export default {
    name: "Home",
    components: { Word },
    data() {
        return {};
    },
};
</script>
<style lang="scss">
@import "~/styles/0-variables/";
@import "~/styles/0-framework/";

.Home {
    height: vh(100);
    width: 100vw;
    padding: calc(var(--gap) * 0.5) var(--gap);
}
</style>