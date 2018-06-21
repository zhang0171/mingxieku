$(document).ready(() => {
	const imgMain = $('div.imgContainer').children('img'),
		  pointMain = $('div.pointContainer').children('span'),
		  container =  $('#exchangImg');
	var timer = null,//定时器
		fadeTime = 500,//淡化这个过程的事件
		index = 0,//当前的小圆圈
		preIndex = 0;//上一个的小圆圈
	//图片事件
	function imgEvent(num) {
		imgMain.eq(num).fadeIn(fadeTime)
		imgMain.eq(preIndex).fadeOut(fadeTime)
		preIndex = num;
	}
	//小圆圈事件
	function pointEvent(obj) {
		obj.addClass('active').siblings().removeClass('active');
		return obj.attr('index');
	}
	//定时器
	function start() {
		timer = setInterval(() => {
			index++;
			index > (pointMain.length-1) ? index = 0 : index = index;
			imgEvent(pointEvent(pointMain.eq(index)));
		}, 2000);
	}

	function stop() {
		clearInterval(timer);
	}
	//小圆圈点击事件
	pointMain.mouseover(function() {
		//$(this).index() 
		!$(this).hasClass('active') && (imgEvent(pointEvent($(this))),index = $(this).attr("index"));
	});
	
	container.hover(stop, start);
	
	start();
	
});
//lubo222222222222222222222
			var i = 0;
			var timer = null;
			$(function(){
				$("#box").hover(function(){$(".btn").show();},function(){$(".btn").hide();})
				$(".list").eq(0).show().siblings().hide();
				show()
				$(".num").hover(function(){
					clearInterval(timer)
					i=$(this).index();
					move();
//					console.log(this)
				})
				$("#box").mouseover(function(){
					clearInterval(timer)
				})
				$("#box").mouseout(function(){
					show()
				})
				function move(){
					$(".list").eq(i).fadeIn(300).siblings().fadeOut(300);
					$(".num").eq(i).addClass("bg").siblings().removeClass("bg")
				}
				function show(){
					timer = setInterval(function(){
						i++;
						if(i==5){
							i=0;
						}
						move();
					},1000)
				}
				
			})

$(function(){
	$(".ulone li:nth-child(2)").hover(function(){
		$(".ulsi").css("display","block")
		$(".ulwu").css("display","block")
		$(".ultwo").css("display","none")
		$(".ulsan").css("display","none")
	})
	$(".ulone li:nth-child(1)").hover(function(){
		$(".ultwo").css("display","block")
		$(".ulsan").css("display","block")
		$(".ulsi").css("display","none")
		$(".ulwu").css("display","none")
	})
	$(".ulone_1 li:nth-child(2)").hover(function(){
		$(".ulsi_1").css("display","block")
		$(".ulwu_1").css("display","block")
		$(".ultwo_1").css("display","none")
		$(".ulsan_1").css("display","none")
	})
	$(".ulone_1 li:nth-child(1)").hover(function(){
		$(".ultwo_1").css("display","block")
		$(".ulsan_1").css("display","block")
		$(".ulsi_1").css("display","none")
		$(".ulwu_1").css("display","none")
	})
	
	$(".rep1_centre a").hover(function(){
		$(".rep1_centre div").addClass("hover").siblings().removeClass("hover");
	})
	
	$(".rep2 img").mouseover(function(){
		$(this).stop().animate({'left':-3},"fast")	
	})
	$(".rep2 img").mouseout(function(){
		$(this).stop().animate({'left':10},"fast")	
	})
	$(".rep3 a").mouseover(function(){
		$(this).stop().animate({'left':-3},"fast")	
	})
	$(".rep3 a").mouseout(function(){
		$(this).stop().animate({'left':3},"fast")	
	})
	$(".zq a").hover(function(){
		$(".zq div").addClass("hover").siblings().removeClass("hover");
	})
	$(".huad1").hover(function(){
		$(".add1").css("display","block")
	},function(){
		$(".add1").css("display","none")
	})
	$(".add1").hover(function(){
		$(".add1").css("display","block")
	},function(){
		$(".add1").css("display","none")
	})
	
	$(".huad2").hover(function(){
		$(".add2").css("display","block")
	},function(){
		$(".add2").css("display","none")
	})
	$(".huad3").hover(function(){
		$(".add3").css("display","block")
	},function(){
		$(".add3").css("display","none")
	})
	$(".add3").hover(function(){
		$(".add3").css("display","block")
	},function(){
		$(".add3").css("display","none")
	})
	$(".huad4").hover(function(){
		$(".add4").css("display","block")
	},function(){
		$(".add4").css("display","none")
	})
	$(".huad5").hover(function(){
		$(".add5").css("display","block")
	},function(){
		$(".add5").css("display","none")
	})
	$(".add5").hover(function(){
		$(".add5").css("display","block")
	},function(){
		$(".add5").css("display","none")
	})
	$(".huad6").hover(function(){
		$(".add6").css("display","block")
	},function(){
		$(".add6").css("display","none")
	})
	$(".add6").hover(function(){
		$(".add6").css("display","block")
	},function(){
		$(".add6").css("display","none")
	})
	$(".huad7").hover(function(){
		$(".add7").css("display","block")
	},function(){
		$(".add7").css("display","none")
	})
	$(".add7").hover(function(){
		$(".add7").css("display","block")
	},function(){
		$(".add7").css("display","none")
	})
	$(".add3 li").mouseover(function(){
		$(this).find("a").stop().animate({'left':10},"fast")	
	})
	$(".add3 li").mouseout(function(){
		$(this).find("a").stop().animate({'left':0},"fast")	
	})
	$(".add3_1 img").mouseover(function(){
		$(this).stop().animate({'left':9},"fast")	
	})
	$(".add3_1 img").mouseout(function(){
		$(this).stop().animate({'left':0},"fast")	
	})
	$(".huad8").hover(function(){
		$(".add3_1").css("display","block")
	},function(){
		$(".add3_1").css("display","none")
	})
	$(".add7").hover(function(){
		$(".add3_1").css("display","block")
	},function(){
		$(".add3_1").css("display","none")
	})
	$(".add3_1").hover(function(){
		$(this).css("display","block")
	},function(){
		$(this).css("display","none")
	})

})


























