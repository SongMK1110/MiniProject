package com.example.demo.product.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class CommonController {
    @GetMapping("/{path:[^\\.]*}")
    public String forward(HttpServletRequest request) {
        System.out.println("ifsjojfioejfioejfoij");
        return "forward:/";
    }
}
