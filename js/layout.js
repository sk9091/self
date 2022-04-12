function browserDetection() {
	var viewHeight = $(window).height();
	var viewWidth = $(window).width();
	var scrollTop = $(window).scrollTop();
	var docHeight = $(document).height();

	// if (viewHeight < 799 || viewWidth < 1199 ) {
	// 	$(".browser_detection").css({
	// 	"left": viewWidth/2 - 480,
	// 	"display": "block",
	// 	});
		
	// 	var countDown = 10;
		
	// 	setTimeout( function(){
	// 		$(".browser_detection_time").html(countDown);
	// 		countDown--;
 //  		},1000);
  		
 //  		setTimeout( function(){
	// 		$(".browser_detection_time").html(countDown);
	// 		countDown--;
 //  		},2000);


	// 	setTimeout( function(){
	// 		$(".browser_detection_time").html(countDown);
	// 		countDown--;
 //  		},3000);

	// 	setTimeout( function(){
	// 		$(".browser_detection_time").html(countDown);
	// 		countDown--;
 //  		},4000);

	// 	setTimeout( function(){
	// 		$(".browser_detection_time").html(countDown);
	// 		countDown--;
 //  		},5000);

	// 	setTimeout( function(){
	// 		$(".browser_detection_time").html(countDown);
	// 		countDown--;
 //  		},6000);

	// 	setTimeout( function(){
	// 		$(".browser_detection_time").html(countDown);
	// 		countDown--;
 //  		},7000);

	// 	setTimeout( function(){
	// 		$(".browser_detection_time").html(countDown);
	// 		countDown--;
 //  		},8000);

	// 	setTimeout( function(){
	// 		$(".browser_detection_time").html(countDown);
	// 		countDown--;
 //  		},9000);
  		
 // 		setTimeout( function(){
	// 		$(".browser_detection_time").html(countDown);
	// 		countDown--;
 //  		},10000);


	// 	setTimeout( function(){
	// 		$(".browser_detection_time").html(countDown);
	// 		countDown--;
 //  		},11000);


		
	// 	setTimeout( function(){
	//       	$(".browser_detection").css("top", viewHeight/2 - 260);
	//     },500);
	    
	//     setTimeout( function(){
	//       	$(".browser_detection").css("top", "-1000px");
	//     },11000);
		
	// 	setTimeout( function(){
	//       	$(".home_title").css("bottom", viewHeight/2 - 100);
	//     },11500);
	// 	setTimeout( function(){
	//       	$(".home_title_container").css("height","70%");
	//       	$(".home_title").css("bottom", $(".home_title_container").height()/2 - 300);
	//       	$(".home_title_scroll").css("opacity", "1");
	//     },13100);
 //    } else {
	// 	setTimeout( function(){
	//       	$(".home_title").css("bottom", viewHeight/2 - 100);
	//     },1500);
	// 	setTimeout( function(){
	//       	$(".home_title_container").css("height","70%");
	//       	$(".home_title").css("bottom", $(".home_title_container").height()/2 - 300);
	//       	$(".home_title_scroll").css("opacity", "1");
	//     },3100);

 //    }

    setTimeout( function(){
	      	$(".home_title").css("bottom", viewHeight/2 - 100);
	    },1500);
		setTimeout( function(){
	      	$(".home_title_container").css("height","70%");
	      	$(".home_title").css("bottom", $(".home_title_container").height()/2 - 300);
	      	$(".home_title_scroll").css("opacity", "1");
	    },3100);
}

function indexInitialSetup() {
	var viewHeight = $(window).height();
	var viewWidth = $(window).width();
	var scrollTop = $(window).scrollTop();
	var docHeight = $(document).height();
	$("section.home_cover, section.featured_motions_container, section.featured_designs_container, section.featured_webs_container, section.featured_about_container").css("height",viewHeight);
	$(".home_title_container").css("height",viewHeight);
	$(".home_nav").css("top", viewHeight*0.7);
	$(".home_title, .nav_bar_title, .featured_title, .item_container").css("left", viewWidth/2 - 480);
	$(".home_title_scroll").css("left", viewWidth/2 - 300);
	$(".title_bg, .nav_bar_title_bg").css("width", viewWidth);
	$(".about_highlight_container, .about_highlight_bg").css("left", viewWidth/2 - 250);
	$(".about_highlight_container").css("top", viewHeight/2 - 260);
	$(".about_highlight_bg").css("top", viewHeight/2 - 340);
    $(".browser_detection_user_screen").html(window.screen.width + "x" + window.screen.height);
    $(".browser_detection_user_window").html(viewWidth + "x" + viewHeight);
    
    if (window.screen.height > 899 ) {
	    $(".browser_detection_user_screen_result").attr("src", "images/icon_tick.png");
    }
    
    if (viewWidth > 1280 && viewHeight > 800 ) {
	    $(".browser_detection_user_window_result").attr("src", "images/icon_tick.png");
    }
    
    $(".home_nav ul li").css("line-height", $(".home_nav ul li").css("height"));
    $(".item_container").css("top",viewHeight/2-100);
    
	$(".nav_box").css("top", scrollTop + viewHeight-300);
    
    $(".nav_box").mouseenter(function(){
    	
	    	$(this).css({"width": "300px", "right": "0px",});
    	
    });
    
    $(".nav_box").mouseleave(function(){
    	
	    	$(this).css({"width": "60px", "right": "50px",});
    	
    });

	if ($(window).width() < $('.nav').width()){
	    $(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top }, 800);
		});
	}
	else{
	    $(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top }, 800);
		});
	}

	$("footer").css("width", viewWidth);

