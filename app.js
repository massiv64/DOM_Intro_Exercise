console.log("Javascript is alive!");


var greeting = document.querySelector('#greeting');
greeting.innerText = "Hello World!";

var lists = document.getElementsByTagName('li');
	for (var i = 0; i < lists.length; i++){
		lists[i].style.backgroundColor = "yellow";
		lists[i].addEventListener("click", addSelected)
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
}