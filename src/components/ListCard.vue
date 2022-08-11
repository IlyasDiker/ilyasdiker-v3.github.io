<template>
    <div class="listcard" tabindex="0">
        <img :src="background" role="presentation" class="listcard_background" v-if="background">
        <video :src="video" role="presentation" class="listcard_background" v-if="video" autoplay loop muted></video>
        <div class="flex-col content">
            <span class="text-2xl fw-500 mb-1">{{title}}</span>
            <span class="text-base op-7 paragraph">{{description}}</span>
        </div>
        <div class="listcard_footer content">
            <span class="mono">{{footer}}</span>
            <span class="listcard_">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </span>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    background: String,
    video: String,
    title: String,
    description: String,
  },
}
</script>

<style lang="scss" scoped>
    .listcard{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        padding: 30px;
        background: #000000;
        border-radius: 10px;
        border: 1px solid #1a1a1a;
        transition: 0.2s ease-in-out;
        box-shadow: #0000003d 0px 8px 20px 6px;
        overflow: hidden;
        aspect-ratio: 16 / 9;
        isolation: isolate;
        cursor: pointer;
        &:hover, &:focus{
            transform: scale(1.005);
            box-shadow: #00000071 0px 8px 30px 6px;
            .listcard_footer{
                transform: translateX(5px);
            }
        }
        
        .content{
            z-index: 1;
        }

        &::after{
            position: absolute;
            content: '';
            top: 0;
            right: 0;
            left: 0;
            height: 200px;
            background: linear-gradient(var(--background), transparent);
            z-index: 0;
        }

        &.small{
            width: 100%;
            height: 300px;
        }

        &_background{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            inset: 0;
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            z-index: -1;
            pointer-events: none;
            opacity: .7;
        }
        &_footer{
            transition: 0.2s ease-in-out;
            display: flex;
            flex-direction: row;
            align-content: flex-end;
            justify-content: space-between;
        }
    }
</style>