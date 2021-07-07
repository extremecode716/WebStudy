// ID 중복검사 하는 부분
function idcheck(){
	if(document.myform.id.value==""){
		alert("ID를 입력 하세요");
		document.myform.id.focus();
	}else{
		var ref="idcheck.jsp?id="+document.myform.id.value;
		window.open(ref,"idcheck","width=300,height=250");
	}	
}

// 주민번호 뒷자리로 포커스 이동
function move(){
	if(document.myform.jumin1.value.length == 6)
	document.myform.jumin2.focus();
}

// 도메인 선택
function domain1(){
	if(document.myform.sel.value==""){// 직접 선택		
		document.myform.domain.value="";	
		document.myform.domain.focus();	
		
		// 수정 가능
		document.myform.domain.readOnly=false;
	}else{							// 도메인 선택
		document.myform.domain.value=
		document.myform.sel.value;
	
		// 수정 불가
		document.myform.domain.readOnly=true;
	}
}

// 우편 검색
function post(){
	window.open("post.jsp","post","width=400,height=500");
}

// 유효성 검사
function check(){
	if(document.myform.id.value==""){
		alert("ID를 입력 하세요");
		document.myform.id.focus();
		return false;
	}
	if(document.myform.pass.value==""){
		alert("비밀번호를 입력 하세요");
		document.myform.pass.focus();
		return false;
	}
	if(document.myform.jumin1.value==""){
		alert("주민번호 앞자리를 입력 하세요");
		document.myform.jumin1.focus();
		return false;
	}
	if(document.myform.jumin1.value.length != 6){
		alert("주민번호 앞자리 6자리를 입력 하세요");
		document.myform.jumin1.value="";
		document.myform.jumin1.focus();
		return false;
	}
	if(isNaN(document.myform.jumin1.value)){
		alert("주민번호 앞자리는 숫자만 입력 가능합니다.");
		document.myform.jumin1.value="";
		document.myform.jumin1.focus();
		return false;
	}
	if(document.myform.jumin2.value==""){
		alert("주민번호 뒷자리를 입력 하세요");
		document.myform.jumin2.focus();
		return false;
	}
	if(document.myform.jumin2.value.length != 7){
		alert("주민번호 뒷자리 7자리를 입력 하세요");
		document.myform.jumin2.value="";
		document.myform.jumin2.focus();
		return false;
	}
	if(isNaN(document.myform.jumin2.value)){
		alert("주민번호 뒷자리는 숫자만 입력 가능합니다.");
		document.myform.jumin2.value="";
		document.myform.jumin2.focus();
		return false;
	}
	if(document.myform.email.value==""){
		alert("E-MAIL 앞주소를 입력하세요");
		document.myform.email.focus();
		return false;
	}
	if(document.myform.domain.value==""){
		alert("E-MAIL 도메인 주소를 입력하세요");
		document.myform.domain.focus();
		return false;
	}
	if(document.myform.gender[0].checked == false &&
	   document.myform.gender[1].checked == false){
		alert("남.여 중에서 1개를 선택하세요");
		return false;
	}
	var cnt=0;
	var n=myform.hobby.length;
	for(var i=0; i<n; i++){
		if(document.myform.hobby[i].checked)
		cnt++;
	}
	if(cnt<2){
		alert("취미는 2개이상 선택 하세요~!!")
		return false;
	}
	if(document.myform.post1.value==""){
		alert("우편번호 앞자리를 입력 하세요");
		document.myform.post1.focus();
		return false;
	}
	if(document.myform.post2.value==""){
		alert("우편번호 뒷자리를 입력 하세요");
		document.myform.post2.focus();
		return false;
	}
	if(document.myform.address.value==""){
		alert("주소를 입력 하세요");
		document.myform.address.focus();
		return false;
	}
	if(document.myform.intro.value==""){
		alert("자기소개를 입력 하세요");
		document.myform.intro.focus();
		return false;
	}
}