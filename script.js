let products = document.getElementById("product-category");


for(let i=1;i<=8;i++){
	let price = Math.floor(Math.random()*1000)+200
    products.innerHTML +=`<div class="product">
	<div class="product-image">
	 <img src="images/products/f${i}.jpg" alt="img">
	</div>  
	<div class="product-desc">
	 <p class="brand">adidas</p>
	 <h6 class="title">Cartoon Astronaut T-shirts</h6>
	 <div class="rating"> <i class="fa-solid fa-star"></i>
	 <i class="fa-solid fa-star"></i>
	 <i class="fa-solid fa-star"></i>
	 <i class="fa-solid fa-star"></i>
	 <i class="fa-solid fa-star"></i>
	 </div>
	 <div class="content">
		 <div class="price"> <i class="fa-solid fa-indian-rupee-sign"></i>
		 ${price}</div>
		 <div class="addtocart"><button><i class="fa-solid fa-cart-shopping"></i>
		 </button></div>
	 </div>

	</div>
</div>` 
}
