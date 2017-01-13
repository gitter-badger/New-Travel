jQuery(function ($) {

	// Head height detect
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

    // countTo 1
    $('.timer').countTo({
	  from: 0,
	  to: 2500,
	  speed: 5000,
	  formatter: function (value, options) {
	    return value.toFixed(options.decimals);
	  },
	});
});
