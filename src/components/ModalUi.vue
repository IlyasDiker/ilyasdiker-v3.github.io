<template>
    <div class="modal-wrapper">
        <div class="modal-container">
            <div class="container padded">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
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
    flex-direction: column;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: row-reverse;
    .modal-container{
        width: 100%;
        max-width: 1000px;
        background: white;
        color: black;
    }
}
</style>
