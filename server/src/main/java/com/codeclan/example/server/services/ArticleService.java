package com.codeclan.example.server.services;

import com.codeclan.example.server.models.Article;
import com.codeclan.example.server.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService implements IArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    @Override
    public List<Article> findArticleOrderByDateDesc() {
        return articleRepository.findArticleOrderByDateDesc();
    }

}
