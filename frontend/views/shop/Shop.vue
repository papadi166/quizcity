<!-- https://codepen.io/HamzaGourram/pen/XWMEvgr -->

<template>
    <div>
        <section class="section-products">
		<div class="container">
				<div class="row justify-content-center text-center">
						<div class="col-md-8 col-lg-6">
								<div class="header">
										<h3>Featured Product</h3>
										<h2>Popular Products</h2>
								</div>
						</div>
				</div>
				<div class="row">
						<!-- Single Product -->
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-1" class="single-product">
										<div class="part-1">
												<ul>
<<<<<<< HEAD
														<li><a href="#" @click="addToCart(product.id)"><font-awesome-icon :icon="[`fas`, `cart-shopping`]" size="lg" /></a></li>
														<li><a href="#" @click="addToFavourites(product.id)"><font-awesome-icon :icon="[`fas`, `heart`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `plus`]" size="lg" /></a></li>
														<li><a href="#" @click="showDetails(product.id) "><font-awesome-icon :icon="[`fas`, `expand`]" size="lg" /></a></li>
=======
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `cart-shopping`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `heart`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `plus`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `expand`]" size="lg" /></a></li>
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Premium account (lifetime)</h3>
												<h4 class="product-old-price">$79.99</h4>
												<h4 class="product-price">$49.99</h4>
										</div>
								</div>
						</div>
						<!-- Single Product -->
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-2" class="single-product">
										<div class="part-1">
												<span class="discount">15% off</span>
												<ul>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `cart-shopping`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `heart`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `plus`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `expand`]" size="lg" /></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Tournament ticket</h3>
												<h4 class="product-price">$5</h4>
										</div>
								</div>
						</div>
						<!-- Single Product -->
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-3" class="single-product">
										<div class="part-1">
												<ul>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `cart-shopping`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `heart`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `plus`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `expand`]" size="lg" /></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">QuizCity cubs</h3>
												<h4 class="product-old-price">$7</h4>
												<h4 class="product-price">$5,49</h4>
										</div>
								</div>
						</div>
						<!-- Single Product -->
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-4" class="single-product">
										<div class="part-1">
												<span class="new">new</span>
												<ul>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `cart-shopping`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `heart`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `plus`]" size="lg" /></a></li>
														<li><a href="#"><font-awesome-icon :icon="[`fas`, `expand`]" size="lg" /></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">QuizCity socks</h3>
												<h4 class="product-price">$12</h4>
										</div>
								</div>
						</div>
						
				</div>
		</div>
</section>
<<<<<<< HEAD
	<Suspense>
		<template #default><MiniCart v-show="$store.state.is_cart_open === true"></MiniCart></template>
		<template #fallback><MiniCartFallback v-show="$store.state.is_cart_open === true" ></MiniCartFallback></template>
	
	</Suspense>
=======
	<MiniCart v-if="$store.state.is_cart_open === true"></MiniCart>
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
    </div>
</template>

<script>
import MiniCart from '../../views/shop/MiniCart.vue'
<<<<<<< HEAD
import MiniCartFallback from '../../views/shop/MiniCartFallback.vue'

=======
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
export default {
    name: 'Shop',
	components: {
		MiniCart,
<<<<<<< HEAD
		MiniCartFallback
	},
	mounted() {
		this.$store.state.is_cart_open = false
	},
	methods: {
		async addTocart(product_id) {
			console.log(product_id)
          await fetch(process.env.VUE_APP_ROOT_API + "api/cart/", {
              method: 'PUT',
              headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Media-Type': 'application/json',
                    'X-CSRFToken': this.getCookie('csrftoken')
              },
              body: JSON.stringify({
				
				"owner": {
				"username": "papadi166"},
				"products": [],
				"checked_out": false,
				"total": 5

			}),
          })
          .then(res => {
              if (!res.ok) return res.text().then(text => {throw new Error(text)})
              else return res.json()
          })
          .catch(err => {console.log(err)})
			
       
		},
		addToFavourites(product_id) {
			console.log(product_id)
		},
		showDetails(product_id) {
			console.log(product_id)
		}
=======
	},
	mounted() {
		
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
	}
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

body {
    font-family: "Poppins", sans-serif;
    color: #444444;
}

a,
a:hover {
    text-decoration: none;
    color: inherit;
}

.section-products {
    padding: 80px 0 54px;
}

.section-products .header {
    margin-bottom: 50px;
}

.section-products .header h3 {
    font-size: 1rem;
    color: #fe302f;
    font-weight: 500;
}

.section-products .header h2 {
    font-size: 2.2rem;
    font-weight: 400;
    color: #444444; 
}

.section-products .single-product {
    margin-bottom: 26px;
}

.section-products .single-product .part-1 {
    position: relative;
    height: 290px;
    max-height: 290px;
    margin-bottom: 20px;
    overflow: hidden;
}

.section-products .single-product .part-1::before {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		transition: all 0.3s;
}

.section-products .single-product:hover .part-1::before {
		transform: scale(1.2,1.2) rotate(5deg);
}

.section-products #product-1 .part-1::before {
    background: url("https://www.pngmart.com/files/13/Premium-Transparent-Background.png") no-repeat center;
    background-size: cover;
		transition: all 0.3s;
}

.section-products #product-2 .part-1::before {
    background: url("https://www.pngmart.com/files/6/Ticket-PNG-Image.png") no-repeat center;
    background-size: cover;
}

.section-products #product-3 .part-1::before {
    background: url("https://papaletka.pl/wp-content/uploads/2021/05/image_50440449-scaled.jpg") no-repeat center;
    background-size: cover;
}

.section-products #product-4 .part-1::before {
    background: url("https://cdn.shopify.com/s/files/1/0590/2188/5609/products/B09CZ6N8NG.MAIN_700x.jpg?v=1629794503") no-repeat center;
    background-size: cover;
}

.section-products .single-product .part-1 .discount,
.section-products .single-product .part-1 .new {
    position: absolute;
    top: 15px;
    left: 20px;
    color: #ffffff;
    background-color: #fe302f;
    padding: 2px 8px;
    text-transform: uppercase;
    font-size: 0.85rem;
}

.section-products .single-product .part-1 .new {
    left: 0;
    background-color: #444444;
}

.section-products .single-product .part-1 ul {
    position: absolute;
    bottom: -41px;
    left: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
    opacity: 0;
    transition: bottom 0.5s, opacity 0.5s;
}

.section-products .single-product:hover .part-1 ul {
    bottom: 30px;
    opacity: 1;
}

.section-products .single-product .part-1 ul li {
    display: inline-block;
    margin-right: 4px;
}

.section-products .single-product .part-1 ul li a {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
    color: #444444;
    text-align: center;
    box-shadow: 0 2px 20px rgb(50 50 50 / 10%);
    transition: color 0.2s;
}

.section-products .single-product .part-1 ul li a:hover {
    color: #fe302f;
}

.section-products .single-product .part-2 .product-title {
    font-size: 1rem;
}

.section-products .single-product .part-2 h4 {
    display: inline-block;
    font-size: 1rem;
}

.section-products .single-product .part-2 .product-old-price {
    position: relative;
    padding: 0 7px;
    margin-right: 2px;
    opacity: 0.6;
}

.section-products .single-product .part-2 .product-old-price::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #444444;
    transform: translateY(-50%);
}


</style>