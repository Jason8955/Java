package com.jason.strings;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FamiliarApplication {

	public static void main(String[] args) {
		SpringApplication.run(FamiliarApplication.class, args);
	}

@RequestMapping("/coding")
public String hello() {
	return "Hello coding dojo!";
}
@RequestMapping("/coding/python")
public String hello3() {
	return "Python/Django was awesome!!";
}
@RequestMapping("/coding/java")
public String hello2() {
	return "Java/Spring is better!!";
}
@RequestMapping("/random")
public String hello21() {
	return "Spring Boot is great! so easy to just respons with strings!!";
}
}
