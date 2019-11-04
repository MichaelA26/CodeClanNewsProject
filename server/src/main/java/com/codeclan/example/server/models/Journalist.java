package com.codeclan.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="journalists")
public class Journalist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="phone_number")
    private String phoneNumber;

    @JsonIgnoreProperties("journalist")
    @OneToMany(mappedBy = "journalist", fetch = FetchType.LAZY)
    private List<Article> articles;

    @Column(name="employed")
    private Boolean employed;

    public Journalist(String firstName, String lastName, String phoneNumber) {
        this.firstName =firstName;
        this.lastName =lastName;
        this.phoneNumber =phoneNumber;
        this.articles = new ArrayList<>();
        this.employed = false;
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

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }

    public Boolean getEmployed() {
        return employed;
    }

    public void setEmployed(Boolean employed) {
        this.employed = employed;
    }

}
