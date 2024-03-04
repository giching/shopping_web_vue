<!-- 購物車顯示列表元件 -->
<script>

</script>

<template>
    <main>
        <div class="cart-all">
            <input type="checkbox" class="w-[15px]">
            <div class="cart-img">
                <img src="https://images.unsplash.com/photo-1708972789135-dfb1e2f5f7d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="cart-product-img">
            </div>
            <div class="product-info-all ">
                <div class="product-name col-span-3 ">nikee</div>
                <div class="product-price col-span-3">$2200</div>
                <div class="btn-all col-span-6 flex justify-end items-center mb-2 ">
                    <button class="rounded-s-full bg-slate-700 w-[20px] text-white">-</button>
                    <!-- 需做個防呆:如果數量<1 or >20 需跳顯示-->
                    <div class="w-[40px] bg-slate-200  text-center" >2</div>
                    <button class="rounded-e-full bg-slate-700 w-[20px] text-white">+</button>
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
    @apply w-[80%] flex m-auto p-3 gap-5 border-b-2 border-gray-300 mb-3 ;
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