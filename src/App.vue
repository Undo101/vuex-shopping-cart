<template>
  <div id="app">
    <h3>Vuex购物车demo</h3>
    <shop-list></shop-list>
    <shop-cart></shop-cart>
    <shop-info></shop-info>
  </div>
</template>

<script>
import ShopList from '@/components/ShopList.vue'
import ShopCart from '@/components/ShopCart.vue' 
import ShopInfo from '@/components/ShopInfo.vue'
export default {
  name: 'app',
  components:{
    ShopList,
    ShopCart,
    ShopInfo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
