<script setup>
import { carts } from '@/stores/carts'
const cart=carts()
cart.$subscribe((mutation,state)=>{
  console.log(mutation)
  const key=cart.getcartkey()
  if (key){
    localStorage.setItem(key,JSON.stringify(state.cartItems))
    console.log(`triggered subscribe !!`)
  }
})
</script>
