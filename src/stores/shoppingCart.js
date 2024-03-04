import { defineStore } from 'pinia'

export const useShoppingCart = defineStore('shoppingCart', {
  state:()=>{
    return{
        cartData:[
            {
                id:1,
                productName:'牛排',
                productPrice:200,
                amount:1,
            },
            {
                id:2,
                productName:'雞排',
                productPrice:200,
                amount:1,
            }
        ]
    }
  },
  // 放function
  actions:{
    addProduct(){
        this.cartData.push({
            id:this.cartData.length + 1,
            productName:'豬排',
            productPrice:150,
            amount:2
        })
    }
  }

});

