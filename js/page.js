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
	$(".top").click(function(){
		$("body,html").animate({"scrollTop":0})
	})

var bbb  = getCookie("zf");
//console.log(getCookie("zf"))
$.ajax({
	type:"get",
	url:"http://h6.duchengjiu.top/shop/api_goods.php",
	data:{
			cat_id:'125',
			pagesize:76
	},	
	success:function(data){
		var data = data.data;
//		console.log(data)	
		var _str ="";	
		var _str2 ="";
		for(var i=0; i<data.length;i++){
			if(data[i].goods_id==bbb){
//				console.log(data[i])
				_str=`
					  <img class='big' src='${data[i].goods_thumb}'>
					  <img class='sma' src='${data[i].goods_thumb}'>
					  <img class='sa' src='../img2/sma.gif'>
					  
				`
				_str2=`
					  <h3 class="h3">${data[i].goods_name}<a class="h3a" href="#">更多</a></h3>				
				<div class="jinqian">
					<span class="span">吊牌价：<s>￥229</s></span>
					<span class="span">销售价：<b class="b">￥${data[i].price}</b>&nbsp;&nbsp;<i>(5.6折)</i>&nbsp;&nbsp;立省：<i>100.00</i></span>
					<span class="span">运&nbsp;&nbsp;&nbsp;费：名鞋库会员满<i>399</i>包邮（不包括货到付款）</span>
				</div>
				<div class="cucu">
					<div class="cu1">促销信息</div>
					<div class="cu2">满300减30&nbsp;&nbsp;满600减90&nbsp;&nbsp;限购3件</div>
				</div>
				<div class="buy">
					<a class="liji" href="#">立即购买</a>
					<a cart-id="${data[i].goods_id}" class="join">加入购物车</a>
				</div>
				<img style="margin-left:23px;margin-top:30px;" src="img2/nohope.jpg"/>
				
				`
			}
		}
		$(".tu").html(_str);
		$(".tit").html(_str2);
		$(".join").click(function(){location.assign("shopping.html")});
		for(var j=0;j<$(".join").length;j++){
			$(".join")[j].index=j;
			$(".join")[j].onclick=function(){
				var cartId = $($(".join")[this.index]).attr("cart-id");
				console.log(cartId)
				setCookie("justName",cartId,7);
			}
		}
	}
	

});

   	
   	 
   	 


});











