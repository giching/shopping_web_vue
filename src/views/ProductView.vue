<!-- Product  page 商品頁 -->
<script>
import { mapState,mapActions } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import Nav from '@/components/nav.vue';
import productCard from '@/components/productCard.vue'
import productList from '@/components/productList.vue'

export default{
   components:{
    Nav,
    productCard,
    productList,
  },
  data(){
    return{
      layout:'grid',
    }
  },
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
    <div class="layout w-[90%] flex justify-end mb-2 gap-2">
      <button class="p-2" @click="layout='grid'"><font-awesome-icon icon="fa-solid fa-grip" /></button>
      <button class="p-2" @click="layout='list'"><font-awesome-icon icon="fa-solid fa-table-list" /></button>
    </div>
    <div class="productCardView">
      <div class="productCardAll" v-if="layout=='grid'">
        <productCard/>
        <productCard/>
        <productCard/>
        <productCard/>
        <productCard/>
        <productCard/>
        <productCard/>
        <productCard/>
      </div>
      <div class="productCardAll-list" v-if="layout=='list'">
        <productList/>
        <productList/>
        <productList/>
        <productList/>
        <productList/>
        <productList/>
        <productList/>
        <productList/>
      </div>

    </div>

  </main>
</template>

<style scoped>
main{
  @apply box-border flex justify-center flex-col;
}
.productCardAll{
  @apply box-border w-full flex gap-3 justify-center flex-wrap;
}
.productCardAll-list{
}
.layout button{
@apply hover:bg-gray-200 rounded;
}
</style>