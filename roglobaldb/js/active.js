    /*-------------------------
		Show Preloader
	----------------------------*/
	document.onreadystatechange = function () {
		var state = document.readyState
		if (state == 'interactive') {
			document.getElementById('main-cont').style.visibility="hidden";
		} else if (state == 'complete') {
			setTimeout(function(){
				document.getElementById('interactive');
				document.getElementById('load').style.visibility="hidden";
				document.getElementById('main-cont').style.visibility="visible";
			},600);
		}
	};	
	
	/*-------------------------
		Animation on Scroll 
	----------------------------*/
	$(window).on('load', function () {
        AOS.refresh();

    });
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 1000,
        anchorPlacement: 'top-bottom',
        /*once: true,*/
    });


    /*---------------------------
		Display toggle main container
	----------------------------*/	
	if ( $.trim( $('.global-container').text() ).length == 0 ) {
		document.getElementById("main-cont").style.display = 'none';
	} else {
		document.getElementById("main-cont").style["margin-top"] = "50px";
	};

	var headerNote = document.getElementById("oldschool");
	var headerNotice = document.createTextNode("");
	headerNote.appendChild(headerNotice);
		
	document.onkeydown = function(e) {
		if(event.keyCode == 123) {
		  console.log('You cannot inspect Element');
		   return false;
		}
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
		  console.log('You cannot inspect Element');
		  return false;
		}
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
		  console.log('You cannot inspect Element');
		  return false;
		}
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
		  console.log('You cannot inspect Element');
		  return false;
		}
		
		if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
		  console.log('You cannot inspect Element');
		  return false;
		}
		  
		if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
		  console.log('You cannot save page');
		  return false;
		}
	  }; 
	
	// prevents 
	//document.addEventListener('contextmenu', e => e.preventDefault());

	
		
    /*-------------------------
		Carousel & Pop up
	----------------------------*/		
            $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 4,
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},					
					992: {
						items: 3
					},
					1200: {
						items: 4
					}
				},
                loop: false,
                margin: 15,
				nav: true,
            	navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
                autoplay: false,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
              });
            });	
			
			$(document).ready(function() {
				$('.image-zoom-link').magnificPopup({
				type: 'image',
				gallery: {
						enabled: true,
						navigateByImgClick: true,
						preload: [0,1] // Will preload 0 - before current, and 1 after the current image
					}
				// other options
				});
			});
			
			
    /*-------------------------
		Toggle Group Active
	----------------------------*/
	var header = document.getElementById("features");
	var btns = header.getElementsByClassName("feature-icons");
	for (var i = 0; i < btns.length; i++) {
  		btns[i].addEventListener("click", function() {
  			var current = header.getElementsByClassName("active");
  			//current[0].className = current[0].className.replace(" active", "");
			for (var a = 0; a <= current.length; a++) {
				current[a].classList.remove('active');			
			}
			this.classList.add('active');			
  		});
	};


    /*-------------------------
		Real Time Update
	----------------------------*/
	var $dOut = $('#t-date'),
		$hOut = $('#t-hours'),
		$mOut = $('#t-minutes'),
		$sOut = $('#t-seconds'),
		$ampmOut = $('#t-ampm');

	var months = [
	'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
	];

	var days = [
	'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
	];

	function t_update(){
	var date = new Date();
	// set UTC time zone (UTC+8 or GMT+8)
	date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000 + (/* UTC+8 */ +8) * 60 * 60 * 1000);

	var ampm = date.getHours() < 12
				? 'AM'
				: 'PM';

	var hours = date.getHours() == 0
				? 12
				: date.getHours() > 12
					? date.getHours() - 12
					: date.getHours();

	var minutes = date.getMinutes() < 10
					? '0' + date.getMinutes()
					: date.getMinutes();

	var seconds = date.getSeconds() < 10
					? '0' + date.getSeconds()
					: date.getSeconds();

	var dayOfWeek = days[date.getDay()];
	var month = months[date.getMonth()];
	var day = date.getDate();
	var year = date.getFullYear();

	var dateString = dayOfWeek + ', ' + month + ' ' + day + ', ' + year;

	$hOut.text(hours);
	$mOut.text(minutes);
	$sOut.text(seconds);
	$ampmOut.text(ampm);
	}

	t_update();
	window.setInterval(t_update, 1000);

	/*-------------------------
		Animate on Scroll 
	----------------------------*/

	// Remove the transition class
	const faderight = document.querySelector('.animate-faderight');
	const fadeleft = document.querySelector('.animate-fadeleft');
	faderight.classList.remove('animate-fadeleft-transition');
	fadeleft.classList.remove('animate-fadeleft-transition');

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				faderight.classList.remove('animate-faderight-transition');
				fadeleft.classList.remove('animate-fadeleft-transition');
			return;
			}		
			faderight.classList.add('animate-faderight-transition');
			fadeleft.classList.add('animate-fadeleft-transition');
		});
	});

	observer.observe(document.querySelector('.container'));
	
		
			
