package com.example.anti.controller;

import com.example.anti.form.ArticleForm;
import com.example.anti.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;

    @PostMapping("/article/new")
    public String postArticle(ArticleForm articleForm) throws IOException {
        articleService.postArticle(articleForm);
        return "ok";
    }

}
