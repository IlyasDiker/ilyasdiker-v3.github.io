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
                                <ArticleCard 
                                    :eyebrow="`${item.topic} - ${item.created_at}`"
                                    :title="item.title"
                                    :background="item.cover"
                                />
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
    </div>
</template>

<script>
import ArticleCard from "../components/Article/ArticleCard.vue";
export default {
    data () {
        return {
            articles: []
        }
    },
    setup(){

    },
    components: { ArticleCard }
}
</script>

<style lang="scss">

</style>