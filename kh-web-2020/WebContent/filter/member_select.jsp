<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>member_select</title>
</head>
<body>
	<div id='member_select'>
		<h3>회원 조회</h3>
		<form name='frm' method='post' action='/kh-web-2020/member.kim'>
			<input type='submit' value='조회' />
			<a href='/kh-web-2020/filter/filter_main.jsp'>HOME</a>
		</form>
		<hr/>
		${msg }
	</div>
</body>
</html>