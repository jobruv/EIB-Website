package com.eib.website.controller;

import com.eib.website.service.WebsiteService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebsiteController {
    private final WebsiteService websiteService;
    public WebsiteController(WebsiteService websiteService){
        this.websiteService=websiteService;
    }
    @GetMapping("/")
    public String viewHomePage(Model model){
        model.addAttribute("associations",websiteService.getAllAssociations());
        model.addAttribute("categories",websiteService.getAllCategories());
        model.addAttribute("announcements", websiteService.getAllAnnouncements());

        return "index";
    }
}
