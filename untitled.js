$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	if (scrollTop < 0) scrollTop = 0;
	$('header').css('background-position', '50% ' + (scrollTop * 0.5) + 'px');
});

$(document).ready(function() {

	if ($('#github').length) {
		var that = $('#github div.container div.clear');
		$.get('/dribble', function(data) {
			data = JSON.parse(data);
			for (var i = 0; i<6; i++) {
				that.before('<a href="' + data.shots[i].short_url + '">
					<img src="' + data.shots[i].image_url + '" /><span>' +
					data.shots[i].title + ' - <b><strong></strong>' +
					data.shots[i].likes_count + '</b></span></a>');
			}
		});
	}
}