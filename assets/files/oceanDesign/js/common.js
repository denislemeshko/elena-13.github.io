var wss_i = 0;
var wss_elem;
var prev;
var next;


$(function(){

	/*// Custom JS
	$( document ).ready(function() {
    $( '#container' ).SecretNav({       
        navSelector: 'nav',         // selector of the nav tag
        openSelector: '.open-menu', // selector of the menu's opener
        position: 'left'            // left | top
    });
});*/

/*Main slider
Start slider*/

var inscrArray = [];
	
function makeArray(){
	wss_elem = document.getElementById('wss');
	for (var i = 0; i < wss_elem.children.length; i++) {
		inscrArray.push(wss_elem.children[i].innerHTML);	
	};
	wss_elem.innerHTML = inscrArray[0];
}

makeArray();

function wssSlide(sign){
	wss_elem = document.getElementById('wss');
	wss_elem.innerHTML = inscrArray[wss_i];
	wss_i = (wss_i + 1 * sign) % inscrArray.length;
	wss_i = (wss_i == -1) ? inscrArray.length - 1 : wss_i;
}

next = document.getElementById('right-holder');
prev = document.getElementById('left-holder');




next.onclick = function(event){
	wssSlide(1);
}
prev.onclick = function(event){
	wssSlide(-1);
}
/*End of slider*/
});
