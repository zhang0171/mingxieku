$(function(){
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
	
	
	
	
//	$.ajax({
//		type:"get",
//		url:"http://h6.duchengjiu.top/shop/api_goods.php",
//		success:function(data){
//			console.log(data);
//			var _string = "";
//			
//			for(var i = 0;i<data.data.length;i++){
//				_string +="<div class='goodsSon'>" //每个单个商品作为一个节点，里边包着商品信息 哦
//					var _thisData = data.data[i];
//					_string +="<div class='goodsImgBox'>"+_thisData.goods_thumb+"</div>";
//					_string +="<div class='goodsMassage'>这里放上边的图片节点";
//				        //这里放商品信息
//						_string +="<div class='goodName'>"+_thisData.goods_name+ "</div>";
//						_string +="<div class='goods_id'>"+_thisData.goods_id+ "</div>";
//				    _string +="</div>";
//				_string +="</div>" 
//				
//			}
//			//循环这个数据，拼接成字符串，放进那个父节点goodsList
//			//goodName用这种类名去控制样式
//			//轻易不要出现id，样式全用类名；id用到数据的处理上
//			//还能这样拼接？
//			
//			$(".goodsList").html(_string);
//			
////			$.("#fuck").innerHTML = data;
//		}
//	})
	
//	这是请求到的数据 请移到 chrome 
	
	$.ajax({
		type:"get",
		url:"http://h6.duchengjiu.top/shop/api_goods.php",
		data:{
			cat_id:'125',
			pagesize:76
		},
		success:function(abc){
			console.log(abc)
			var _string="";
			for(var i=0;i<abc.data.length;i++){
				_string+="<div  data-id='"+abc.data[i].goods_id+"' class='goodsSon'>"
					var _thisAbc =abc.data[i];
					_string +="<img class='goodsImgBox' src='"+_thisAbc.goods_thumb+"'/>"
					_string+="<div class='goods_price'>"+"￥"+_thisAbc.price+"</div>"
					_string+="<div class='goodName'>"+_thisAbc.goods_name+"</div>"
				_string+="</div>"
			}
		$(".list").html(_string).click(function(){location.assign("page.html")}); 
		var gss =$(".goodsSon");
		for(var i=0;i<gss.length;i++){
			gss[i].index=i;
//			gss[0].index=0;  gss[1].index=1;
			gss[i].onclick=function(){
				console.log(this)
//				console.log(this.index)
				console.log($(gss[this.index]).attr("data-id")); //不加index获取不到 为underfind
				var aaa = $(gss[this.index]).attr("data-id");
				setCookie("zf",aaa,7);
			}
		 }
		}
	});
	$(".top").click(function(){
		$("body,html").animate({"scrollTop":0})
	})

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
