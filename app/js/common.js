jQuery(function ($) {

	// Head height detect
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	// Top button menu
	$(".top_mnu_bt").click(function() {
		if ($(".top_mnu_bt").hasClass("icon-menu")) {
			$(".top_mnu_bt").removeClass("icon-menu");
			$(".top_mnu_bt").addClass("icon-delete");
		} else {
			$(".top_mnu_bt").removeClass("icon-delete");
			$(".top_mnu_bt").addClass("icon-menu");
		}
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
