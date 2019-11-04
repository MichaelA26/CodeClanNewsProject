package com.codeclan.example.server.componenets;

import com.codeclan.example.server.models.Article;
import com.codeclan.example.server.models.Journalist;
import com.codeclan.example.server.repositories.ArticleRepository;
import com.codeclan.example.server.repositories.JournalistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    JournalistRepository journalistRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args){

        Journalist journalist1 = new Journalist("Journalist", "1", "0131 111 111");

        Article article1 = new Article("Article1", "04/11/2019", journalist1, "Story1", "Summary of Story1", "Action");

    }
}
