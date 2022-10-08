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
                    <template v-if="projects.length > 0">
                        <template v-for="(item, index) in projects" :key="index">
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
                            <span class="text-base op-7">No projects found</span>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <ModalUi :open="$route.matched.length > 1" :back="'projects'">
            <router-view></router-view>
        </ModalUi>
    </div>
</template>

<script>
import ArticleCard from '@/components/Article/ArticleCard.vue';
import ModalUi from '@/components/ModalUi.vue';
export default {
    data () {
        return {
            projects: []
        }
    },
    setup(){
        
    },
    components: { ArticleCard, ModalUi }
}
</script>

<style>

</style>