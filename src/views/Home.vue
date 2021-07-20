<template>
    <div class="Home container">
        <div class="is-flex is-justified is-left-y">
            <p>Ivan Daum<br />Freelance developer<br />in Paris, France</p>
            <router-link to="/about">About</router-link>
        </div>

        <div class="w-100 is-flex is-justified is-right-y is-relative">
            <ul>
                <li v-for="(project, i) in projects" :key="i">
                    <a
                        :href="project.url"
                        target="_blank"
                        class="is-inline-flex is-center-y"
                    >
                        {{ project.title }}
                        <span class="Home__separator">/</span>
                        <span class="Home__subtitle">{{ project.type }}</span>
                    </a>
                </li>
            </ul>

            <div class="Home__picture is-absolute">
                <div
                    class="is-absolute"
                    v-for="(project, i) in projects"
                    :key="'cover' + i"
                    v-html="project.coverHtml"
                />
            </div>

            <ul class="Home__newtorks">
                <li>
                    <a
                        class="is-relative"
                        @mouseleave="onEmailLeave"
                        @mouseenter="onEmailEnter"
                        @click="onEmailClick"
                    >
                        <p class="is-absolute" v-html="emailMessage" />
                        Email
                    </a>
                </li>
                <li v-for="(network, a) in socialNetworks" :key="'network' + a">
                    <a target="_blank" :href="network.url">
                        {{ network.name }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { copyToClipboard } from "~/scripts/functions";

export default {
    name: "Home",
    data() {
        return {
            projects: window.projects,
            socialNetworks: about.socialNetworks,
            emailMessage: "",
        };
    },

    methods: {
        onEmailLeave() {
            this.emailMessage = "";
        },
        onEmailEnter() {
            this.emailMessage = "Copy to clipboard ?";
        },
        onEmailClick() {
            copyToClipboard(window.about.email);
            this.emailMessage = "Copied !";
        },
    },
};
</script>
<style lang="scss">
@import "~/styles/0-variables/";
@import "~/styles/0-framework/";

.Home {
    &__subtitle {
        opacity: 0.5;
    }

    &__separator {
        font-size: 1.2rem;
        margin: 0 0.8rem;
    }

    &__bottom {
        @include desktop {
            position: absolute;
            bottom: 0;
        }
    }

    &__picture {
        right: 0;
        bottom: 0;
    }

    &__newtorks {
        @include desktop {
            text-align: right;
        }
    }

    a p {
        background: color("white");
        color: color("black");
        right: 100%;
        white-space: nowrap;
        transform: translate(-1rem, -1rem);
        font-size: 1.2rem;
        padding: 0 0.5rem;
    }
}
</style>