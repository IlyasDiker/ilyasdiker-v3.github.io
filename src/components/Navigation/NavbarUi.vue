<template>
    <nav class="navbar">
        <div class="container">
            <ul class="navbar-items">
                <Transition name="heroicon">
                    <router-link to="/#hero" v-show="(isScrolled && $route.name == 'home') || $route.name != 'home'" aria-label="Home"><img src="@/assets/logo-w.png" alt=""></router-link>
                </Transition>
                <router-link to="/about" role="listitem">About me</router-link>
                <router-link to="/projects" role="listitem">Projects</router-link>
                <router-link to="/blog" role="listitem">Blog</router-link>
                <a :href="socials.github" target="_blank" role="listitem"><i class='bx bxl-github'></i> <span class="nav-btn-text">Github</span></a>
                <a :href="socials.linkedin" target="_blank" role="listitem"><i class='bx bxl-linkedin-square'></i> <span class="nav-btn-text">LinkedIn</span></a>
            </ul>
        </div>
    </nav>
</template>

<script>
import {socials} from '@/data/about'
export default {
    data () {
        return {
            isScrolled: false
        }
    },
    methods: {
        handleScroll(e){
            if(e.target.scrollTop > 100){
                this.isScrolled = true;
            } else {
                this.isScrolled = false;
            }
        }
    },
    created () {
        let app = document.querySelector('#app');
        app.removeEventListener('scroll', this.handleScroll);
        app.addEventListener('scroll', this.handleScroll);
    },
    unmounted(){
        let app = document.querySelector('#app');
        app.removeEventListener('scroll', this.handleScroll);
    },
    setup(){
        return {socials}
    }
}
</script>

<style lang="scss" scoped>
    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        overflow-x: auto;
        padding-top: var(--container-padding);
        background: linear-gradient(var(--background), transparent);
        z-index: 100;
        transition: padding 0.2s ease-in-out;
        &-items{
            display: flex;
            flex-direction: row;
            gap: 5px;
            a, li{
                white-space: nowrap;
                flex-wrap: nowrap;
                width: fit-content;
                color: white;
                font-size: 15px;
                height: 20px;
                padding: 16px 10px;
                cursor: pointer;
                display: flex;
                align-items: center;
                text-transform: uppercase;
                background: rgba(44, 45, 48, 0.7);
                backdrop-filter: blur(10px);
                border-radius: 2px;
                transition: 0.2s ease-in-out;
                // gap: 7px;
                img{
                    width: 20px;
                    aspect-ratio:  1 / 1;
                }
                &:hover{
                    background: rgba(12, 179, 148, 0.7);
                }
                &.router-link-active{
                    background: rgba(12, 179, 148, 0.7);
                }
            }
        }
    }

    .nav-btn-text{
        max-width: 250px;
        overflow: hidden;
        transition: 0.2s ease-in-out;
        padding-inline-start: 7px;
    }

    @media (max-width:600px) {
        .nav-btn-text{
            opacity: 0;
            padding: 0;
            max-width: 0px;
            visibility: hidden;
        }
    }

    .heroicon-enter-active,
    .heroicon-leave-active {
        transition: max-width 0.8s ease-in-out, transform 0.2s ease-in-out;
        max-width: 50px;
    }

    .heroicon-enter-from,
    .heroicon-leave-to {
        max-width: 0;
        opacity: 0;
        transform: translateX(-100%);
    }
</style>