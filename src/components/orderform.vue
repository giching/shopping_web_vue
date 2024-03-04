<!-- 資料填寫 -->
<script>

</script>

<template>
    
<div class="form-info">
    <h1 class="col-span-12">訂購人資訊</h1>
    <p class="col-span-4">Name:<input type="text" class="info-input"></p>
    <p class="col-span-4">Phone:<input type="text"></p>
    <p class="col-span-4">Email:<input type="text"></p>
    <p class="col-span-12">Address:<input type="text" class="w-[90%]"></p>
    <p class="col-span-6">付款方式:<input type="radio" name="payment"></input> 刷卡 <input type="radio" name="payment"></input>現金</p>
    <p class="col-span-6">寄送方式: <input type="radio" name="shipping"></input> 超商<input type="radio" name="shipping"></input>黑貓</p>
</div>
</template>

<style scoped>
h1{
    font-size:28px !important;
}
.form-info{
    width: 50%;
    background-color: #dcd2f6;
    padding: 10px;
    gap:5px;
    @apply grid grid-cols-12 place-content-center;

}
input{
    margin-left: 5px;
   
}
.info-input{
     width: 80%;
}
</style>