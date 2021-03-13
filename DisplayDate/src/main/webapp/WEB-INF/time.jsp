<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>  
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Time</title>
	<script src="js.js"></script>
	<style><%@include file="/WEB-INF/css/style.css"%></style>
	<script><%@include file="/WEB-INF/js/javascript.js"%></script>
</head>
</head>
<body onload="message()">
<div class="container">
	<h1><c:out value="${time}"/></h1> 
	</div> 
</body>
</html>