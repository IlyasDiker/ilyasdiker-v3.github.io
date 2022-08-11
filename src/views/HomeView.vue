<template>
  <div class="HomeView">
    <HeroSection/>
    <ContentList/>
  </div>
</template>

<script>
import HeroSection from '@/components/Sections/HeroSection.vue';
import ContentList from '../components/Sections/ContentList.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ContentList
  }
}
</script>
