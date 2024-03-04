<!-- 商品頁顯示列表 -->
<script>

</script>

<template>
    <main>
        <div class="cart-all">
            <div class="cart-img">
                <img src="https://images.unsplash.com/photo-1708972789135-dfb1e2f5f7d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="cart-product-img">
            </div>
            <div class="product-info-all ">
                <div class="flex flex-col col-span-2">
                    <div class="product-name  ">nikee</div>
                    <div class="product-price ">$2200</div>
                </div>
                
                <div class="product-price col-span-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit esse aspernatur harum soluta earum asperiores nulla alias nisi sunt et debitis reprehenderit.</div>
                <div class="flex flex-col col-span-5 justify-center items-center">
                    <div class="btn-all flex justify-end items-center mb-2 ">
                    <button class="rounded-s-full bg-slate-700 w-[20px] text-white">-</button>
                    <!-- 需做個防呆:如果數量<1 or >20 需跳顯示-->
                    <div class="w-[40px] bg-slate-200  text-center" >0</div>
                    <button class="rounded-e-full bg-slate-700 w-[20px] text-white">+</button>
                    <button class="cart p-2 me-5"><font-awesome-icon icon="fa-solid fa-cart-plus" /></button>
                </div>
                
                </div>
            </div>
    </div>
    </main>
    

</template>

<style scoped>
main{
    @apply w-full flex justify-center items-center ;
}
.cart-all{
    @apply w-[80%] flex justify-center items-center m-auto p-3 gap-5 bg-slate-300 mb-3 rounded;
}
.cart-img{
    @apply flex justify-start items-center box-border bg-pink-200 rounded-md mb-1 ;
  width: 100px;
  height: 100px;
}
.cart-product-img{
  width: 100%;
  height: 100%;
  object-fit: cover
}
.product-info-all{
    @apply w-full grid grid-cols-12 items-center p-3;
}
</style>