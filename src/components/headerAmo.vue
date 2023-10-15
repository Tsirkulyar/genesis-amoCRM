<template>
    <div class="headerDiv">
    <div>
        <img src="../../public/sprite.png"/>
    </div>
    <div class="rightHeader">
        <a class="aText" href="#">Продукт</a>
        <a class="aText" href="#">Цены</a>
        <a class="aText" href="#">Отзывы</a>
        <a class="aText" href="#">Кейсы</a>
    </div>
    </div>
</template>
<script>
export default{
    name: 'header-amo'
}
</script>
<style scoped>
.headerDiv{
    display: flex;
    justify-content: space-between;
}
.rightHeader{
    display: flex;
    gap: 70px;
}
.aText{
    font-size: 25px;
    color: white;
    text-decoration: none;
}
.aText:hover{
    text-decoration: underline
}
</style>