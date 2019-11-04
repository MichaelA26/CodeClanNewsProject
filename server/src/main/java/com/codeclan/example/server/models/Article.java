package com.codeclan.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="headline")
    private String headline;

    @Column(name="date")
    private String date;

    @JsonIgnoreProperties("articles")
    @ManyToOne
    @JoinColumn(name="journalist_id", nullable = false)
    private Journalist journalist;

    @Column(name="story")
    private String story;

    @Column(name="summary")
    private String summary;

    @Column(name="category")
    private String category;

    public Article(String headline, String date, Journalist journalist, String story, String summary, String category) {
        this.headline = headline;
        this.date = date;
        this.journalist = journalist;
        this.story = story;
        this.summary = summary;
        this.category = category;
    }

    public Article() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Journalist getJournalist() {
        return journalist;
    }

    public void setJournalist(Journalist journalist) {
        this.journalist = journalist;
    }

    public String getStory() {
        return story;
    }

    public void setStory(String story) {
        this.story = story;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
