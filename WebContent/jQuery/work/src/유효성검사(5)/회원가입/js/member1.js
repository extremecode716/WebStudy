//ID중복검사
function idcheck(){
	var id=document.getElementById("id");
	if(id.value == ""){
		alert("ID를 입력 하세요");
		id.focus();
	}else{
		var ref="idcheck.jsp?id="+id.value;
		window.open(ref,"idcheck","width=300,height=250");
	}
}

// 우편검색
function post(){
	window.open("post.jsp","postcode","width=250,height=350,scrollbars=yes");
}

// 주민번호 뒷자리로 포커스 이동
function move(){
	var jumin1=document.getElementById("jumin1");
	var jumin2=document.getElementById("jumin2");
	if(jumin1.value.length == 6)
		jumin2.focus();
}

// E-Mail주소의 도메인 선택
function domain1(){	
	var domain = document.getElementById("domain");
	var sel = document.getElementById("sel");	
	
	if(sel.value==""){// 직접 선택		
		domain.value="";	
		domain.focus();	 
		
		// 수정 가능
		domain.readOnly=false;
	}else{							// 도메인 선택
		domain.value=sel.value;
	
		// 수정 불가
		domain.readOnly=true;
	} 
	
}

//유효성 검사
function check(){
	var cnt=0;
	var myform=document.getElementById("myform");
	var id=document.getElementById("id");
	var pass=document.getElementById("pass");
	var jumin1=document.getElementById("jumin1");
	var jumin2=document.getElementById("jumin2");
	var email = document.getElementById("email");
	var domain = document.getElementById("domain");
	var gender1 = document.getElementById("gender1");
	var gender2 = document.getElementById("gender2");
	var hobby1 = document.getElementById("hobby1");
	var hobby2 = document.getElementById("hobby2");
	var hobby3 = document.getElementById("hobby3");
	var hobby4 = document.getElementById("hobby4");
	var hobby5 = document.getElementById("hobby5");
	var post1 = document.getElementById("post1");
	var post2 = document.getElementById("post2");
	var address = document.getElementById("address");
	var intro = document.getElementById("intro");

	if(id.value == ""){
		alert("ID를 입력 하세요");
		id.focus();
		return false;
	}
	if(pass.value == ""){
		alert("비밀번호를 입력 하세요");
		pass.focus();
		return false;
	}
	if(jumin1.value == ""){
		alert("주민번호 앞자리를 입력 하세요");
		jumin1.focus();
		return false;
	}
	if(jumin1.value.length != 6){
		alert("주민번호 앞자리 6자리를 입력 하세요");
		jumin1.value="";
		jumin1.focus();
		return false;
	}
	if(jumin2.value == ""){
		alert("주민번호 뒷자리를 입력 하세요");
		jumin2.focus();
		return false;
	}
	if(jumin2.value.length != 7){
		alert("주민번호 뒷자리 7자리를 입력 하세요");
		jumin2.value="";
		jumin2.focus();
		return false;
	}
	if(email.value == ""){
		alert("E-Mail앞자리를 입력 하세요");
		email.focus();
		return false;
	}
	if(domain.value == ""){
		alert("E-Mail뒷자리를 입력 하세요");
		domain.focus();
		return false;
	}
	if(gender1.checked == false &&
	   gender2.checked == false){
		alert("남자.여자중 1개를 선택 하세요");
		return false;
   }
	if(hobby1.checked)
		cnt++;
	if(hobby2.checked)
		cnt++;
	if(hobby3.checked)
		cnt++;
	if(hobby4.checked)
		cnt++;
	if(hobby5.checked)
		cnt++;	
	
	if(cnt<2){
		alert("취미는 2개이상 선택 하세요");
		return false;
	}
	if(post1.value == ""){
		alert("우편번호 앞자리를 입력 하세요");
		post1.focus();
		return false;
	}
	if(post2.value == ""){
		alert("우편번호 뒷자리를 입력 하세요");
		post2.focus();
		return false;
	}
	if(address.value == ""){
		alert("주소를 입력 하세요");
		address.focus();
		return false;
	}
	if(intro.value == ""){
		alert("자기소개를 입력 하세요");
		intro.focus();
		return false;
	}
}