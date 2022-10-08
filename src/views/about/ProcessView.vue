<template>
  <div class="flex-col">
    <div class="flex-col container padded py-4 gap-10">
      <span class="text-3xl fw-600">My Process</span>
      <span class="text-xl fw-500">The process is where you learn, grow, develop. It's the only path to your goals.</span>
    </div>
    <div class="cd-cover-container" :style="{background: '#cf2f61'}">
      <img src="@/assets/covers/1.png" alt="Cd cover of the song Welcome to Los Santos - The Alchemist, Freedie Gibs, Oh No" title="Welcome to Los Santos - The Alchemist, Freedie Gibs, Oh No">
    </div>
    <div class="container padded py-5">
      <h1 class="text-3xl fw-8  00 mb-3">1 - Briefing</h1>
      <p class="paragraph">Send me a detailed brief with the following information: who you are, core values, business goals, target audience, what you sell, required features, scope of the project (or sitemap), timeframes and deadlines, examples of other websites you like and everything else you think is important.</p>
    </div>
    <div class="cd-cover-container" :style="{background: '#3c4356'}">
      <img src="@/assets/covers/2.png" alt="Cd cover of the song Wise Woke | Supply & Demand - Lord Apex, V Don" title="Wise Woke | Supply & Demand - Lord Apex, V Don">
    </div>
    <div class="container padded py-5">
      <h1 class="text-3xl fw-8  00 mb-3">2 - Evaluation</h1>
      <p class="paragraph">I will take a close look at your brief and assess whether the project meets the terms and requirements of both parties. If there is a match, we will have a online meeting to discuss how to proceed.</p>
    </div>
    <div class="cd-cover-container" :style="{background: '#aa2a1e'}">
      <img src="@/assets/covers/3.png" alt="Cd cover of the song September - Earth, Wind & Fire" title="September - Earth, Wind & Fire">
    </div>
    <div class="container padded py-5">
      <h1 class="text-3xl fw-8  00 mb-3">3 - KickOff</h1>
      <p class="paragraph">We discuss approaches and concepts to find the perfect solution for your needs. Multiple sessions can be held if necessary.</p>
    </div>
    <div class="cd-cover-container" :style="{background: '#734426'}">
      <img src="@/assets/covers/4.png" alt="Cd cover of the song Il Ricordo Di Serena - Riz Ortolani" title="Il Ricordo Di Serena - Riz Ortolani">
    </div>
    <div class="container padded py-5">
      <h1 class="text-3xl fw-8  00 mb-3">4 - Design</h1>
      <p class="paragraph">This is where the magic happens. I will work on art direction, concept and design. In the first phase I present a mood board or 2-3 screens showing the look and feel of the final product. After the direction has been approved, I design the entire project.</p>
    </div>
    <div class="cd-cover-container" :style="{background: '#f28fb5'}">
      <img src="@/assets/covers/5.png" alt="Cd cover of the song Dirty Deeds Done Dirt Cheap - AC/DC" title="Dirty Deeds Done Dirt Cheap - AC/DC">
    </div>
    <div class="container padded py-5">
      <h1 class="text-3xl fw-8  00 mb-3">5 - Development</h1>
      <p class="paragraph">After approval of the design/mood, the respective screen design is developed. I will update regularly on the status of development so you always have a clear insight into the progress.</p>
    </div>
    <div class="cd-cover-container" :style="{background: '#415f67'}">
      <img src="@/assets/covers/6.png" alt="Cd cover of the song More Spell on You - Eddie Johns" title="More Spell on You - Eddie Johns">
    </div>
    <div class="container padded py-5">
      <h1 class="text-3xl fw-8  00 mb-3">6 - Quality Assurance</h1>
      <p class="paragraph">After development is complete, we continue to test on multiple browsers and devices to fix bugs. After your final approval, the site is ready to ship.</p>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cd-cover-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  max-height: 400px;
  background: darkgray;
  position: relative;
  img{
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>