$(function(){
	
	var jn =getCookie("justName");
	console.log(jn)
	$.ajax({
		type:"get",
		url:"http://h6.duchengjiu.top/shop/api_goods.php",
		data:{
			cat_id:'125',
			pagesize:76
	    },	
		success:function(data){
//			console.log(abc)
			
			var data =data.data;
			console.log(data)
			var _str ="";
			for(var i=0;i<data.length;i++){
				if(data[i].goods_id==jn){
					_str +=`
				<table>
					<tr class="trr">
					<th style="width:430px;">
						<img style="width:50px;height:50px;position:absolute;top:10px;left:25px;" src="${data[i].goods_thumb}"/>
						<span style="">${data[i].goods_name}</span>
					</th>
					<th>￥<i class="i1">${data[i].price}</i></th>
					<th>
						<div class="shop-arithmetic">
								<a href="javascript:;" class="reduce">-</a>
								<input type="text" class="num" value="1"/>
								<a href="javascript:;" class="plus">+</a>
							</div>
					</th>
					<th>￥<i class="i2"></i></th>
					<th class="del">删除</th>
					</tr>
				</table>
					`
				}
			}
			$(".goods").html(_str);
			var plus =$(".plus");
			var reduce=$(".reduce");
			var num =$(".num")
			var num=1;//数量初始值  
		plus.click(function(){
	     	num++;  
			if(num>=20){
				num=20;
			}
			$(".num")[0].value = num ;
			$(".i2").html($(".i1").text()*num)
		})
		reduce.click(function(){
	     	num--;  
	     	if(num<=1){
	     		num=1;
	     	}
	     	$(".num")[0].value=num;
	     	$(".i2").html($(".i1").text()*num)
		})
		
		$(".i2").html($(".i1").text()*num)
//		$(".del").click(function(){
//			$("jn").remove();
//		})
			}
			
	});
	
	
	
	
})




