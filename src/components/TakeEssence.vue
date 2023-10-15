<template>
    <dialog-card v-if="DataStore.show">
        <div class="container">
        <div class="first">
        <p 
        class="textEssence"
        >
            Создадим сущности по интересующим параметрам
        </p>
        <my-btn
        class="btn"
        @click="DataStore.showTake()"
        >Закрыть</my-btn><br/>
        </div>
        <div class="second">
        <div
        class="select"
        >
            <drop-down/>
        </div>
        </div>
        </div>
    </dialog-card>
</template>
<script>
import MyBtn from './UI/MyBtn.vue';
import DropDown from './DropDown.vue';
import DialogCard from '../components/UI/DialogCard.vue'
import { useDataStore } from '../store/DataStore.js'
export default{
    data(){
        return{
            DataStore: useDataStore()
        }
    },
    name: 'take-essence',
    components: {
        DialogCard,
        DropDown,
        MyBtn
    }
}
</script>
<style scoped>
.first{
    display: flex;
    justify-content: space-between;
    position:relative;
}
.btn{
    color:aliceblue;
    font-family: 'Open Sans', sans-serif;
    float: right;
    position:absolute;
    right: 0;
    background:none; 
    border:none; 
}
.btn:hover{
    text-decoration: underline
}
.textEssence{
    text-align: center;
    font-size: 40px;
    font-weight: 300;
    font-style: italic;
    color: white;
}
.container{
    width: 600px;
    margin: auto;
}
.select{
    text-align: center;
}
.textP{
    text-align: center;
    font-size: 25px;
    font-weight: 400;
    color: white;
}
.second{
    
}
</style>