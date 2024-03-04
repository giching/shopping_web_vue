<!-- Product  page 商品頁 -->
<script>
import { mapState,mapActions } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import Nav from '@/components/nav.vue';
import productCard from '@/components/productCard.vue'

export default{
   components:{
    Nav,
    productCard,
} ,
computed:{
  ...mapState(useCounterStore,['count']),
},
methods:{
  ...mapActions(useCounterStore,['addCount'])
}

}
</script>

<template>
  <main>
    <Nav></Nav>
    <div class="productCardView">
      <div class="productCardAll">
        <productCard></productCard> 
        <productCard></productCard> 
        <productCard></productCard> 
        <productCard></productCard> 
        <productCard></productCard> 
        <productCard></productCard> 
        <productCard></productCard> 
        <productCard></productCard> 
      </div>

    </div>
    <!-- 0304課堂練習(可刪)(s) -->
    <div class="bg-pink-300">
      {{ count }}
    </div>
    <button @click="addCount">增加</button>
    <!-- 0304課堂練習(可刪)(e) -->

  </main>
</template>

<style scoped>
main{
  @apply box-border flex justify-center flex-col;
}
.productCardAll{
  @apply box-border w-full flex gap-3 justify-center flex-wrap;
}
</style>