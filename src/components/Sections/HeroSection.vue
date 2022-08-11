<template>
    <section id="hero" class="HeroSection">
        <img class="HeroSection_background" src="" alt="">
        <div class="container py-5">
            <div class="flex-col">
                <h1 class="text-5xl fw-600 mb-4">Ilyas Benhssine</h1>
                <span class="text-5xl fw-300 mb-5">Software Engineer</span>
                <a class="scroll-indicator" href="#maincontent">
                    <span class="mono">Scroll down for more</span>
                    <svg viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.17 0.5C3.21 0.5 0 3.488 0 7.175V13.514C0 16.251 1.8 18.625 4.35 19.658V17.508C2.97 16.642 2.04 15.189 2.04 13.514V7.175C2.04 4.549 4.35 2.399 7.17 2.399C10.02 2.399 12.3 4.549 12.3 7.175V13.514C12.3 15.189 11.37 16.642 9.99 17.508V19.658C12.54 18.625 14.34 16.279 14.34 13.514V7.175C14.34 3.488 11.13 0.5 7.17 0.5Z" fill="white"/>
                        <path d="M7.17137 8.93382C7.74137 8.93382 8.19137 8.51482 8.19137 7.98482V5.41482C8.19137 4.88482 7.74137 4.46582 7.17137 4.46582C6.60137 4.46582 6.15137 4.88482 6.15137 5.41482V7.98482C6.15137 8.48682 6.60137 8.93382 7.17137 8.93382Z" fill="white"/>
                        <path class="scroll-indicator-animate" d="M9.89855 22.3774L8.18855 23.9694V15.6184C8.18855 15.0884 7.73855 14.6694 7.16855 14.6694C6.59855 14.6694 6.14855 15.0884 6.14855 15.6184V23.9404L4.43855 22.3494C4.04855 21.9864 3.38855 21.9864 2.99855 22.3494C2.60855 22.7124 2.60855 23.3264 2.99855 23.6894L6.44855 26.9014C6.65855 27.0974 6.89855 27.1814 7.16855 27.1814C7.43855 27.1814 7.67855 27.0974 7.88855 26.9014L11.3386 23.6894C11.7286 23.3264 11.7286 22.7124 11.3386 22.3494C10.9196 21.9864 10.2886 21.9864 9.89855 22.3774Z" fill="white"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .HeroSection{
        position: relative;
        display: flex;
        min-height: 100vh;
        height: fit-content;
        flex-direction: column;
        justify-content: flex-end;
        background-image: url('@/assets/wallpaper.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        max-height: 1000px;
        .container{
            z-index: 2;
        }
        &::after{
            content: '';
            position: absolute;
            z-index: 1;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 200px;
            background: linear-gradient(transparent, var(--background));
        }
    }

    .scroll-indicator{
        display: flex;
        flex-direction: row;
        gap: 20px;
        text-transform: uppercase;
        font-weight: 300;
        opacity: .7;
        width: fit-content;
        align-items: center;
        svg{
            height: 18px;
        }
        &-animate{
            animation: scroll-indic 2s infinite;
        }
    }

    @keyframes scroll-indic {
        0% {
            transform: translateY(-2px);
        }
        50% {
            background-color: translateY(3px);
        }
        100% {
            background-color: translateY(-2px);
        }
    }
</style>