/* 	============================ */

	$("section.motions_cover, section.designs_cover, section.webs_cover, section.about_cover").css("height",viewHeight - 100);	

	$(".motions_cover_title, .motions_cover_subtitle").css("left", viewWidth/2 - 480);
	$(".motions_cover_title, .motions_cover_subtitle").css("top", viewHeight + 300);
	setTimeout( function(){
      	$(".motions_cover_title").css("top", viewHeight/2 - 230);
      	$(".motions_cover_subtitle").css("top", viewHeight/2 + 150);
    },500);
    
    $(".title_bg_motion").css("height", viewHeight - 100);
    var motionTitleBgWidth = parseInt($(".title_bg_motion").css("width"));
    var motionTitleBgHeight = parseInt($(".title_bg_motion").css("height"));
    $(".title_bg_motion").css("left", viewWidth/2 - motionTitleBgHeight*1.77/2);

/*     $(".design_cover_ps_top").css("width", viewWidth); */
    
	setTimeout( function(){
      	$(".design_cover_ps_top").css("top", "0px");
    },1000);
    
    setTimeout( function(){
      	$(".design_cover_ps_left").css("left", "0px");
    },1300);
    
    setTimeout( function(){
      	$(".design_cover_ps_right").css("right", "0px");
    },1500);
    
	$(".designs_cover_title").css("left", viewWidth/2 - 480);
	$(".designs_cover_title").css("top", viewHeight + 400);
	$(".designs_cover_subtitle").css("left", viewWidth - 6000);
	$(".designs_cover_subtitle").css("top", viewHeight/2 + 120);
	setTimeout( function(){
      	$(".designs_cover_title").css("top", viewHeight/2 - 200);
      	$(".designs_cover_subtitle").css("left", viewWidth/2 - 450);
    },2000);
    
    $(".webs_cover_safari_top").css("left", viewWidth/2 - 480);
	setTimeout( function(){
      	$(".webs_cover_safari_top").css("top", "100px");
    },500);
    
	$(".webs_cover_title, .webs_cover_subtitle").css("left", viewWidth/2 - 480);
	$(".webs_cover_title, .webs_cover_subtitle").css("top", viewHeight + 300);
	setTimeout( function(){
      	$(".webs_cover_title").css("top", viewHeight/2 - 50);
      	$(".webs_cover_subtitle").css("top", viewHeight/2 + 220);
    },1800);
    
    $(".about_cover_title").css("top", "100px");
    $(".about_cover_title").css("width", viewWidth);
    $(".about_cover_title").css("height", viewHeight);
    
    $(".scroll_hits").css("left", viewWidth/2 - 200);
    
}

function indexResizeSetup() {
	var viewHeight = $(window).height();
	var viewWidth = $(window).width();
	var scrollTop = $(window).scrollTop();

	$("section.home_cover, section.featured_motions_container, section.featured_designs_container, section.featured_webs_container, section.featured_about_container").css("height",viewHeight);
	$(".home_nav").css("top", viewHeight*0.7);
	$(".home_title, .nav_bar_title, .featured_title, .item_container").css("left", viewWidth/2 - 480);
	$(".about_highlight_container, .about_highlight_bg").css("left", viewWidth/2 - 250);
	$(".about_highlight_container").css("top", viewHeight/2 - 260);
	$(".about_highlight_bg").css("top", viewHeight/2 - 340);
	$(".home_title_scroll").css("left", viewWidth/2 - 300);
	$(".title_bg, .nav_bar_title_bg").css("width", viewWidth);
  	$(".home_title_container").css("height","70%");
  	$(".home_title").css("bottom", $(".home_title_container").height()/2 - 100);
    $(".home_nav ul li").css("line-height", $(".home_nav ul li").css("height"));
    $(".item_container").css("top",viewHeight/2-100);
    
	$(".nav_box").css("top", scrollTop + viewHeight-300);
	
	$("footer").css("width", viewWidth);
	
	/* 	============================ */

	$("section.motions_cover, section.designs_cover, section.webs_cover, section.about_cover").css("height",viewHeight - 100);	

	$(".motions_cover_title, .motions_cover_subtitle").css("left", viewWidth/2 - 480);
      	$(".motions_cover_title").css("top", viewHeight/2 - 230);
      	$(".motions_cover_subtitle").css("top", viewHeight/2 + 150);
    
        $(".title_bg_motion").css("height", viewHeight - 100);
    var motionTitleBgWidth = parseInt($(".title_bg_motion").css("width"));
    var motionTitleBgHeight = parseInt($(".title_bg_motion").css("height"));
    $(".title_bg_motion").css("left", viewWidth/2 - motionTitleBgHeight*1.77/2);
    
/*     $(".design_cover_ps_top").css("width", viewWidth); */

      	$(".designs_cover_title").css("top", viewHeight/2 - 200);
	$(".designs_cover_title").css("left", viewWidth/2 - 480);

      	$(".designs_cover_subtitle").css("left", viewWidth/2 - 450);
	$(".designs_cover_subtitle").css("top", viewHeight/2 + 120);

    $(".scroll_hits").css("left", viewWidth/2 - 200);
    
    $("footer").css("width", viewWidth);
}

function indexTopBar(liveViewWidth) {
	var viewHeight = $(window).height();
	var viewWidth = $(window).width();
	var scrollTop = $(window).scrollTop();

	$(".nav_box").css("top", scrollTop + viewHeight-300);

	
	if (scrollTop > viewHeight/2) {
	    $(".nav_box").css("opacity", "1");
	    $(".scroll_hits").css("opacity", "0");
	    console.log(scrollTop);
	    console.log(viewHeight);
    } else {
	    $(".nav_box").css("opacity", "0");
    setTimeout( function(){
      	$(".scroll_hits").css("opacity", "1");
    },6000);
        }
}