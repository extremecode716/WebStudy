function check(){

		if($("#id").val() == ""){
			alert("ID를 입력 하세요");
			$("#id").focus();
			return false;
		}
		if($("#pass").val() == ""){
			alert("비밀번호를 입력 하세요");
			$("#pass").focus();
			return false;
		}
		if($("#jumin1").val() == ""){
			alert("주민번호를 앞자리를입력 하세요");
			$("#jumin1").focus();
			return false;
		}
		if($("#jumin1").val().length != 6){
			alert("주민번호를 앞자리를 6자리입력 하세요");
			$("#jumin1").val("");
			$("#jumin1").focus();
			return false;
		}
		if($("#jumin2").val() == ""){
			alert("주민번호를 뒷자리를입력 하세요");
			$("#jumin2").focus();
			return false;
		}
		if($("#jumin2").val().length != 7){
			alert("주민번호를 뒷자리 7자리를입력 하세요");
			$("#jumin2").val("");
			$("#jumin2").focus();
			return false;
		}
		if($("#email01").val() == ""){
			alert("E-Mail주소 앞자리를 입력 하세요");
			$("#email01").focus();
			return false;
		}
		if($("#email02").val() == ""){
			alert("E-Mail주소 뒷자리를 입력 하세요");
			$("#email02").focus();
			return false;
		}
		if($("#male").is(":checked") == false && 
		   $("#female").is(":checked") == false){
			alert("성별을 선택 하세요");
			return false;
		}

		var cnt=0;		
			if($("#h1").is(":checked"))	cnt++;
			if($("#h2").is(":checked"))	cnt++;
			if($("#h3").is(":checked"))	cnt++;
			if($("#h4").is(":checked"))	cnt++;
			if($("#h5").is(":checked"))	cnt++;		

		if(cnt<2){
			alert("취미는 2개이상 선택 하세요");
			return false;
		}

		if($("#post1").val() == ""){
			alert("우편번호 앞자리를 입력 하세요");
			$("#post1").focus();
			return false;
		}
		if($("#post2").val() == ""){
			alert("우편번호 뒷자리를 입력 하세요");
			$("#post2").focus();
			return false;
		}
		if($("#address").val() == ""){
			alert("주소를 입력 하세요");
			$("#address").focus();
			return false;
		}
		if($("#intro").val() == ""){
			alert("자기소개를 입력 하세요");
			$("#intro").focus();
			return false;
		}	

}// check() end


 // ID중복검사
 function idcheck(){	
		
		if($("#id").val() == ""){
			alert("ID를 입력 하세요");
			$("#id").focus();
		}else{
		var ref="idcheck.jsp?id="+$("#id").val();
			window.open(ref,"myid","width=300,height=200");
		}
	}

// 우편번호 검색
function postcode(){	
		window.open("post.jsp","postcode",
					"width=400, height=500,scrollbars=yes");
}

	// E-Mail 선택
function move(){		
		$("#email02").val($("#sel").val());
}