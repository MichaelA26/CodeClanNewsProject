package com.codeclan.example.server.services;

import com.codeclan.example.server.models.Article;

import java.util.List;

public interface IArticleService {

    List<Article> findArticleOrderByDateDesc();

}
