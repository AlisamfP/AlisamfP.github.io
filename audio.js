var audioTag = document.getElementsById('pronounce');

$(document).ready(function(){
	$('#sayName').on('click', function(){
		audioTag.play();
	});
});