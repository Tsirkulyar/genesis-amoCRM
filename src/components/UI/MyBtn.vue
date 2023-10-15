<template>
    <button class="but" v-bind:class="{ active: styleBtn }">
        <slot>
        </slot>
    </button>
</template>
<script>
export default{
    name: 'MyBtn',
    props:{
        styleBtn:{
            type: Boolean,
            required: true
        }
    }
}
</script>
<style scoped>
    .but{
        width: 100px;
        border-radius: 10px;
        color:white;
         border: 1px solid black;
        background-color: transparent;
    }
    .active{
        color:white;
        border: none;
        background-color: rgb(113, 113, 247);
    }
</style>