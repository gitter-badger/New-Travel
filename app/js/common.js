jQuery(function ($) {
      // custom formatting example
      $('.timer').countTo({
	    from: 0,
	    to: 2500,
	    speed: 5000,
	    formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
	  });
});
