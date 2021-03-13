package com.jason.languages.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.jason.languages.models.Language;
import com.jason.languages.services.LanguageService;
@Controller
public class LanguageController {
	private final LanguageService languageService;
	
	public LanguageController(LanguageService languageService) {
		this.languageService = languageService;
	}
	@RequestMapping("/")
	public String reRoute() {
		return "redirect:/languages";
	}
	@RequestMapping("/languages")
	public String index(@ModelAttribute("language") Language language, Model model) {
		List<Language> languages = languageService.allLanguages();
		model.addAttribute("languages", languages);
		return "index.jsp";
	}

	@RequestMapping(value="/languages", method=RequestMethod.POST)
	public String add(@Valid @ModelAttribute("language") Language language, BindingResult result, Model model) {
        if (result.hasErrors()) {
    		List<Language> languages = languageService.allLanguages();
    		model.addAttribute("languages", languages);
            return "index.jsp";
        }
        else {
            languageService.addLanguage(language);
            return "redirect:/languages";
        }
	}

	@RequestMapping(value="/languages/{id}", method=RequestMethod.PUT)
	public String modify(@Valid @ModelAttribute("language") Language language, BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        }
        else {
            languageService.addLanguage(language);
            return "redirect:/languages";
        }
	}
	
	@RequestMapping("/languages/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Language language = languageService.findLanguage(id);
		model.addAttribute("lang", language);
		return "show.jsp";
	}
	
	@RequestMapping("/languages/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		Language language = languageService.findLanguage(id);
		model.addAttribute("lang", language);
		return "edit.jsp";
	}
	@RequestMapping("/update/{id}")
	public String update(@Valid @ModelAttribute("language") Language language, BindingResult result) {
		languageService.addLanguage(language);
		return "redirect:/languages";
				
	}
	
	@RequestMapping("/languages/delete/{id}")
	public String delete(@PathVariable("id") Long id) {
		languageService.deleteLanguage(id);
		return "redirect:/languages";
	}
}
