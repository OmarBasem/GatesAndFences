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
	//Make sure there is element to the left
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
		'http://blog.fenceauthority.com/wp-content/uploads/2016/11/new-privacy-fence.jpg',
		'https://cdn.websites.hibu.com/286ff4849df346248e4a739efe827cf2/dms3rep/multi/mobile/Scalloped+with+Mitered+Posts+and+2x6+Rails.jpg',
		'http://eadsfence.com/content/images/thumbs/0001228_1025.jpeg',
		'http://dakotaunlimited.com/wp-content/uploads/2016/03/Chain-Link-Fences.jpg',
		'https://www.ccbiznews.com/uploads/media/default/0001/31/f7a32f0ba5544d62532122ca5149e5ca9d88b828.jpeg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuFVdgXHJZnMkldK1vc9uX8FWOV-oaKAG5oaUmoSXQiGJf8aKs&usqp=CAU',
		'https://underconstruction.placemakers.co.nz/wp-content/uploads/2020/01/96-corrugated-steel-fence.jpg',
		'http://bluebonnetfences.com/wp-content/themes/bluebonnet/img/home_carousel_one.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxviknDOgZ4FHh2eM7lakGHEiiq9stcbFuWk8vFLUOU65_Roq5&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkl59b0TsUltG23eu2kjeQA2qEBcUEGEBcKrlAoHSmJJGOsfG2Nw',
		
		

	];
	
	//Initial Featured Image
	featured.style.backgroundImage = 'url(' + images[0] + ')';
	
	//Images for Gallery
	for (var i = 0; i < galleryItems.length; i++) {
		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
		galleryItems[i].addEventListener('click', selectItem);
	}
})();