<template>
    <div class="dialog">
        <div class="container">
            <div class="dialog__content">
                <slot></slot>
        </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'DialogCard'
}
</script>
<style scoped>
.container{
    margin-left: auto;
  margin-right: auto;
    margin-top: 120px;
    width: 800px;
}
.dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(51, 157, 199, 0.91);
    position: fixed;
    position: absolute;
    display: flex;
  }

  
</style>