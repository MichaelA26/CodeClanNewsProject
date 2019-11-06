package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ArticleRepository extends JpaRepository<Article, Long> {

    @Query("FROM Article ORDER BY date DESC")
    List<Article> findArticleOrderByDateDesc();

}
