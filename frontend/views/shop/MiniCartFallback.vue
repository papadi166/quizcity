<template >
<div>
<link /><div class="minicart">
  <div class="minicart--item-container" >
    You have 
    <span class="minicart--item-count" style="font-weight: 600" > 0 items</span>
    in your cart!
  </div>
  <hr />
  <ul style="list-style-type: none" >
    <li class="minicart--item" >
    <img class="placeholder"/>

      <h1 class="title"></h1>
      <p class="material">
        <span style ='font-weight: 600'>Material:</span>
        Copper
      </p>
      <p class="size">
        <span style ='font-weight: 600' >Size:</span>
        6 1/2
      </p>
      <p class="price"> (x)</p>
      <p class="remove">
        <a>
          <i class="fa fa-trash-o"></i>
          Remove from cart</a>
      </p>
    </li>
    <li class="minicart--item" >
    <img class="placeholder"/>

      <h1 class="title"></h1>
      <p class="material">
        <span style ='font-weight: 600'>Material:</span>
        Copper
      </p>
      <p class="size">
        <span style ='font-weight: 600' >Size:</span>
        6 1/2
      </p>
      <p class="price"> (x)</p>
      <p class="remove">
        <a>
          <i class="fa fa-trash-o"></i>
          Remove from cart</a>
      </p>
    </li>
    
  </ul>
  
  <div class="minicart--subtotal">
    
    <p class="minicart--subtotal-title">Subtotal</p>
    <p class="minicart--subtotal-amount">$</p>
  </div>
  <router-link :to="{name: 'Cart'}" class="btn btn-danger">View Cart Details</router-link></div> <!--{ :type => 'button', :value => 'View Cart Details' }-->
</div>
</template>

<script>


export default {
    name: 'MiniCartFallback',
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
  $width: 288px
  $floatRight: calc(100% - ($width/2))
  overflow: scroll
  position: fixed
  top:  300px
  z-index: 99999
  left: $floatRight
  transform: translate(-50%, -50%)
  width: 288px
  min-height: 400px
  max-height: 600px
  padding: 20px
  background: #fff
  border-radius: 6px
  -webkit-box-shadow: 0px 30px 130px -8px rgba(0,0,0,0.25)
  -moz-box-shadow: 0px 30px 130px -8px rgba(0,0,0,0.25)
  box-shadow: 0px 30px 130px -8px rgba(0,0,0,0.25)
  input
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