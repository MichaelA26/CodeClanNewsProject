package com.codeclan.example.newsbackend.models;

import java.util.ArrayList;

public class Journalist {

    private Long id;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private ArrayList<Article> articles;
    private Boolean employed;

    public Journalist(String firstName, String lastName, String phoneNumber, Boolean employed) {
        this.firstName =firstName;
        this.lastName =lastName;
        this.phoneNumber =phoneNumber;
        this.articles = new ArrayList<>();
        this.employed =employed;
    }

    public Journalist() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public ArrayList<Article> getArticles() {
        return articles;
    }

    public void setArticles(ArrayList<Article> articles) {
        this.articles = articles;
    }

    public Boolean getEmployed() {
        return employed;
    }

    public void setEmployed(Boolean employed) {
        this.employed = employed;
    }

}
