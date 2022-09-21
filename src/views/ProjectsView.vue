<template>
  <div class="ProjecttView">
        <div class="container my-5 py-5">
            <div class="flex-col mb-5">
                <span class="text-xl fw-600 mb-1">Projects</span>
                <span class="paragprah text-xl fw-400 op-8">
                  Crafting interfaces. Building polished software and web experiences. <br>
                   Experimenting with magical details in user interfaces.
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
import ArticleCard from '@/components/Article/ArticleCard.vue';
export default {
    components: { ArticleCard }
}
</script>

<style>

</style>