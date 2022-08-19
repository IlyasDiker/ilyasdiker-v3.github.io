<template>
    <footer class="FooterSection py-5" id="footer">
        <div class="container">
            <div class="flex-col">
                <span class="text-sm fw-400 mb-3">Socials</span>
                <ul class="footer-list">
                    <li>
                        <a class="link white mono uppercase"><i class='bx bxl-instagram'></i> Instagram</a>
                    </li>
                    <li>
                        <a class="link white mono uppercase"><i class='bx bxl-linkedin-square' ></i> LinkedIn</a>
                    </li>
                    <li>
                        <a class="link white mono uppercase">Mail</a>
                    </li>
                </ul>
                <span class="text-xs op-7 fw-300 mt-5 mono">© {{new Date().getFullYear()}} - Ilyas Benhssine - <a href="https://www.precision-eng.software/" target="_blank" class="mono link white">Precision Engineering</a></span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
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