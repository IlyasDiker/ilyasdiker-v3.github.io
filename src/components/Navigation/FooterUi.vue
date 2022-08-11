<template>
    <footer class="FooterSection py-5" id="footer">
        <div class="container">
            <div class="flex-col">
                <span class="text-sm fw-400 mb-2">Follow me</span>
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