$(document).ready(function(){

    $("#navbtn").click(function(){
        $(".res-nav").css("right","0");
    })

    $("#closebtn").click(function(){
        $(".res-nav").css("right","-100%");
    })

	function slide() {
		var slides = $(".item");
		var slideslen = slides.length;
		for (var i = 0; i < slideslen; i++) {
			$(slides[i]).animate({left:'-50%'},30000,'linear').animate({left:'0%'},40000,'linear');
		}
	}

	setInterval(slide,2000);

    $("#myTab .nav-link").click(function(){
        $("#myTab .nav-link").removeClass("active");
        $(this).addClass("active");
        $(".tab-content .tab-pane").removeClass("show active");
        $(this.hash).addClass("show active");
    })

	$('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $("#top").click(function(){
        $("html").animate({scrollTop:0},1200);
    });


    $(".col-tab").click(function(){
                var symb = $(this).find("span i");
                var test = true;
                $(this).next().slideToggle("slow", function() {

                    // if(symb.html() == "+") {
                    // symb.text("-");
                    // } else {
                    //     symb.text("+")
                    // }
                })

                symb.toggleClass("irotate");

            })
});

















