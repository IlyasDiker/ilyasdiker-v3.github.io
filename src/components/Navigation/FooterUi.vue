<template>
    <footer class="FooterSection py-5" id="footer">
        <div class="container">
            <div class="flex-col">
                <span class="text-sm fw-400 mb-3">Socials</span>
                <ul class="footer-list">
                    <li>
                        <a class="link white mono uppercase" :href="socials.instagram" target="_blank" aria-label="Instagram"><i class='bx bxl-instagram'></i> Instagram</a>
                    </li>
                    <li>
                        <a class="link white mono uppercase" :href="socials.github" target="_blank" aria-label="Github"><i class='bx bxl-github'></i> Github</a>
                    </li>
                    <li>
                        <a class="link white mono uppercase" :href="socials.linkedin" target="_blank" aria-label="LinkedIn"><i class='bx bxl-linkedin-square' ></i> LinkedIn</a>
                    </li>
                    <li>
                        <a class="link white mono uppercase" :href="`mailto:${socials.mail}`" aria-label="Send Email">Mail</a>
                    </li>
                </ul>
                <span class="text-xs op-7 fw-300 mt-5 mono">© {{new Date().getFullYear()}} - Ilyas Benhssine - <a href="https://www.precision-eng.software/" target="_blank" class="mono link white">Precision Engineering</a></span>
            </div>
        </div>
    </footer>
</template>

<script>
import {socials} from '@/data/about'
export default {
    setup(){
        return { socials }
    }
}
</script>

<style lang="scss" scoped>
    .footer{
        &-list{
            display: flex;
            flex-direction: row;
            gap: 20px;
            list-style: none;
            font-size: 13px;
        }
    }
</style>