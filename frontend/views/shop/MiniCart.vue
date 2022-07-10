<template >
<div>
<link /><div class="minicart">
<<<<<<< HEAD
  <div class="minicart--item-container" >
    You have 
    <span class="minicart--item-count" style="font-weight: 600" > {{cart[0].products.length}} items</span>
    in your cart!
  </div>
  <hr />
  <ul style="list-style-type: none" >
    <li class="minicart--item" v-for="item in cart[0].products" :key="item" >
    <img class="placeholder" :src="item.image"/>

      <h1 class="title">{{item.title}}</h1>
=======
  <div class="minicart--item-container">
    You have 
    <span class="minicart--item-count" style="font-weight: 600" > 3 items</span>
    in your cart!
  </div>
  <hr />
  <ul style="list-style-type: none">
    <li class="minicart--item" >
      <div class="placeholder"></div>
      <h1 class="title">Title of Product 01</h1>
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
      <p class="material">
        <span style ='font-weight: 600'>Material:</span>
        Copper
      </p>
      <p class="size">
        <span style ='font-weight: 600' >Size:</span>
        6 1/2
      </p>
<<<<<<< HEAD
      <p class="price">{{item.price* item.count}} {{$store.getters.getCurrency}} (x{{item.count}})</p>
=======
      <p class="price">$90.00 USD (x1)</p>
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
      <p class="remove">
        <a>
          <i class="fa fa-trash-o"></i>
          Remove from cart</a>
      </p>
    </li>
<<<<<<< HEAD
    
  </ul>
  
  <div class="minicart--subtotal">
    <p class="minicart--subtotal-title">Subtotal</p>
    <p class="minicart--subtotal-amount">${{cart_total}}</p>
  </div>
  <!-- <hr> -->
  <router-link :to="{name: 'Cart'}" class="btn btn-danger input">View Cart Details</router-link></div> <!--{ :type => 'button', :value => 'View Cart Details' }-->
=======
    <li class="minicart--item">
      <div class="placeholder"></div>
      <h1 class="title">Some Product 02</h1>
      <p class="material">
        <span style ='font-weight: 600'>Material:</span>
        Copper
      </p>
      <p class="size">
        <span style ='font-weight: 600'>Size:</span>
        6 1/2
      </p>
      <p class="price">$90.00 USD (x1)</p>
      <p class="remove">
        <a>
          <i class="fa fa-trash-o"></i>
          Remove from cart</a>
      </p>
    </li>
    <li class="minicart--item">
      <div class="placeholder"></div>
      <h1 class="title">Third Product…</h1>
      <p class="material">
        <span style ='font-weight: 600'>Material:</span>
        Copper
      </p>
      <p class="size">
        <span style ='font-weight: 600'>Size:</span>
        6 1/2
      </p>
      <p class="price">$90.00 USD (x1)</p>
      <p class="remove">
        <a href ="#"> 
          <i class="fa fa-trash-o"></i>
          Remove from cart</a>
      </p>
    </li>
  </ul>
  <hr />
  <div class="minicart--subtotal">
    <p class="minicart--subtotal-title">Subtotal</p>
    <p class="minicart--subtotal-amount">$270.00 USD</p>
  </div>
  <input type="button" value="View cart Details"/></div> <!--{ :type => 'button', :value => 'View Cart Details' }-->
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
</div>
</template>

<script>
<<<<<<< HEAD
import {ref} from 'vue'

export default {
    name: 'MiniCart',
    async setup() {
      const cart = ref(null);
      let cart_total = ref(null);
      const response = await fetch(process.env.VUE_APP_ROOT_API + "api/cart")
      cart.value = await response.json()
      let total_value_temp = 0
      cart_total.value = cart.value[0]['products'].forEach(item => {

        total_value_temp += item.price * item.count
      })

       cart_total.value = total_value_temp
      return {
        cart,
        cart_total
      }

      
      

      
    },

    mounted() {
      console.log(this.cart_total)
=======
export default {
    name: 'MiniCart',
    async setup() {
      const favourites = await fetch(process.env.VUE_APP_ROOT_API + "api/cart")
      this.$store.state.cart = await favourites.json()

      return {
        favourites
      }
      

      
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
    }
}
</script>

<style lang="sass" scoped>
$text: #282834

html,
body
  font-family: sans-serif
  color: $text
  background: #FEEF5E

.minicart
<<<<<<< HEAD
  $width: 288px
  $floatRight: calc(100% - ($width/2))
  overflow: scroll
  position: fixed
  top:  320px
  z-index: 99999
  left: $floatRight
  transform: translate(-50%, -50%)
  width: 288px
  min-height: 400px
  max-height: 600px
=======
  overflow: scroll
  position: fixed
  top:  405px
  z-index: 99999
  left: 90%
  transform: translate(-50%, -50%)
  width: 288px
  height: auto
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
  padding: 20px
  background: #fff
  border-radius: 6px
  -webkit-box-shadow: 0px 30px 130px -8px rgba(0,0,0,0.25)
  -moz-box-shadow: 0px 30px 130px -8px rgba(0,0,0,0.25)
  box-shadow: 0px 30px 130px -8px rgba(0,0,0,0.25)
<<<<<<< HEAD
  .input
=======
  input
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
    margin-top: 20px
    width:  100%
    height: 43px
    font-weight: 600
    background: white
    border: 2px solid #000
    outline: none
    &:hover
      cursor: pointer
      color: #fff
      background: #000

.minicart--item-container
  margin-bottom: 10px
  font-size: .8em
  

.minicart hr
  margin-bottom: 20px
  
.minicart--item
    
  margin-bottom: 10px
  width: 100%
  float: left
  & > *
    margin-bottom: 5px
  .title
    font-size: 1.2em
    font-weight: 600
  .material
    font-size: .8em
  .size
    font-size: .8em
    margin-bottom: 10px
  .price
    margin-bottom: 10px
  .remove
    font-size: .6em

.minicart--subtotal
  margin: 20px 0
.minicart--subtotal-title
  float: left
.minicart--subtotal-amount
  float: right
  font-weight: 600
  font-size: 1.2em

.placeholder
  float: left
  margin-right: 10px
  width:  100px
  height: 100px
  background: #D8D8D8
  
a
  color: black
  text-decoration: none
  &:hover
    text-decoration: underline
</style>