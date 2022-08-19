<template>
    <div class="BlogView">
        <div class="container my-5 py-5">
            <div class="flex-col mb-5">
                <span class="text-xl fw-600 mb-1">Blog</span>
                <span class="paragprah text-xl fw-400 op-9">
                    Tips tricks and stories, about<br>
                    business, software engineering & cars.
                </span>
            </div>
            <div class="ContentList">
                <ul class="ContentList-items">
                    <li>
                        <ArticleCard 
                            eyebrow="TECH - 04 JAN"
                            title="Software Engineering"
                        />
                    </li>
                    <template>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import ArticleCard from "../components/Article/ArticleCard.vue";
export default {
    components: { ArticleCard }
}
</script>

<style lang="scss" scoped>
    .ContentList{
        display: flex;
        flex-direction: column;
        &-items{
            display: flex;
            flex-direction: column;
            list-style: none;
            gap: 40px;
            width: 80%;
            max-width: 1000px;
            transition: 0.2s ease-in-out;
            @media (max-width: 1000px) {
                width: 100%;
            }
        }
    }
</style>