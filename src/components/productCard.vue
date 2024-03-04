<!-- 商品卡 -->
<script setup>

</script>

<template>
  <main class="">
    <div class="product-all col-span-3 bg-blue-300 flex items-center flex-col rounded-md">
        <div class="product-img-all">
          <img src="https://images.unsplash.com/photo-1708972789135-dfb1e2f5f7d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="product-img">
        </div>
        <div class="w-full product-info grid grid-cols-12 p-2 mb-2 ">
          <div class="product-name col-span-9  ">CakeCake</div>
          <div class="product-price col-span-3 text-end mb-1">$200</div>   
          <div class="product-detail col-span-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit esse aspernatur harum soluta earum asperiores nulla alias nisi sunt et debitis reprehenderit.</div>        
        </div>
        <div class="btn-all flex mb-2">
            <button class="rounded-s-full">-</button>
            <!-- 需做個防呆:如果數量<1 or >20 需跳顯示-->
            <input type="number" min="1" max="20" placeholder="0" class="amount p-1" >
            <button class="rounded-e-full">+</button>
        </div>
    </div>
  </main>
</template>

<style scoped>
main{
  @apply box-border w-[300px] mb-5 ;
}
.product-img-all{
  @apply flex justify-center items-center box-border bg-white rounded-md mb-1 ;
  /* height: 2vh; */
  width: 100%;
  object-fit: cover;
  height: 300px;
}
.product-img{
  width: 100%;
  height: 100%;
  object-fit: cover
}
img{
  @apply rounded-md;
}
button{
  @apply bg-slate-800 text-white w-8 h-8 ;
}
.amount{
  @apply w-10;
}
</style>