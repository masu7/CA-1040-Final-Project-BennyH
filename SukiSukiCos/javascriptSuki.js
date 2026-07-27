// Variables
const cartIcon = document.getElementById('shoppingCart');
const cartPage = document.getElementById('cartPage');
const cartClose = document.getElementById('closeCart');

const totalPrice = document.getElementById('totalPrice');
const cartPrice = document.getElementById('cartPrice');
const cartNum = document.getElementById('cartNum');

const menuItems = document.getElementById('menuItems');

// Toggle menu bar for smaller screen

function menutoggle () {
	if (menuItems.style.maxHeight == "0px") {
	menuItems.style.maxHeight = "200px";	
	}
	else {
		menuItems.style.maxHeight = "0px";
	}
}

// Simple Shopping Cart Toggle

cartIcon.addEventListener('click', () => cartPage.classList.add('active'));

cartClose.addEventListener('click', () => cartPage.classList.remove('active'));

// Do not allow product quantity on product page to go below 0

const quantity = document.getElementById('quantity');

quantity.addEventListener('input', () => {
	if (quantity.value < 1) {
		quantity.value = 1;
	}
});

// Swapping product main image with sub image by switching src

const mainImg = document.getElementById('mainImg')
const subImg = document.getElementsByClassName('subImg')

subImg[0].onclick = function () {
	mainImg.src = subImg[0].src;
}
subImg[1].onclick = function () {
	mainImg.src = subImg[1].src;
}
subImg[2].onclick = function () {
	mainImg.src = subImg[2].src;
}
subImg[3].onclick = function () {
	mainImg.src = subImg[3].src;
}

// Confirm Purchase Message

function purchased () {
	alert("You have confirmed your purchase!");
}








