<template>
    <div class="shortcut-widget">
        <div class="widgets-list">
            <div class="grid grid-gap-5">
                <div class="col-12">
                    <ShortcutButtonWidget class="white">
                        <template v-slot:label>
                            Show intetest <br> in working with me
                        </template>
                        <template v-slot:icon>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </template>
                    </ShortcutButtonWidget>
                </div>
                <Transition name="slideup">
                    <div class="col-6" v-show="isScrolled">
                        <ShortcutButtonWidget>
                            <template v-slot:label>
                                cv
                            </template>
                            <template v-slot:icon>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                            </template>
                        </ShortcutButtonWidget>
                    </div>
                </Transition>
                <Transition name="slideup">
                    <div class="col-6" v-show="isScrolled">
                        <ShortcutButtonWidget>
                            <template v-slot:label>
                               eoa
                            </template>
                            <template v-slot:icon>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </template>
                        </ShortcutButtonWidget>
                    </div>
                </Transition>
                <Transition name="slideup">
                    <div class="col-12" v-show="isScrolled">
                        <ShortcutButtonWidget>
                            <template v-slot:label>
                                Estimate your project <br>
                                Pricing calculator
                            </template>
                            <template v-slot:icon>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </template>
                        </ShortcutButtonWidget>
                    </div>
                </Transition>
            </div>
        </div>
        <div class="widgets-list mobile">

        </div>
    </div>
</template>

<script>
import ShortcutButtonWidget from './ShortcutButtonWidget.vue';
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
    components: { ShortcutButtonWidget }
}
</script>

<style lang="scss" scoped>
    .shortcut-widget{
        position: fixed;
        right: var(--container-padding);
        bottom: var(--container-padding);
        inset-inline-end: var(--container-padding);
        inset-block-end: var(--container-padding);
        z-index: 20;
        width: 20%;
        min-width: 350px;
        max-width: 400px;
        @media (max-width: 1000px) {
            width: fit-content;
            min-width: none;
        }
    }

    .slideup-enter-active,
    .slideup-leave-active {
        transition: 0.5s ease-in-out;
        max-height: 100px;
    }

    .slideup-enter-from,
    .slideup-leave-to {
        max-height: 0;
        opacity: 0;
        transform: translateY(100%);
    }
</style>