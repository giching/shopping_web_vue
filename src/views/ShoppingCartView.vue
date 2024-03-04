<!-- Shopping Cart page 購物車頁面 -->
<script>
import Nav from '@/components/nav.vue';
import shoppingCart from '@/components/shoppingCart.vue'
import goBackPrev from '@/components/goBackPrev.vue'
import confirmBtn from '@/components/confirmBtn.vue'
export default{
   components:{
    Nav,
    shoppingCart,
    goBackPrev,
    confirmBtn,
} 
}
</script>

<template>
  <main>
  <Nav></Nav>
       <div class="product-in-cart">
        <shoppingCart></shoppingCart>
        <shoppingCart></shoppingCart>
        <shoppingCart></shoppingCart>
       </div>
  <div class="price-count">
    <p class="text-lg me-8">Total:</p>
     <p class="text-xl">$6600</p>
  </div>
  <div class="btn-all">
    <RouterLink to="/"><goBackPrev></goBackPrev></RouterLink>
    <RouterLink to="/OrderInfo"><confirmBtn></confirmBtn></RouterLink>    
  </div>
  

  </main>
</template>

<style scoped>
main{
  @apply w-full flex justify-center items-center flex-col;
}
.product-in-cart{
  @apply w-full flex justify-center flex-col;
}
.price-count{
  @apply w-[80%] flex justify-end items-center p-1 mb-3;
}
.btn-all{
  @apply w-[80%] flex justify-between items-center;
}
</style>