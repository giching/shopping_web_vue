<!-- nav -->
<script setup>

</script>

<template>
  <main>
    <nav>
    <div class="logo col-span-3 text-center flex items-center justify-center">
      <RouterLink to="/">
      <img src="https://fakeimg.pl/50/" class="p-0 m-0" ></RouterLink>
    </div>
    <div class="nav-items-all col-span-9 flex items-center justify-end">
      <RouterLink to="/shoppingCartView"><button class="cart p-2 me-5"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></button></RouterLink>
    </div>
    </nav>
  </main>
</template>

<style>
main{
  @apply box-border;
}
nav{
    @apply bg-slate-600 w-full h-[8vh] text-white grid grid-cols-12 mb-5;
}
</style>