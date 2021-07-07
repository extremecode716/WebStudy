function check(){
		var id = document.getElementById("id");
		var pass = document.getElementById("pass");
		var jumin1 = document.getElementById("jumin1");
		var jumin2 = document.getElementById("jumin2");
		var email01 = document.getElementById("email01");
		var email02 = document.getElementById("email02");
		var male = document.getElementById("male");
		var female = document.getElementById("female");
		var h1 = document.getElementById("h1");
		var h2 = document.getElementById("h2");
		var h3 = document.getElementById("h3");
		var h4 = document.getElementById("h4");
		var h5 = document.getElementById("h5");
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
			alert("주민번호를 앞자리를입력 하세요");
			jumin1.focus();
			return false;
		}
		if(jumin1.value.length != 6){
			alert("주민번호를 앞자리를 6자리입력 하세요");
			jumin1.value="";
			jumin1.focus();
			return false;
		}
		if(jumin2.value == ""){
			alert("주민번호를 뒷자리를입력 하세요");
			jumin2.focus();
			return false;
		}
		if(jumin2.value.length != 7){
			alert("주민번호를 뒷자리 7자리를입력 하세요");
			jumin2.value="";
			jumin2.focus();
			return false;
		}
		if(email01.value == ""){
			alert("E-Mail주소 앞자리를 입력 하세요");
			email01.focus();
			return false;
		}
		if(email02.value == ""){
			alert("E-Mail주소 뒷자리를 입력 하세요");
			email02.focus();
			return false;
		}
		if(male.checked == false && female.checked == false){
			alert("성별을 선택 하세요");
			return false;
		}

		var cnt=0;		
			if(h1.checked)	cnt++;
			if(h2.checked)	cnt++;
			if(h3.checked)	cnt++;
			if(h4.checked)	cnt++;
			if(h5.checked)	cnt++;		

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


    // ID중복검사
	function idcheck(){	
		var id = document.getElementById("id");
		if(id.value == ""){
			alert("ID를 입력 하세요");
			id.focus();
		}else{
		var ref="idcheck.jsp?id="+id.value;
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
		var email02 = document.getElementById("email02");
		var sel = document.getElementById("sel");
		email02.value =	sel.value;
	}