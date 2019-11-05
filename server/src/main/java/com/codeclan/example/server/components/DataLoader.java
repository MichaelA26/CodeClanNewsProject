package com.codeclan.example.server.components;

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

    Journalist journalist1 = new Journalist("Weildstone", "Raider", "0131 111 111", true);
    journalistRepository.save(journalist1);

    Journalist journalist2 = new Journalist("Paris", "Hilton", "0800 00 1066", true);
    journalistRepository.save(journalist2);

    Journalist journalist3 = new Journalist("J.K.", "Rowling", "01506 123 456", true);
    journalistRepository.save(journalist3);

    Journalist journalist4 = new Journalist("H.J.", "Mulligatawny", "0131 111 111", true);
    journalistRepository.save(journalist4);

    Journalist journalist5 = new Journalist("xXKeYbOaRd", "WaRrIoRXx", "0131 111 111", false);
    journalistRepository.save(journalist5);

    Journalist journalist6 = new Journalist("Obi-Wan", "Kenobi", "No Phone, use the force.", true);
    journalistRepository.save(journalist6);

    Journalist journalist7 = new Journalist("Jeff", "Kaplan", "0453 999 213", false);
    journalistRepository.save(journalist7);

    Journalist journalist8 = new Journalist("Jackie", "Bird", "8888 888 888", false);
    journalistRepository.save(journalist8);

    Journalist journalist9 = new Journalist("Boromir", "of Gondor", "One does not simply phone Boromir of Gondor!", false);
    journalistRepository.save(journalist9);



    Article article1 = new Article(
    "Cookie Monster Crisis!",
    "04/11/2019",
    journalist1,
    "After partaking in a glorious cookie bonanza, poor ol' cookie monster discovers that he is gluten intolerant. The aftermath was... Messy.",
    "Cookie Monster falls ill after big feast.",
    "Celebrity");
    articleRepository.save(article1);

    Article article2 = new Article(
    "You've Got No Fans",
    "13/08/2019",
    journalist1,
    "I'm the Weildstone Raider and I have a message for your team. You've. Got. No. Fans.",
    "An important message for fans of lesser clubs.",
    "Sport");
    articleRepository.save(article2);

    Article article3 = new Article(
    "The Earth IS flat.",
    "04/11/2019",
    journalist2,
    "Today I read an inspiring Buzzfeed article which PROVED that the Earth is flat. You need to know that the government is lying to you all, let's make Earth flat again! Plz follow me on insta.",
    "The Earth is flat and that's final",
    "Science");
    articleRepository.save(article3);

//    Article article4 = new Article(
//    "Life Change",
//    "29/10/2019",
//    journalist2,
//    "It's been a while coming but I might as well just say it... I am just too famous for you. Too gosh darn famous. You think all this beauty and intelijence comes for free? NO! I officially revoke your right to talk to me unless you're famous. GET ME BACK INTO THE LIMELIGHT DAMMIT!",
//    "An important notice for my fans.",
//    "Celebrity");
//    articleRepository.save(article4);
//
//    Article article5 = new Article(
//    "UPDATE: Slughorn",
//    "20/08/2019",
//    journalist3,
//    "Hello Pottermore fans! A young Voldemort once asked Slughorn what a horcrux is. It was not disclosed in the books, but the horcrux in questin was in fact a super top secret horcrux written in the depths of JavaScript. Only a true potions master/software developer like Slughorn would know the truth.",
//    "The secret horcrux.",
//    "Entertainment & Arts");
//    articleRepository.save(article5);

    Article article6 = new Article(
    "UPDATE: Harry Potter's father",
    "02/09/2019",
    journalist3,
    "Hello Pottermore fans! Harry's dad was not in fact James Potter, but in fact a clone of James Potter known as the mud-blood Enid Blyton",
    "Harry's dad was actually...",
    "Entertainment & Arts");
    articleRepository.save(article6);



    Article article9 = new Article(
    "How dare you!",
    "10/10/2019",
    journalist5,
    "You guys are trash bro, total f*****g trash",
    "Complaint against joke news.",
    "Technology");
    articleRepository.save(article9);

    Article article10 = new Article(
    "Regarding the previous article",
    "05/11/2019",
    journalist5,
    "JOKE'S ON YOU! I TRICKED YOU I DID, YOU GUYS REALLY ARE TRASH!!!!!",
    "Apologies",
    "Technology");
    articleRepository.save(article10);

//    Article article11 = new Article(
//    "A Great Disturbance",
//    "11/03/2019",
//    journalist6,
//    "I felt a great disturbance in the Force, as if millions of voices suddenly cried out in terror and were suddenly silenced. I fear something terrible has happened.",
//    "In my latest meditations I realised that something was not right.",
//    "Crime");
//    articleRepository.save(article11);

    Article article12 = new Article(
    "Journey's on Utapau.",
    "15/05/2019",
    journalist6,
    "Hello there!",
    "What I said to General Greivous when I confronted him.",
    "Celebrity");
    articleRepository.save(article12);

    Article article13 = new Article(
    "ESports are Real Sports too",
    "03/06/2019",
    journalist7,
    "Hi it's Jeff from the Overwatch team. Are ESorts sports too? No. A sport involves exercise. But if we tell enough parents that ESports ARE sports then think of all the video games we could sell MWA-HA-HA-HA-HA!!!!!",
    "The greatest conundrum of 2019, are ESports Sports?",
    "Sport");
    articleRepository.save(article13);

  }
}
