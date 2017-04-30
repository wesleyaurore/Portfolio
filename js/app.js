fullpage.initialize('#fullpage', {
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', 'lastPage'],
		css3:true
	});

		var logo = document.querySelector('svg.logo');
		var project = document.querySelector('.project-a');
		var contact = document.querySelector('.contact-a');
		var arrowHome = document.querySelector('.arrow-home');
		var details = document.querySelectorAll('.details');
		var btnShow = document.querySelectorAll('.btn');
		var btnHide = document.querySelectorAll('.hide');
		var section = document.querySelectorAll('section');
		var h1 = document.querySelector('h1');
		var p1 = document.querySelector('.p1');
		var p2 = document.querySelector('.p2');
		var path = document.querySelector('svg'); 
		var page = document.querySelector('.all-page');
		var intro = document.querySelector('.intro');
		var myName = document.querySelector('.myName');
		var dev = document.querySelector('h2.dev');
		var bgTag = document.querySelector('.bg-tag');	

		window.setTimeout("tag()", 0);
		window.setTimeout("start()", 2300);
		window.setTimeout("untag()", 2300);
		window.setTimeout("pageActive()", 2400);
		window.setTimeout("enter()", 2500);
		window.setTimeout("finish()", 3700);
		window.setTimeout("allActive()", 3600);
		window.addEventListener('wheel', changeColor);
		window.addEventListener('keyup', changeColor);
		window.addEventListener('touchmove', changeColor);
		project.addEventListener('click', whiteColor);
		contact.addEventListener('click', whiteColor);
		arrowHome.addEventListener('click', whiteColor);

		function tag(){
			path.style.display = 'block';
		}

		function untag(){
			path.style.display = '';
		}
		
		function start(){
			p1.style.boxShadow = 'inset 0 0 40px #fff';
			p2.style.boxShadow = 'inset 0 0 40px #fff';
			p1.style.bottom = '100%';
			p2.style.top = '100%';
		}

		function pageActive() {
			page.style.display = 'block';
		}

		function finish() {
			intro.style.display = 'none';
		}

		function allActive() {
			page.style.position = 'relative';
			page.style.zIndex = '1';
		}

		function enter() {
			myName.style.opacity = '1';
			myName.style.letterSpacing = '10px';
			dev.style.opacity = '1';
			dev.style.letterSpacing = '15px';
			bgTag.style.opacity = '1';
		}

		function whiteColor() {
			if (page.style.position == 'relative'){
				logo.style.fill = '#fff';
				project.style.color = '#fff';
				contact.style.color = '#fff';
			}
		}

		function changeColor() {
			if (page.style.position == 'relative'){
				if(section[0].classList.contains('active')){
					logo.style.fill = '#000';
					project.style.color = '#000';
					contact.style.color = '#000';
				} else if(section[2].classList.contains('active')){
					logo.style.fill = '#2df9fa';
					project.style.color = '#2df9fa';
					contact.style.color = '#2df9fa';
				} else if(section[3].classList.contains('active')){
					logo.style.fill = '#DDA103';
					project.style.color = '#DDA103';
					contact.style.color = '#DDA103';
				} else if(section[4].classList.contains('active')){
					logo.style.fill = '#000';
					project.style.color = '#000';
					contact.style.color = '#000';
				} else {
					logo.style.fill = '#fff';
					project.style.color = '#fff';
					contact.style.color = '#fff';
				}
			}
		}

		for(let i = 0; i < btnShow.length; i++){
			btnShow[i].addEventListener('click', function(){
				details[i].classList.add('show');
			});
		}

		for(let i = 0; i < btnHide.length; i++){
			btnHide[i].addEventListener('click', function(){
				details[i].classList.remove('show');
			});
		}	
