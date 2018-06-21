$(function(){
	 var flag = false;
	$("#user").blur(function(){
		var ues = /^[1][3,4,5,7,8][0-9]{9}$/;
		if(ues.test($(this).val())==false){
			$("#ts").css("display","block")					
		}else{
			$("#ts").css("display","none")	
		}
	})
	$("#pw").blur(function(){
		var ues =  /^[0-9A-Za-z]{6,}$/;
		if(ues.test($(this).val())==false){
			$("#ts2").css("display","block")					
		}else{
			$("#ts2").css("display","none")	
		}
	})
	$("#pw2").blur(function(){
		if($("#pw2").val()==$("#pw").val()){
			flag = true;
		}else{
			alert("两次密码不一致，请重新输入")
			return false;
		}
		
	})
})
   function signFun(){
   	//var signObj = $("#signForm").serialize();
   	var userName = $("#user").val();
   	var passWord = $("#pw").val();
   	var passWord2 = $("#pw2").val();
   	if(userName == ""){
   		alert("请输入用户名");
   		return false;
   	}
   	else if(passWord == ""){
   		alert("请输入密码");
   		return false;
   	}else{
   		flag = true;
   	}
   	
   	if(flag == true){
   		$.ajax({
	    type: "POST",
	    url: "http://h6.duchengjiu.top/shop/api_user.php",
	    data: {
	    	"status":"register",
	    	"username":userName,
	    	"password":passWord
	    	
	    },// 要提交的表单
	    success: function (msg) {
	    	console.log(msg)
	    	
				if(msg.code!=0){
            	alert(msg.message)
            	return false;
            }else{
            	console.log("成功了，跳转路径")
				location.assign("login.html");
            }
	      //easyuiAlert(msg);
	    },
	    error: function (error) {
	     // easyuiAlert(error);
	    }
	  });
   	}
   }

function loginFun(){
	var name2 =$(".name2").val();
	var pass2 =$(".pass2").val();
//	console.log(name2,pass2)
	if(name2 ==""){
		alert("请输入用户名");
		return false;
	}
	if(pass2 ==""){
		alert("请输入密码")
		return false;
	}
	
	$.ajax({
		type:"post",
		url:"http://h6.duchengjiu.top/shop/api_user.php",
		data:{
			"status":"login" ,
			"username":name2,
	    	"password":pass2
		  
		},
		success:function(data){
			console.log(data)
			if(data.code!=0){
            	alert(data.message)
            	return false;
            }else{
            	console.log("成功了，跳转路径")
				location.assign("index.html");
//				
            }
		}
		
		
	});
	
	
}























