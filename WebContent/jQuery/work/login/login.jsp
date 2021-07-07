<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>
 -->
 
 <%
 	request.setCharacterEncoding("UTF-8"); // post 한글 깨짐 해결방법 1.
 	String id = request.getParameter("id"); // 반환 타입이 String
 	String passwd = request.getParameter("passwd");
 %>
 
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<p>ID: <%=id %></p>
	<p>비밀번호: <%=passwd %></p>
</body>
</html>