<template>
    <nav class="navbar">
        <div class="container">
            <ul class="navbar-items">
                <router-link to="/#hero"><img src="@/assets/logo-w.png" alt=""></router-link>
                <router-link to="/" role="listitem">About me</router-link>
                <router-link to="/services" role="listitem">My services</router-link>
                <router-link to="/projects" role="listitem">Projects</router-link>
                <router-link to="/technologies" role="listitem">Technologies</router-link>
                <a href="" role="listitem"><i class='bx bxl-github'></i> Github</a>
                <a href="" role="listitem"><i class='bx bxl-linkedin-square'></i> LinkedIn</a>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding-top: 20px;
        z-index: 100;
        &-items{
            display: flex;
            flex-direction: row;
            gap: 5px;
            a, li{
                white-space: nowrap;
                flex-wrap: nowrap;
                width: fit-content;
                color: white;
                font-size: 15px;
                height: 20px;
                padding: 16px 10px;
                cursor: pointer;
                display: flex;
                align-items: center;
                text-transform: uppercase;
                background: rgba(44, 45, 48, 0.7);
                backdrop-filter: blur(10px);
                border-radius: 2px;
                transition: 0.2s ease-in-out;
                gap: 7px;
                img{
                    width: 20px;
                    aspect-ratio:  1 / 1;
                }
                &:hover{
                    background: rgba(12, 179, 148, 0.7);
                }
                &.router-link-active{
                    background: rgba(12, 179, 148, 0.7);
                }
            }
        }
    }
</style>