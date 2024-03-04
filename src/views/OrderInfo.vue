<!-- Order info 訂購資訊(訂購人填寫資料) -->
<script >
import Nav from '@/components/nav.vue';
import orderform from '@/components/orderform.vue'
import goBackPrev from '@/components/goBackPrev.vue'
import confirmBtn from '@/components/confirmBtn.vue'

export default{
   components:{
    Nav,
    orderform,
    goBackPrev,
    confirmBtn,
} 
}
</script>

<template>
  <main>
    <Nav></Nav>
    <h2 class="text-lg">訂購清單</h2>
    <ul class="w-full flex justify-center flex-col items-center">
      
      <ol>
        <img src="https://images.unsplash.com/photo-1708972789135-dfb1e2f5f7d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="product-img">
        <p class="product-name">product-name</p>
        <p class="product-price">product-price</p>
      </ol>
      <ol>
        <img src="https://images.unsplash.com/photo-1708972789135-dfb1e2f5f7d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="product-img">
        <p class="product-name">product-name</p>
        <p class="product-price">product-price</p>
      </ol>
      <p class="text-end w-[50%]">Total:$6600</p>
    </ul>
    <orderform></orderform>
    <div class="btn-com">
      <RouterLink to="/shoppingCartView"><goBackPrev></goBackPrev></RouterLink>
    <RouterLink to="/ComfirmInfo"><confirmBtn></confirmBtn></RouterLink>   
    </div>

  </main>
</template>
<style scoped>
main{
  @apply w-full flex items-center justify-center flex-col;
}
ol{
  @apply w-[50%] h-[60px] flex items-center justify-between border-b-2 border-gray-300 mb-3;

}
img{
  width: 60px;
  height: 60px;
  object-fit: cover;
}
.btn-com{
  @apply w-[50%] h-[60px] flex items-center justify-between 
}

</style>