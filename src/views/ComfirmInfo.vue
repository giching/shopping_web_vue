<!-- comfirm order info下單資訊 -->
<script>
import Nav from '@/components/nav.vue';

export default{
   components:{
    Nav,
} 
}
</script>

<template>
  <main>
    <Nav></Nav>
    <h1><font-awesome-icon icon="fa-solid fa-clipboard-check" />下單成功!</h1>
    <div class="check-order-list">
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
      <div class="costomer-info">
        <p class="text-lg">訂購人資訊</p>
        <p>name:xxx</p>
        <p>phone:00000000</p>
        <p>address:xxxxxxxxxxxxxxxxxxxxx</p>
        <p>payment:credit</p>
        <p>shipping: 7-11</p>        
      </div>
    </div>
    <RouterLink to="/"><button class="goHomePage">繼續購物</button></RouterLink>
    

  </main>
</template>

<style scoped>
main{
  @apply w-full flex justify-center items-center flex-col;
}
h1{
  font-size: 42pt;
  margin-top: 20px;
}
.check-order-list{
  @apply w-full flex justify-center items-center flex-col;
}
ol{
  @apply w-[50%] h-[60px] flex items-center justify-between border-b-2 border-gray-300 mb-3;

}
img{
  width: 60px;
  height: 60px;
  object-fit: cover;
}
.costomer-info{
  @apply w-1/2 bg-slate-400 p-5 mt-5;
}
</style>