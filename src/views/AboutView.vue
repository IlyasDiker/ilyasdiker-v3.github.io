<template>
  <div class="AboutView">
        <div class="container my-5 py-5">
            <div class="flex-col mb-5">
                <span class="text-xl fw-600 mb-1">About me</span>
                <span class="paragprah text-xl fw-400 op-8">
                    Located in <a class="link stealth white" aria-label="Explore Rabat on Google earth" href="https://earth.google.com/web/@33.96921885,-6.8572628,68.7775257a,30847.4058482d,35y,0h,0t,0r/data=CkIaQBI6CiQweGRhNzZiODcxZjUwYzVjMToweDdhYzk0NmVkNzQwODA3NmIqElJhYmF0Ctin2YTYsdio2KfYtxgCIAE" target="_blank">Rabat</a> ,<br>
                    Male Homosapien, making companies thrive.
                </span>
                <span class="paragraph mt-5 py-5 text-2xl">
                  Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality. Mindful that “everything around me is someone’s life work.”
                </span>
            </div>
            <div class="ContentList">
                <ul class="ContentList-items">
                    <RouterLink :to="{name:'about.whois'}" role="listitem">
                        <ArticleCard 
                            eyebrow="2030"
                            title="Who is Ilyas?"
                            description=""
                            background="https://whitewallapi.wpenginepowered.com/wp-content/uploads/2021/12/da-nft1-light1-v26-estado01-0003-min-1366x769.png"
                        />
                    </RouterLink>
                    <RouterLink :to="{name:'about.process'}" role="listitem">
                        <ArticleCard 
                            eyebrow="2030"
                            title="My Process"
                            background="https://whitewallapi.wpenginepowered.com/wp-content/uploads/2021/12/da-nft3-v16-estado01-0051-min-1366x769.png"
                        />
                    </RouterLink>
                    <RouterLink :to="{name:'about.faq'}" role="listitem">
                        <ArticleCard 
                            eyebrow="2000"
                            title="FAQ"
                            background="https://whitewallapi.wpenginepowered.com/wp-content/uploads/2021/12/da-nft2-v20-estado01-0004-min-1366x769.png"
                        />
                    </RouterLink>
                    <li>
                        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/76J1za0YlPd31bYXcDdUZ2?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </li>
                </ul>
            </div>
            <div class="flex-col my-5">
                <div class="paragraph text-base">
                    I'm clearly interested in too many things so I'm trying to slow down and be more present. Literally slow down by riding less, using less stuff in general and learn to appreciate little things. Like driving fast it kills ego. Feel free to check my <a href="https://www.linkedin.com/in/ilyasbenhssine/" target="_blank" class="link">Linkedin</a> if you are into this kind of things or send me an email like a normal person <a class="link" href="mailto:ilyasbenhssine@gmail.com">ilyasbenhssine@gmail.com</a>.
                </div>
            </div>
        </div>
        <ModalUi :open="$route.matched.length > 1" :back="'about'">
            <router-view></router-view>
        </ModalUi>
    </div>
</template>

<script>
import ArticleCard from '@/components/Article/ArticleCard.vue';
import ModalUi from '@/components/ModalUi.vue';
export default {
    components: { ArticleCard, ModalUi }
}
</script>

<style lang="scss" scoped>

</style>