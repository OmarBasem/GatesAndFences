var app = function () {

	var initi = function initi() {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav_list-item');

		applyListeners();
	};

	var applyListeners = function applyListeners() {
		menu.addEventListener('click', function () {
			return toggleClass(body, 'nav-active');
		});
	};

	var toggleClass = function toggleClass(element, stringClass) {
		if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
		else element.classList.add(stringClass);
	};

	initi();
}();


//gallery

var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23;
var featured = document.querySelector('.featured-item');
var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;
var scrollRate = 0.2;
var left;
var text = document.querySelectorAll('.text');

function selectItem(e) {
	
	featured.style.backgroundImage = e.target.style.backgroundImage;
	
	for (var i = 0; i < galleryItems.length; i++) {
		if (galleryItems[i].classList.contains('active')){
			galleryItems[i].classList.remove('active');
			text[i].classList.add('hide');
		}

	
	}
	e.target.classList.add('active');
	for (var i = 0; i < galleryItems.length; i++) {
		if (galleryItems[i].classList.contains('active')){
			text[i].classList.remove('hide')
			
		}
	}
	
	
	
}



function galleryWrapLeft() {
	var first = gallery.children[0];
	gallery.removeChild(first);
	gallery.style.left = -itemWidth + '%';
	gallery.appendChild(first);
	gallery.style.left = '0%';
}

function galleryWrapRight() {
	var last = gallery.children[gallery.children.length - 1];
	gallery.removeChild(last);
	gallery.insertBefore(last, gallery.children[0]);
	gallery.style.left = '-23%';
}

function moveLeft() {
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left > -itemWidth) {
			left -= scrollRate;
		} else {
			left = 0;
			galleryWrapLeft();
		}
	}, 1);
}

function moveRight() {
	
	if (left > -itemWidth && left < 0) {
		left = left  - itemWidth;
		
		var last = gallery.children[gallery.children.length - 1];
		gallery.removeChild(last);
		gallery.style.left = left + '%';
		gallery.insertBefore(last, gallery.children[0]);	
	}
	
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left < 0) {
			left += scrollRate;
		} else {
			left = -itemWidth;
			galleryWrapRight();
		}
	}, 1);
}

function stopMovement() {
	clearInterval(leftInterval);
	clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveRight);
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveLeft);
rightBtn.addEventListener('mouseleave', stopMovement);


(function init() {
	var images = [
		'https://aberdeengate.com/wp-content/uploads/2017/05/IMG_2579-1080x675.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2QDqgMfC2zodwhhQY2r0q2MbwH0wGaSSgOyXjykytBsRXvJj',
		'https://www.ultrafence.com/assets/images/gates/EstateGates.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0qDha2Es8ciET8ZX2P0bbUdvTWiDgrup83ppz4hVK8tFj122D&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYx--j5neLZq-xIiVoUtSGcZ5cX4__brJmZ121Y1Np0MiIN96S',
		'https://flagshipapostolic.files.wordpress.com/2012/06/driveway-gate1.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMJ9X6QKrN2KbGtFXXRnNgTEp4F6JwYUfJs-0zMqUelmSUeXw_&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpNTpFhxMZ-qGUOMIqKRdi7V8z2NU7lC1Zsl9lkj8B5xtRNn9jw',
		'http://www.timbergates.co.uk/garden-cottage.jpg',
		'https://automaticgatesystems.com.au/wp-content/uploads/2018/01/sliding-gates-SL027-570x493-570x493.jpg',
		
		

	];
	

	featured.style.backgroundImage = 'url(' + images[0] + ')';
	

	for (var i = 0; i < galleryItems.length; i++) {
		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
		galleryItems[i].addEventListener('click', selectItem);

	}
})();