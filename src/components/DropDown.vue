<template>
    <div class="wrapper">
    <div class="select-fixff">
    <select v-model="selected" class="input"  @change="click()">
            <option class="opt1" selected disabled hidden ></option>
            <option class="opt2" v-for="(essence, id) in DataStore.essences"
            :value="essence.name"
            :key="id"
            >
                {{ essence.name }}
            </option>
        </select>
        </div>
        <my-btn @click="DataStore.PostDataDeal()" :styleBtn="styleBtn">
            CLICK
        </my-btn>
        </div>
</template>
<script>
import MySelected from  '../components/UI/MySelected.vue'
import MyBtn from './UI/MyBtn.vue';
import { useDataStore } from '../store/DataStore';
export default{
    name: 'drop-down',
    components:{
    MySelected,
    MyBtn
},
    data(){
        return{
            DataStore: useDataStore(),
            styleBtn: false
        }
    },
methods:{
    click(){
        if(this.selected){
            this.styleBtn = !this.styleBtn 
        }
        console.log(this.selected)
    },
    selectedFun(){
        
    }
}}
</script>
<style scoped>
.wrapper{
    display: flex;
    justify-content: center;
    gap: 60px;
}
.input{
    border-radius: 10px;
    width: 300px;
    height: 50px;
}
.opt1{
    height: 50px;
}
</style>