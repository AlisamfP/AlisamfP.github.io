var audio = document.getElementById('pronounce');

$(document).ready(function(){
	$('#sayName').on('click', function(){
		audio.play();
	})
});