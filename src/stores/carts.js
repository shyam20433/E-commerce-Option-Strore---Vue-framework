import { defineStore } from "pinia";
import { useAuthStore } from "./auth";


export const carts = defineStore('cart', {
  state: () => {
    const currentUser=JSON.parse(localStorage.getItem("currentUser"))
    const key=currentUser  ? `cart_${currentUser.id}` :null;
    return {
      cartItems:key ? JSON.parse(localStorage.getItem(key))||[]
      :[]
    }
  },
  getters: {

    totalprice:(state)=>{
      return state.cartItems.reduce((total,item)=>{
        return total+(item.price*item.quantity)
      },0);
    },
    totalitems:(state)=>{
      return state.cartItems.reduce((total,item)=>{
        return total+(item.quantity)
      },0);
    }
  },
  actions: {




    getcartkey(){
      const auth=useAuthStore();
      if(!auth.currentUser){
        return null;
      }
      return `cart_${auth.currentUser.id}`;
    },
    loadcart(){
      const key=this.getcartkey();
      if(!key){
        this.cartItems=[];
        return;
      }
      this.cartItems=JSON.parse(localStorage.getItem(key))||[];
    },
    /* savecart(){
      const key=this.getcartkey()
      if(key){
        localStorage.setItem(key,JSON.stringify(this.cartItems))
      }
    }, */



    addtocart(products) {

      const exits=this.cartItems.find(
        item=>item.id===products.id
      );
      if (exits){
        exits.quantity++;
        alert(`${products.name}'s qunatity is increased to ${exits.quantity}`)
      }
      else{
      this.cartItems.push({...products,quantity:1})
      alert(`${products.name} added`)
    }
      const key=this.getcartkey()
      localStorage.setItem(key,JSON.stringify(this.cartItems))


  //this.savecart()
},

    delcart(index){
      this.cartItems.splice(index,1)
      const key=this.getcartkey()
      localStorage.setItem(key,JSON.stringify(this.cartItems))
      alert(`product removed from the cart`)
      //this.savecart()
    },
    clearcart(){
      const key=this.getcartkey()
      this.cartItems=[]
      if(key){
      localStorage.removeItem(key)}
    },
    increasequantity(id){
      const exits=this.cartItems.find(
        item=>item.id===id
      )
      if (exits){
        exits.quantity++;
      }
      const key=this.getcartkey()
      localStorage.setItem(key,JSON.stringify(this.cartItems))
      //this.savecart()

    },
    decreasequantity(id){
      const index=this.cartItems.findIndex(
        item=>item.id==id
      )
      if (index!==-1){
        this.cartItems[index].quantity--

        if(this.cartItems[index].quantity===0){
          this.cartItems.splice(index,1)
        }
        const key=this.getcartkey()
        localStorage.setItem(key,JSON.stringify(this.cartItems))
      }
      //this.savecart()
    },
    resetcart(){
      this.cartItems=[];
    }
  }
})
