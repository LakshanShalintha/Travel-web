let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
	searchBtn.classList.remove('fa-times');
	searchBar.classList.remove('active');
	menu.classList.remove('fa-times');
	snavbar.classList.remove('active');
}

menu.addEventListener("click", () =>{
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("active");
});	

searchbtn.addEventListener('click', () =>{
	searchbtn.classList.toggle('fa-times');
	searchbar.classList.toggle('active');
});

formBtn.addEventListener('click', ()=>{
	loginForm.classList.add('active');
});

formClose.addEventListener('click', ()=>{
	loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
	btn.addEventListener('click', ()=>{
		document.querySelector('.controls .active').classList.remove('active');
		btn.classList.add('active');
		let src = btn.getAttribute('data-src');
		document.querySelector('#video-slider').src = src;
	});
});

let loadmorebtn = document.querySelector('.packages .load-more .btn');
let currentitem = 3;

loadmorebtn.onclick = () =>{
	let boxes = [...document.querySelectorAll('.packages .box-container .box')];
	for (var i = currenitem; i < currenitem + 3; i++){
		boxes[i].style.display = 'inline-block';
	};
	currenitem += 3;
	if(currenitem >= boxes.length){
		loadmorebtn.style.display = 'none';
	}
}

var swiper = new Swiper(".review-slider", {
	spaceBetween: 20,
	loop: true,
	autoplay: {
		dalay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},

	},
});	

var booknow=document.getElementById("booknow");
	booknow.addEventListener('click',function(e){
		alert('OK, YOUR PLACE SUCCESSFULLY ADDED');
		e.preventDefault();
	})