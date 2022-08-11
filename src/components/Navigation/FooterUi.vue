<template>
    <footer class="FooterSection py-5" id="footer">
        <div class="container">
            <div class="flex-col">
                <span class="text-sm fw-400 mb-3">Socials</span>
                <ul class="footer-list">
                    <li>
                        <a class="link"><i class='bx bxl-instagram'></i> Instagram</a>
                    </li>
                    <li>
                        <a class="link"><i class='bx bxl-linkedin-square' ></i> LinkedIn</a>
                    </li>
                    <li>
                        <a class="link">Mail</a>
                    </li>
                </ul>
                <span class="text-xs op-5 mt-5 mono">© Copyright {{new Date().getYear()}} - Ilyas Benhssine</span>
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

        }
    }
</style>