console.log("Javascript is alive!");

var allTheThings = document.getElementsByTagName('body')[0];
var greeting = document.querySelector('#greeting');
greeting.innerText = "Hello World!";

var lists = document.getElementsByTagName('li');
	for (var i = 0; i < lists.length; i++){
		lists[i].style.backgroundColor = "yellow";
		lists[i].addEventListener("click", addSelected);
	}
var image = document.createElement('img');
image.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
greeting.appendChild(image);

var li = document.getElementsByTagName('li');
var milk = li[0];
var honey = li[1];
var water = li[2];
var wine = li[3];
var beer = li[4];

function addSelected(e){
	for (var i = 0; i < lists.length; i++){
		lists[i].classList.remove('selected');
	}
	e.target.classList.add('selected');
	var icon = e.target.innerText;
	var picture = document.getElementsByTagName('img')[1];
	picture.setAttribute('src', 'images/'+ icon +'.jpeg');
}
var vanish = document.getElementById('ghosting');
vanish.addEventListener('mouseover', houdini);

function houdini(e){
	allTheThings.removeChild(vanish);
}

var getBigger = document.getElementById('resize');
getBigger.addEventListener('mouseover', enlarge);

function enlarge(e){
	e.target.style.width = "400px";
}

var getSmaller = document.getElementById('resize');
getSmaller.addEventListener('mouseleave', shrink);

function shrink(e){
	e.target.style.width = "200px";
}

var panicMode = document.getElementById('reset');
reset.addEventListener('click', panic);

function panic(e){
	for (var i = 0; i < lists.length; i++){
		lists[i].classList.remove('selected');
	}
	var picture = document.getElementsByTagName('img')[1];
	picture.src = "images/panic.jpeg";
}

var numberAlert = document.addEventListener('keydown', function(e){
	var charCode = event.keyCode;
	numbers(charCode);
});

function numbers(charCode, e){
	console.log("something happened");
	if (charCode > 47 && charCode < 58){
		alert("I HATE NUMBERZZZ");
	}
}

