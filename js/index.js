

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

/* gates */
 
	//slideshow text
	var a = "A great selection of Security Gates, Safety Gates, Openers, brand name like Elite, Power Master, Eagle, and others, with many Door Gate Operating Devices. Choose from a great selection of Security Gates, Safety Gates, as we specialize in Front Driveway Entrance or Entry Gates.";
	var b = "We offer a wide selection of Fence Designs to choose from. Here you will find one of the largest selections of Aluminum or Wrought Iron Fences. We offer great selection fence ideas such as Garden Fences, Privacy Fences, Ornamental Fences, Decorative Fences, Custom Fences, Iron or Steel Fences made of Aluminum or Wrought Iron Metals.";
	var c = "A Modern Wrought Iron or Aluminum Railings are an elegant solution for interior or exterior handrails, handicap rails, walkways, balconies, patios, decks and any other indoor or outdoor location that needs a handrail. We can even design and fabricate elegant custom railings replacements for your existing handrail.";
	var asplit = a.split(" ");
	var bsplit = b.split(" ");
	var csplit = c.split(" ");

	for ( i=0; i<asplit.length; i++){

	document.getElementById('more1').innerHTML += "<span class= 'vertical-part'> <b>" + asplit[i] + "&nbsp" + "</b> </span>";
	}
	for ( i=0; i<bsplit.length; i++){

	document.getElementById('more2').innerHTML += "<span class= 'vertical-part'> <b>" + bsplit[i] + "&nbsp" + "</b> </span>";
	}
	for ( i=0; i<csplit.length; i++){

	document.getElementById('more3').innerHTML += "<span class= 'vertical-part'> <b>" + csplit[i] + "&nbsp" + "</b> </span>";
	}

const items = document.querySelectorAll('.item'),
  controls = document.querySelectorAll('.control'),
  headerItems = document.querySelectorAll('.item-header'),
  descriptionItems = document.querySelectorAll('.item-description');
  interval = 5000;

let intervalF = setInterval(slideshow, interval),
  current = 0;

controls.forEach(control => control.addEventListener('click', handleClickedSlide));

function handleClickedSlide() {
  reset();
  clearInterval(intervalF);
  let number = Number(this.dataset.index);
  this.classList.add('active');
  items.forEach((item, index) => {
    if (index === number) {
      item.classList.add('active');
    }
  })

  current = number;
  handleHeaderDelay();
  handleDescriptionDelay();
  intervalF = setInterval(slideshow, interval);
}

function reset() {
  controls.forEach(control => {
    control.classList.remove('active');
  })
  items.forEach(item => {
    item.classList.remove('active');
  })
}

function handleHeaderDelay() {
  headerItems.forEach(part => {
    const seconds = 0.03,
      activeDelay = .76,
      children = part.childNodes,
      arr = [...children];

    let count = 1;
  
    
    if(part.parentNode.classList.contains('active')) {
      
      arr.forEach(child => {
        if (child.classList) {
          const delay = count * seconds + activeDelay;
          child.firstChild.style.transitionDelay = `${delay}s`;
          count++;
        }
      })
    } else {
      
      arr.forEach(child => {
        if(child.classList) {
          const delay = count * seconds;
          child.firstChild.style.transitionDelay = `${delay}s`;
          count++;
        }
      })
    }
  })
}

function handleDescriptionDelay() {
  descriptionItems.forEach(part => {
    const seconds = .006,
      activeDelay = .76,
      children = part.childNodes,
      arr = [...children];

    let count = 1;

    
    if (part.parentNode.classList.contains('active')) {
     
      arr.forEach(child => {
        if (child.classList) {
          let delay = count * seconds + activeDelay;
          child.firstElementChild.style.transitionDelay = `${delay}s`;
          count++;
        }
      })
    } else {
      
      arr.forEach(child => {
        if (child.classList) {
          let delay = count * seconds;
          child.firstElementChild.style.transitionDelay = `${delay}s`;
          count++;
        }
      })
    }
  })
}
function slideshow() {
  reset();
  if (current === items.length - 1) {
    current = -1;
  }

  controls[current + 1].classList.add('active');
  items[current + 1].classList.add('active');
  current++;
  handleHeaderDelay();
  handleDescriptionDelay();
}
