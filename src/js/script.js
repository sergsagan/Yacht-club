$(function() {
	
	//anchor links
	
	$(".navbar-nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
    
    $('nav li a').click(function () {
        $('nav li').removeClass('active');
        $(this).parent().addClass('active');
        return true;
    });
	
    //Scroll Top
    
	$('#scrollUp').mouseover(function(){
		$( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).click(function(e){
		e.preventDefault();
		$('body,html').animate({ scrollTop: 1 }, 1000);
	});
	
	$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('#scrollUp').fadeIn('fast');
		} else {
			$('#scrollUp').fadeOut('fast');
		}
	});
	
	$("#phone").mask("+38 (999) 999-99-99");
    
	//carousel
	
    $('#carousel').carousel();
	
	//Каруселька
	
	//Документация: http://owlgraphic.com/owlcarousel/
	/*function carousel_1() {
		var owl = $(".carousel");
		owl.owlCarousel({
			items : 1,
			loop : true,
			autoHeight : false,
			dots : true,
			singleItem : true,
			slideSpeed : 2000,
			paginationSpeed : 2400,
			autoplayHoverPause : true
		});
		$(".next_button").click(function() {
			owl.trigger("owl.next");
		});
		$(".prev_button").click(function() {
			owl.trigger("owl.prev");
		});
		owl.on("resized.owl.carousel", function(event) {
			var $this = $(this);
			$this.find(".owl-height").css("height", $this.find(".owl-item.active").height());
		});
		setTimeout(function() {
			owl.find(".owl-height").css("height", owl.find(".owl-item.active").height());
		}, 1000);
	};
	carousel_1();*/
	
    //modal
	
	$('.order,.order-form').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400, function(){
			$('#modal-form').css('display', 'block');
			$('#modal-form').animate({opacity: 1, top: '20%'}, 200);
		});
	});
	
	$('.form-close').click( function(){
		$('#modal-form').animate({opacity: 0, top: '45%'}, 200,
			function(){
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
				$('.form-of-training, .practices, .course').find(".name, .price, .price .rub").removeClass("active");
			}
		);
	});
	
	/*$('.order-form').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400, function(){
			$('#modal-form').css('display', 'block');
			$('#modal-form').animate({opacity: 1, top: '20%'}, 200);
		});
	});
	
	$('.form-close').click( function(){
		$('#modal-form').animate({opacity: 0, top: '45%'}, 200,
			function(){
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
			}
		);
	});*/
	
	//change
	$('.form-of-training .order-form').click(function() {
		$('.form-of-training').find(".name, .price, .price .rub").removeClass("active");
		$(this).parents('.form-of-training').find(".name").toggleClass("active").fadeIn(400);
		$(this).parents('.form-of-training').find(".price, .price .rub").toggleClass("active").fadeIn(400);
	});
	
	$('.practices .order-form').click(function() {
		$('.practices').find(".name, .price, .price .rub").removeClass("active");
		$(this).parents('.practices').find(".name").toggleClass("active").fadeIn(400);
		$(this).parents('.practices').find(".price, .price .rub").toggleClass("active").fadeIn(400);
	});
	
	$('.course .order-form').click(function() {
		$('.course').find(".name, .price, .price .rub").removeClass("active");
		$(this).parents('.course').find(".name").toggleClass("active").fadeIn(400);
		$(this).parents('.course').find(".price, .price .rub").toggleClass("active").fadeIn(400);
	});
	
	new WOW().init();
	
	




    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
	
    $("#feadback-form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
	        $('#feadback-form')[0].reset(
		        setTimeout(function () {}, 1000)
	        );
	
	        $('#popUpMessage').removeClass('hiddenDiv');
	        setTimeout(function () {
		        $('#popUpMessage').addClass('hiddenDiv');
	        }, 2000);
        });
        return false;
    });
	
	$("#modal-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('#modal-form')[0].reset(
				setTimeout(function () {}, 1000)
			);
			$("#modal-form").hide();
			$("#overlay").css('display', 'none');
			
			$('#popUpMessage1').removeClass('hiddenDiv');
			setTimeout(function () {
				$('#popUpMessage1').addClass('hiddenDiv');
			}, 2000);
		});
		return false;
	});
	
});
