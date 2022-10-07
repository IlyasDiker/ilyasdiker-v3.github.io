<template>
    <div class="modal-wrapper" :class="open ? 'open':''">
        <div class="modal-backdrop" @click="goBack()">
        </div>
        <div class="modal-container">
            <div class="container padded">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    goBack(){
        this.$router.push({name: this.back ?? 'home'});
    }
  },
  props: {
    open: Boolean,
    back: String
  },
    
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    inset: 0;
    display: flex;
    flex-direction: row;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    visibility: hidden;
    transition: 0.2s ease-in-out;
    &.open{
        opacity: 1;
        visibility: visible;
        .modal-container{
            transform: translateX(0);
        }
    }
    .modal-backdrop{
        display: flex;
        flex-grow: 1;
    }
    .modal-container{
        width: 100%;
        height: 100%;
        max-width: 1000px;
        background: white;
        color: black;
        flex-grow: 1;
        transition: 0.2s ease-in-out;
        transform: translateX(100%);
    }
    @media (max-width: 1050px) {
        flex-direction: column;
        .modal-container{
            max-height: 90vh;
            transform: translateY(100%);
            &.open{
                transform: translateY(0);
            }
        }
    }
}
</style>
