

if (($.session.get("lang") == null)) {
    $.session.set("lang", $("#langFlag").val())
}


$(window).on("load", function () {

    $("#langFlag").val($.session.get("lang"));
    
    if (($("#langFlag").val() == "ar")) {
    	$(document).attr('dir', 'rtl');
        $("body").addClass('rtl');
		$("#bts").attr('href', 'assets/css/bootstrap.rtl.css');
		$("#stl").attr('href', 'assets/css/style-rtl.css');
		$("#drk").attr('href', 'assets/css/dark-rtl.css');
		$("#clr").attr('href', 'assets/css/colors-rtl.css');
		$("#rpv").attr('href', 'assets/css/responsive-rtl.css');
    	$("#lang-btn span").text("En");
    	$("#lang-btn img").attr("src", "assets/images/flags/United-Kingdom.png");
    } else if ($("#langFlag").val() == "en") {
		$(document).attr('dir', 'ltr');
        $("body").removeClass('rtl');
		$("#bts").attr('href', '');
		$("#stl").attr('href', '');
		$("#drk").attr('href', '');
		$("#clr").attr('href', '');
		$("#rpv").attr('href', '');
    	$("#lang-btn span").text("عربى");
    	$("#lang-btn img").attr("src", "assets/images/flags/Saudi-Arabia.png");
    }

});
	
	/*console.log($.session.get("lang"));*/


$("#lang-btn").click(function () {
	
	$.session.set("lang", $("#langFlag").val());
	
	if ($.session.get("lang") == "ar") {
		$("#langFlag").val("en");
		/*$.session.set("lang", "en");*/
	} else if ($.session.get("lang") == "en") {
		$("#langFlag").val("ar");
	}
	
    if (($("#langFlag").val() == "ar")) {
    	$(document).attr('dir', 'rtl');
        $("body").addClass('rtl');
		$("#bts").attr('href', 'assets/css/bootstrap.rtl.css');
		$("#stl").attr('href', 'assets/css/style-rtl.css');
		$("#drk").attr('href', 'assets/css/dark-rtl.css');
		$("#clr").attr('href', 'assets/css/colors-rtl.css');
		$("#rpv").attr('href', 'assets/css/responsive-rtl.css');
    	$("#lang-btn span").text("En");
    	$("#lang-btn img").attr("src", "assets/images/flags/United-Kingdom.png");
		
		
    } else if ($("#langFlag").val() == "en") {
		$(document).attr('dir', 'ltr');
        $("body").removeClass('rtl');
		$("#bts").attr('href', '');
		$("#stl").attr('href', '');
		$("#drk").attr('href', '');
		$("#clr").attr('href', '');
		$("#rpv").attr('href', '');
    	$("#lang-btn span").text("عربى");
    	$("#lang-btn img").attr("src", "assets/images/flags/Saudi-Arabia.png");
		
    }
	
});


