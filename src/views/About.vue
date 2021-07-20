<template>
    <div class="About container">
        <div class="is-flex is-right-x">
            <router-link to="/">Close</router-link>
        </div>

        <div>
            <div class="About__bio" v-html="bio"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Home",
    components: {},
    data() {
        return {
            bio: window.about.bio,
        };
    },
};
</script>
<style lang="scss">
@import "~/styles/0-variables/";
@import "~/styles/0-framework/";

.About__bio {
    max-width: 44rem;

    a {
        border-color: color("white");
    }

    p {
        margin-bottom: 1em;
    }
}
</style>