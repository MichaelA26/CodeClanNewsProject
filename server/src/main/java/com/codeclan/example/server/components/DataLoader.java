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
            "2019-11-04",
            journalist1,
            "After partaking in a glorious cookie bonanza, poor ol' cookie monster discovers that he is gluten intolerant. The aftermath was... Messy.",
            "Cookie Monster falls ill after big feast.",
            "Celebrity");
    articleRepository.save(article1);

    Article article2 = new Article(
            "You've Got No Fans",
            "2019-08-13",
            journalist1,
            "I'm the Weildstone Raider and I have a message for your team. You've. Got. No. Fans.",
            "An important message for fans of lesser clubs.",
            "Sport");
    articleRepository.save(article2);

    Article article3 = new Article(
            "The Earth IS flat.",
            "2019-11-04",
            journalist2,
            "Today I read an inspiring Buzzfeed article which PROVED that the Earth is flat. You need to know that the government is lying to you all, let's make Earth flat again! Plz follow me on insta.",
            "The Earth is flat and that's final",
            "Science");
    articleRepository.save(article3);

    Article article4 = new Article(
            "Life Change",
            "2019-10-29",
            journalist2,
            "It's been a while coming but I might as well just say it... I am just too famous for you. Too gosh darn famous. You think all this beauty and intelijence comes for free? NO! I officially revoke your right to talk to me unless you're famous.",
            "An important notice for my fans.",
            "Celebrity");
    articleRepository.save(article4);

    Article article5 = new Article(
            "UPDATE: Slughorn",
            "2019-08-20",
            journalist3,
            "Hello Pottermore fans! A young Voldemort once asked Slughorn what a horcrux is. The horcrux in question was actually a top secret horcrux written JavaScript. Only a true potions master/software developer like Slughorn would know the truth.",
            "The secret horcrux.",
            "Entertainment & Arts");
    articleRepository.save(article5);

    Article article6 = new Article(
            "UPDATE: Harry Potter's father",
            "2019-09-02",
            journalist3,
            "Hello Pottermore fans! Harry's dad was not in fact James Potter, but in fact a clone of James Potter known as the mud-blood Enid Blyton",
            "Harry's dad was actually...",
            "Entertainment & Arts");
    articleRepository.save(article6);

    Article article7 = new Article(
            "Soup-reme Court goes pot-ty",
            "2019-08-27",
            journalist4,
            "The Supreme Court today banned all forms of soup, following a spate of soup-related crime. Since July, there have been 43 separate soup-related crimes. It all began with the Battle of Minestrone in Seattle, in which 12 people were killed.",
            "USA's top judges ban soup.",
            "Crime");
    articleRepository.save(article7);

    Article article8 = new Article(
            "Aldi sues Soup-reme Court",
            "2019-09-02",
            journalist4,
            "After the Soup-reme Court initiated the soup ban, they legally changed the name of the Supreme Court to 'The Soup-reme Court'. Aldi's own brand soup (Soup-reme) filed a lawsuit to try and bring the name of the 'Soup-Reme Court' back to 'Soup-reme' soup.",
            "Spicy court case rages on as Aldi seeks name reclamation",
            "Crime");
    articleRepository.save(article8);

    Article article9 = new Article(
            "How dare you!",
            "2019-10-10",
            journalist5,
            "You guys are trash bro, total f*****g trash",
            "Complaint against joke news.",
            "Technology");
    articleRepository.save(article9);

    Article article10 = new Article(
            "Regarding the previous article",
            "2019-11-05",
            journalist5,
            "JOKE'S ON YOU! I TRICKED YOU I DID, YOU GUYS REALLY ARE TRASH!!!!!",
            "Apologies",
            "Technology");
    articleRepository.save(article10);

    Article article11 = new Article(
            "A Great Disturbance",
            "2019-03-11",
            journalist6,
            "I felt a great disturbance in the Force, as if millions of voices suddenly cried out in terror and were suddenly silenced.",
            "Something terrible has happened.",
            "Crime");
    articleRepository.save(article11);

    Article article12 = new Article(
            "Journey's on Utapau.",
            "2019-05-15",
            journalist6,
            "Hello there!",
            "What I said to General Greivous when I confronted him.",
            "Celebrity");
    articleRepository.save(article12);

    Article article13 = new Article(
            "ESports are Real Sports too",
            "2019-06-03",
            journalist7,
            "Hi it's Jeff from the Overwatch team. Are ESorts sports too? No. A sport involves exercise. But if we tell enough parents that ESports ARE sports then think of all the video games we could sell MWA-HA-HA-HA-HA!!!!!",
            "The greatest conundrum of 2019, are ESports Sports?",
            "Sport");
    articleRepository.save(article13);

    Article article14 = new Article(
            "ESports are Real Sports too 2",
            "2019-06-19",
            journalist7,
            "A quick update regarding my article 'ESports are Real Sports too?'. We are developing a game which simulates sports, to further the illusion of exercise!",
            "The second greatest conundrum of 2019, are ESports Sports 2?",
            "Sport");
    articleRepository.save(article14);

    Article article15 = new Article(
            "Thinking Ahead to Hogmanay Without Me",
            "2019-04-01",
            journalist8,
            "Imagine a time, where Hogmanay did not star me. I was beamed into nearly every house across the country as the bells rang to signal another trip around the Sun. Well this is about to happen, on the eve of 2020! It will be worse now.",
            "Dame Jackie Bird reflects on her time hosting every Hogmanay in living memory.",
            "Entertainment & Arts");
    articleRepository.save(article15);

    Article article16 = new Article(
            "My Last Article was not an April Fool's Joke",
            "2019-10-31",
            journalist8,
            "I failed to realise that my last article was published on April Fool's day. I am not impressed that nobody has raised this point until now that this was not fake news. It's as if I passed on like a fart in the wind.",
            "Jackie clears up some confusion regarding an article published earlier this year.",
            "Entertainment & Arts");
    articleRepository.save(article16);

    Article article17 = new Article(
            "The Fellowship is Formed!",
            "2019-03-14",
            journalist9,
            "A coucil of warriors were summoned to Rivendell to discuss how to defeat Sauron. One warrior was to be picked to carry the of the One Ring to Mordor. But instead of selecting a brave, handsome, humble, heroic leader like me, they chose Frodo.",
            "The Dark Lord Sauron has waged war on Middle Earth, the realm of the living retaliate.",
            "Crime");
    articleRepository.save(article17);

    Article article18 = new Article(
            "Earth May Be Flat. Middle Earth However...",
            "2019-07-24",
            journalist9,
            "As it transpires, Middle Earth is fictional. But given how even fantastical creatures can operate as if a force of gravity is acting upon them, Gandalf the Grey has deduces that Middle Earth is in fact spherical! As all worlds are. Even real ones he says.",
            "Some commentary on the recent phenomenon of 'Flat-Earthers'.",
            "Science");
    articleRepository.save(article18);

  }
}
