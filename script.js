let products = document.getElementById("product-category");
let arr = [];

for (let i = 1; i <= 8; i++) {
	let price = Math.floor(Math.random() * 1000) + 200
	products.innerHTML += `<div class="product">
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
		 <div><button   class ="addtocart">
		 <i id ="addtocart${i}" class="fa-solid fa-cart-shopping"></i>
		 </button></div>
	 </div>

	</div>
</div>`
	let obj = new Object();
	obj.id = i;
	obj.price = price;
	arr.push(obj);
}
var x = document.getElementById("navbar");

function navbar() {
	x.style.display = "flex";
}
var p = document.getElementById("close");
p.addEventListener("click", () => {
	
	x.style.display = "none";
})
let element = document.getElementById("carousal");
console.log(element);
let i = 1;
let image = document.createElement("img")


setInterval(() => {
	if (i == 1) {
		image.className = "fade-in-image";

	} else if (i == 5) {


		image.className = "fade-out-image";
		image.className = "fade-in-image";
		i = 1;
	} else {

		image.className = "fade-out-image";
		image.className = "fade-in-image";
	}
	image.src = `images/background/f${i}.jpg`
	image.style.width = "60vw"
	image.style.height = "50vh"
	// image.style.transition ="2s"

	element.appendChild(image);


	i++;
}, 2000)
let prod = document.getElementById("varities");
fetch("https://fakestoreapi.com/products")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		data.forEach(element => {
			prod.innerHTML += `<div class="product">
				<div class="product-image">
				 <img src=${element.image} alt="img">
				</div>  
				<div class="product-desc">
				 <p class="title">${element.title}</p>
				<h6 class="desc">${element.description}</h6>
				 <div class="rating">${element.rating.rate} <i class="fa-solid fa-star"></i>
				 
				 </div>
				 <div class="content">
					 <div class="price"> <i class="fa-solid fa-indian-rupee-sign"></i>
					 ${element.price}</div>
					 <div class="addtoCart">${element.rating.count} items</div>
				 </div>
			
				</div>
			</div>`

		});
	})


let container = document.getElementById("main-img");
let img = document.querySelectorAll(".small-img")
img.forEach((item) => {
	item.addEventListener("click", () => {
		let p = container.src;
		container.src = item.src;
		item.src = p;
	})
})

let product_div = document.getElementById("product-category2")



let shirt = document.querySelectorAll(".shirts");
shirt.forEach((item) => {
	item.addEventListener("click", () => {
		window.location.href = 'shop.html';
	})
})


let search = document.getElementById("search-bar");
let users = []



let cart_arr = document.querySelectorAll(".addtocart");
cart_arr.forEach((btn) => {
	btn.addEventListener("click", AddToCart)
})
let cart = document.getElementById("cart-item")
console.log(cart);

let brr;
if (localStorage.getItem('cart') == null) {
	brr = []
} else {
	brr = [...JSON.parse(localStorage.getItem('cart'))]

}
brr.forEach((item)=>{
	let place = item.id
	cart_arr[place-1].innerHTML = `<i class="fa-solid fa-check"></i>`
	cart_arr[place-1].disabled = true
})
function AddToCart(e) {
	let p = e.target.id;
	//   console.log(
	cart_arr[p[p.length-1]-1].innerHTML = `<i class="fa-solid fa-check"></i>`
	cart_arr[p[p.length-1]-1].disabled = true
	let obj = {};
	let isFind = false
	brr.forEach(item => {

		if (`addtocart${item.id}` == p) {
			obj.qty = item.qty++
			isFind = true
		}
	})
	if (isFind == false) {
		for (let x of arr) {
			// console.log(x);

			if (p == `addtocart${x.id}`) {
				console.log("hii")
				obj.price = x.price;
				obj.qty = 1
				obj.id = x.id;
				brr.push(obj);
			}
		}
	}
	localStorage.setItem("cart", JSON.stringify(brr))
}
{/* <i class="fa-solid fa-check fa-beat-fade" style="color: #11fa00;"></i> */}

