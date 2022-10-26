<template>
    <div class="music-player">
        <div class="music-player-container">
            <iframe style="border-radius:12px"
                :src="`https://open.spotify.com/embed/track/${media}?utm_source=generator`" 
                width="100%"
                height="352" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        media: String
    }
}
</script>

<style lang="scss">
.music-player{
    &-container {
        display: flex;
        max-width: 250px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 10px;
}
</style>