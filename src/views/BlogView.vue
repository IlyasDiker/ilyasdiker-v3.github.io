<template>
    <div class="BlogView">
        <div class="container my-5 py-5">
            <div class="flex-col mb-5">
                <span class="text-xl fw-600 mb-1">Blog</span>
                <span class="paragprah text-xl fw-400 op-8">
                    Tips tricks and stories, about<br>
                    business, software engineering & cars.
                </span>
            </div>
            <div class="ContentList">
                <ul class="ContentList-items">
                    <template v-if="articles.length > 0">
                        <template v-for="(item, index) in articles" :key="index">
                            <li>
                                <a :href="item.redirect" target="_blank">
                                    <ArticleCard 
                                        :eyebrow="`${item.topic} - ${item.created_at}`"
                                        :title="item.title"
                                        :background="item.cover"
                                    />
                                </a>
                            </li>
                        </template>
                    </template>
                    <template v-else>
                        <li>
                            <span class="text-base op-7">No articles found</span>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <ModalUi :open="$route.matched.length > 1" :back="'blog'">
            <router-view></router-view>
        </ModalUi>
    </div>
</template>

<script>
import ArticleCard from "../components/Article/ArticleCard.vue";
import ModalUi from "@/components/ModalUi.vue";
import {articles} from '@/data/articles'
export default {
    data () {
        return {
        }
    },
    setup(){
        return {articles}
    },
    components: { ArticleCard, ModalUi }
}
</script>

<style lang="scss">

</style>