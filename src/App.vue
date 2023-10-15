<template>
  <div v-bind:class="{ active: DataStore.show }">
  <div class="container"  >
    <header-a-m-o></header-a-m-o>
    <text-div></text-div>
    <my-btn 
    class="btn"
    @click="DataStore.showTake()"
    >Получить сущности</my-btn>
</div>
</div>
<take-essence></take-essence>
</template>
<script>
import TakeEssence from './components/TakeEssence.vue'
import TextDiv from './components/TextDiv.vue';
import MyBtn from './components/UI/MyBtn.vue';
import HeaderAMO from './components/headerAMO.vue';
import { useDataStore } from './store/DataStore';

export default {
 data(){
  return{
    DataStore: useDataStore()
  }
 },
 components:{
  TakeEssence,
  TextDiv,
  MyBtn,
  HeaderAMO
 },
}
</script>

<style scoped>
.container{
  margin: auto;
  width: 900px;
  height: 100%;
}
.btn{
  font-family: 'Open Sans', sans-serif;
  background: #006f9f;
  border: none;
  color: white;
  width: 262px;
  height: 50px;
}
.active{
  top: 0;
    bottom: 0;
    right: 0;
    left: 0;
 filter: blur(8px);
}
</style>
