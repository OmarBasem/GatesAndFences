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
var itemWidth = 23; // percent: as set in css

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
		'https://decks.blob.core.windows.net/img/articles/large/16031814095358.jpg',
		'https://i.pinimg.com/originals/b2/d5/c6/b2d5c6900a47aed8a9ea63c7801b1764.jpg',
		'http://curtislumber.myeshowroom.com/images/guides/Railings_for_Stairs.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaEHCW6WFJZLqEOdVzoB38vFJwom3H95nvX_e-ydKONZ4Nb_X',
		'https://www.gatesrailingsdirect.co.uk/wp-content/uploads/2013/04/Regent-Railing-in-situ-with-rain-mini-gallery.jpg',
		'https://i.pinimg.com/736x/a2/7e/35/a27e35920ff1e622c8018e616cb6261e--staircase-railings-deck-railings.jpg',
		'https://sep.yimg.com/ty/cdn/yhst-47913670625546/Cable-Railing-37.jpg?t=1519844225&',
		'https://www.gatesrailingsdirect.co.uk/wp-content/uploads/2013/05/Kensington-railing-in-situ-with-corner-and-inter-posts-mini-gallery.jpg',
		'https://s-media-cache-ak0.pinimg.com/originals/73/58/3e/73583e7a6629fcb8e35a4b528d7df0ee.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwkMAtJEmIPdW_e3ogeJVer5oe1-9bMqTtZhMO4-4WKyYVye4UiQ',
		
		

	];
	

	featured.style.backgroundImage = 'url(' + images[0] + ')';
	
	for (var i = 0; i < galleryItems.length; i++) {
		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
		galleryItems[i].addEventListener('click', selectItem);
	}
})();