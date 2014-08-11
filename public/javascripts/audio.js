$(document).ready(function(){
var audioTag = document.getElementById('pronounce');
	$('#sayName').on('click', function(){
		audioTag.play();
	});
});