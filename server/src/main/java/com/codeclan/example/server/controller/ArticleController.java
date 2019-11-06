package com.codeclan.example.server.controller;

import com.codeclan.example.server.models.Article;
import com.codeclan.example.server.repositories.ArticleRepository;
import com.codeclan.example.server.services.IArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ArticleController {

    @Autowired
    private IArticleService articleService;

    @Autowired
    ArticleRepository articleRepository;

}
