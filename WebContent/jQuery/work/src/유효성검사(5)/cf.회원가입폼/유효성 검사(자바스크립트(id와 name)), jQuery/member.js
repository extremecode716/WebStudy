function check(){
		if(document.myform.id.value == ""){
			alert("ID를 입력 하세요");
			document.myform.id.focus();
			return false;
		}
		if(document.myform.pass.value == ""){
			alert("비밀번호를 입력 하세요");
			document.myform.pass.focus();
			return false;
		}
		if(document.myform.jumin1.value == ""){
			alert("주민번호를 앞자리를입력 하세요");
			document.myform.jumin1.focus();
			return false;
		}
		if(document.myform.jumin1.value.length != 6){
			alert("주민번호를 앞자리를 6자리입력 하세요");
			document.myform.jumin1.value="";
			document.myform.jumin1.focus();
			return false;
		}
		if(document.myform.jumin2.value == ""){
			alert("주민번호를 뒷자리를입력 하세요");
			document.myform.jumin2.focus();
			return false;
		}
		if(document.myform.jumin2.value.length != 7){
			alert("주민번호를 뒷자리 7자리를입력 하세요");
			document.myform.jumin2.value="";
			document.myform.jumin2.focus();
			return false;
		}
		if(document.myform.email01.value == ""){
			alert("E-Mail주소 앞자리를 입력 하세요");
			document.myform.email01.focus();
			return false;
		}
		if(document.myform.email02.value == ""){
			alert("E-Mail주소 뒷자리를 입력 하세요");
			document.myform.email02.focus();
			return false;
		}
		if(document.myform.gender[0].checked == false &&           document.myform.gender[1].checked == false){
			alert("성별을 선택 하세요");
			return false;
		}

		var cnt=0;
		for(i=0; i<4; ++i){
			if(myform.hobby[i].checked)
				cnt++;
		}

		if(cnt<2){
			alert("취미는 2개이상 선택 하세요");
			return false;
		}

		if(document.myform.post1.value == ""){
			alert("우편번호 앞자리를 입력 하세요");
			document.myform.post1.focus();
			return false;
		}
		if(document.myform.post2.value == ""){
			alert("우편번호 뒷자리를 입력 하세요");
			document.myform.post2.focus();
			return false;
		}
		if(document.myform.address.value == ""){
			alert("주소를 입력 하세요");
			document.myform.address.focus();
			return false;
		}
		if(document.myform.intro.value == ""){
			alert("자기소개를 입력 하세요");
			document.myform.intro.focus();
			return false;
		}
	}


    // ID중복검사
	function idcheck(){		
		if(document.myform.id.value == ""){
			alert("ID를 입력 하세요");
			document.myform.id.focus();
		}else{
		var ref="idcheck.jsp?id="+document.myform.id.value;
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
		document.myform.email02.value=
		document.myform.sel.value;
	}