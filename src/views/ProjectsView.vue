<template>
    <div class="ProjecttView">
        <div class="container my-5 py-5">
            <div class="flex-col mb-5">
                <span class="text-xl fw-600 mb-1">Projects</span>
                <span class="paragprah text-xl fw-400 op-8">
                    Creating next level <br>
                    digital products.
                </span>
            </div>
            <div class="ContentList">
                <ul class="ContentList-items">
                    <template v-if="projects.length > 0">
                        <template v-for="(item, index) in projects" :key="index">
                            <li>
                                <a :href="item?.redirect" target="_blank">
                                    <ArticleCard 
                                        :eyebrow="`${item.topic} - ${item.created_at}`"
                                        :title="item.title"
                                        :background="item.cover"
                                        :description="item?.description"
                                    />
                                </a>
                            </li>
                        </template>
                    </template>
                    <template v-else>
                        <li>
                            <span class="text-base op-7">No projects found</span>
                        </li>
                    </template>
                    <li>
                        <a :href="socials.github+'?tab=repositories'" target="_blank">
                            <ArticleCard
                                class="small"
                                :eyebrow="`More`"
                                title="More small projects on Github"
                                background="https://github.blog/wp-content/uploads/2020/12/102573561-8e872300-40a3-11eb-9feb-b480aeae0564.png?resize=1024%2C513"
                                description=""
                            />
                        </a>
                    </li>
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
import {projects} from '@/data/projects'
import {socials} from '@/data/about'
export default {
    data () {
        return {
        }
    },
    setup(){
        return {projects, socials}
    },
    components: { ArticleCard, ModalUi }
}
</script>

<style>

</style>