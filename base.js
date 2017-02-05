$(document).ready(function(){
	
	var target = $("#flip");

	$(target).on("click", function(){

		var first = $(target)[0].getBoundingClientRect();

		$(target).toggleClass("big");

		var last = $(target)[0].getBoundingClientRect();

		var invertHeight = first.height / last.height;

		var invertWidth = first.width / last.width;

		$(target).css({
			'transform' : 'scale(' + invertWidth + ',' + invertHeight + ')',
			'will-change' : 'transform'
		});
		

		requestAnimationFrame(function(){
			$(target).addClass("animate");

			$(target).css({
				"transform" : ""
			});
		});
	});

	$(target).on("transitionend", function(){
		$(target).removeClass("animate");
		$(target).css({
			'will-change' : ''
		});
	});
});