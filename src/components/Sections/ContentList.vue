<template>
    <div class="ContentList" id="maincontent">
        <div class="container py-5">
            <ul class="ContentList-items">
                <li>
                    <router-link to="/about">
                        <ListCard 
                            title="About me"
                            description="Who am I? Discover my Philosophy."
                            :background="require('@/assets/aboutme.jpg')"
                        />
                    </router-link>
                </li>
                <li>
                    <router-link to="/projects">
                        <ListCard 
                            title="My Projects"
                            description="Driving digital solutions forward."
                            :background="require('@/assets/myprojects.jpg')"
                            />
                    </router-link>
                </li>
                <li>
                    <router-link to="/blog">
                        <ListCard 
                            title="Blog"
                            description="Everything has been developed in-house, no templates or bootstrap."
                            :background="require('@/assets/technologies.jpg')"
                            />
                    </router-link>
                </li>
                <!-- <li>
                    <router-link to="/services">
                        <ListCard 
                            title="My Services"
                            description="Full-stack Technology solutions from concept & design to development & post-production support."
                            :video="require('@/assets/myservices.mp4')"
                            />
                    </router-link>
                </li> -->
            </ul>
        </div>
        <ShortcutWidget/>
    </div>
</template>

<script>
import ListCard from '../ListCard.vue';
import ShortcutWidget from '../Widgets/ShortcutWidget.vue';
export default {
    components: { ListCard, ShortcutWidget }
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