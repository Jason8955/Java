<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Show</title>
</head>
<body>
<section>
		<div class="container">
  			<h1><c:out value="${lang.name}"/></h1>
			<h1><c:out value="${lang.creator}"/></h1>
			<h1><c:out value="${lang.version}"/> </h1>
			<a href="/languages/edit/${lang.id}">Edit</a><br>
			<a href="/languages/delete/<c:out value="${lang.id}"/>">Delete</a><br>
			<a href="/languages">DashBoard</a><br>
  			
		</div>
	</section>
</body>
</html>