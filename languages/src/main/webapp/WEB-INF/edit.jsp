<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<section>
		<div class="container">
  			<div class="columns">
					<div class="column">
			    		
			    		<h1 class="subtitle is-5">Name</h1>
			    		<h1 class="subtitle is-5">Language</h1>
			    		<h1 class="subtitle is-5">Version</h1>
			    		
			  		</div>
			  		<div class="column">
			    		<form:form action="/update/${lang.id}" method="post" modelAttribute="lang">
			    		<input type="hidden" name="_method" value="put">
			    		<div class="field">
  							<div class="control">
    						<form:input class="input" type="text" path="name"/>
    						<form:errors path="name"/>
  							</div>
						</div>
			  			<div class="field">
  							<div class="control">
    						<form:input class="input" type="text" path="creator"/>
    						<form:errors path="creator"/>
  							</div>
						</div>
						<div class="field">
  							<div class="control">
    						<form:input class="input" type="text" path="version"/>
    						<form:errors path="version"/>
  							</div>
						</div>
						<div class="buttons is-right">
  							<input class="button is-primary is-right" type="submit"/> 	
						</div>
					</form:form>
			  		</div>
			  		
  			</div>
  			
	</div>
	</section>
</body>
</html>