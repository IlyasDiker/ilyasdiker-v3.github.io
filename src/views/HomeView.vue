<template>
  <div class="HomeView">
    <HeroSection/>
    <ContentList/>
    <ModalUi :open="$route.matched.length > 1" :back="'home'">
      <router-view></router-view>
    </ModalUi>
  </div>
</template>

<script>
import ModalUi from '@/components/ModalUi.vue';
import HeroSection from '@/components/Sections/HeroSection.vue';
import ContentList from '../components/Sections/ContentList.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ContentList,
    ModalUi
}
}
</script>
