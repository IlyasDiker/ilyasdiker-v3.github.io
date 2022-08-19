<template>
    <div class="shortcut-button">
        <span class="text-sm mono uppercase">
            <slot name="label"></slot>
        </span>
        <span class="shortcut-button-icon">
            <slot name="icon"></slot>
        </span>
    </div>
</template>

<script>
export default {
  props: {
    label: String
  },
}
</script>

<style lang="scss">
    .shortcut-button{
        display: flex;
        align-items: flex-end;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
        color: white;
        background: rgba(255, 255, 255, 0.219);
        backdrop-filter: blur(10px);
        cursor: pointer;
        padding: 15px;
        border-radius: 5px;
        transition: 0.2s ease-in-out;
        &:hover{
            background: rgba(255, 255, 255, 0.3);
        }
        &-icon{
            width: fit-content;
            height: 20px;
            width: 20px;
            svg{
                width: 20px;
            }
        }
        &.white{
            background: white;
            color: black;
        }
    }
</style>