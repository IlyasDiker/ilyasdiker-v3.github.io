<template>
    <div class="ContentList" id="maincontent">
        <div class="container py-5">
            <ul class="ContentList-items">
                <li>
                    <ListCard 
                        title="About me"
                        description="Who am I? Discover my Philosophy."
                        :background="require('@/assets/aboutme.jpg')"
                        />
                </li>
                <li>
                    <ListCard 
                        title="My Services"
                        description="Full-stack Technology solutions from concept & design to development & post-production support."
                        :video="require('@/assets/myservices.mp4')"
                        />
                </li>
                <li>
                    <ListCard 
                        title="My Projects"
                        description="Driving digital solutions forward."
                        
                        />
                </li>
                <li>
                    <ListCard 
                        title="Technologies"
                        description="Everything has been developed in-house, no templates or bootstrap."
                        
                        />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ListCard from '../ListCard.vue';
export default {
    components: { ListCard }
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