$(document).ready(function() {

				// ID중복검사 부분
				$("#idcheck").click(function() {
					if ($.trim($("#id").val()) == "") {
						alert("ID를 입력 하세요");
						$("#id").focus();
						return false;
					} else {
						var ref = "idcheck.jsp?id=" + $("#id").val();
						window.open(ref, "idcheck", "width=350,height=200");
					}
				});
				
				
				// 우편검색 버튼 클릭
				$("#postcode").click(function(){				
					window.open("post.jsp","post","width=400,height=500,scrollbars=yes");
				});				
				
				// 도메인 선택 부분
				$("#sel").change(function(){
					if($("#sel").val() == ""){
						$("#domain").val("").focus();
						$("#domain").attr("disabled",false);
					}else{
						$("#domain").val($("#sel").val());
						$("#domain").attr("disabled","disabled");
					}					
				});
				
				// 주민번호 뒷자리로 포커스 이동
				$("#jumin1").keyup(function(){
					if($("#jumin1").val().length == 6)
						$("#jumin2").focus();
				});			
				
				
				// 회원가입 버튼 클릭할때 이벤트 처리 부분
				$("form").submit(function() {
							if ($.trim($("#id").val()) == "") {
								alert("ID를 입력 하세요");
								$("#id").focus();
								return false;
							}
							if ($.trim($("#pass").val()) == "") {
								alert("비밀번호를 입력 하세요");
								$("#pass").focus();
								return false;
							}
							if ($.trim($("#jumin1").val()) == "") {
								alert("주민번호 앞자리를 입력 하세요");
								$("#jumin1").focus();
								return false;
							}
							if ($.trim($("#jumin1").val().length) != 6) {
								alert("주민번호 앞자리 6자리를 입력 하세요");
								$("#jumin1").val("");
								$("#jumin1").focus();
								return false;
							}
							if (isNaN($("#jumin1").val())) {
								alert("숫자만 입력 가능 합니다.");
								$("#jumin1").val("");
								$("#jumin1").focus();
								return false;
							}
							if ($.trim($("#jumin2").val()) == "") {
								alert("주민번호 뒷자리를 입력 하세요");
								$("#jumin2").focus();
								return false;
							}
							if ($.trim($("#jumin2").val().length) != 7) {
								alert("주민번호 뒷자리 7자리를 입력 하세요");
								$("#jumin2").val("");
								$("#jumin2").focus();
								return false;
							}
							if (isNaN($("#jumin2").val())) {
								alert("숫자만 입력 가능 합니다.");
								$("#jumin2").val("");
								$("#jumin2").focus();
								return false;
							}
							if ($.trim($("#email").val()) == "") {
								alert("E-Mail주소를 입력 하세요");
								$("#email").focus();
								return false;
							}
							if ($.trim($("#domain").val()) == "") {
								alert("도메인 주소를 입력 하세요");
								$("#domain").focus();
								return false;
							}
							if ($("#gender1").is(":checked") == false
									&& $("#gender2").is(":checked") == false) {
								alert("남자.여자중에서 선택 하세요");
								return false;
							}
							var cnt = 0;
							if ($("#hobby1").is(":checked"))
								cnt++;
							if ($("#hobby2").is(":checked"))
								cnt++;
							if ($("#hobby3").is(":checked"))
								cnt++;
							if ($("#hobby4").is(":checked"))
								cnt++;
							if ($("#hobby5").is(":checked"))
								cnt++;
							if (cnt < 2) {
								alert("취미는 2개이상 선택하세요");
								return false;
							}
							if ($.trim($("#post1").val()) == "") {
								alert("우편번호 앞자리를 입력 하세요");
								$("#post1").focus();
								return false;
							}
							if (isNaN($("#post1").val())) {
								alert("숫자만 입력 가능 합니다.");
								$("#post1").val("");
								$("#post1").focus();
								return false;
							}
							if ($.trim($("#post2").val()) == "") {
								alert("우편번호 뒷자리를 입력 하세요");
								$("#post2").focus();
								return false;
							}
							if (isNaN($("#post2").val())) {
								alert("숫자만 입력 가능 합니다.");
								$("#post2").val("");
								$("#post2").focus();
								return false;
							}
							if ($.trim($("#address").val()) == "") {
								alert("주소를 입력 하세요");
								$("#address").focus();
								return false;
							}
							if ($.trim($("#intro").val()) == "") {
								alert("자기소개를 입력 하세요");
								$("#intro").focus();
								return false;
							}

						});//submit() end

			});//ready() end