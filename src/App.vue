<template>
  <NavbarUi/>
  <router-view/>
  <FooterUi/>
</template>

<script>
import NavbarUi from './components/Navigation/NavbarUi.vue';
import FooterUi from './components/Navigation/FooterUi.vue';
export default {
    components: { NavbarUi, FooterUi }
}
</script>

<style lang="scss">
@import '@/styles/styles';

</style>
