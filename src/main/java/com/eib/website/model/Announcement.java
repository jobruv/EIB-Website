package com.eib.website.model;

import jakarta.persistence.*;

@Entity
@Table(name="announcements")
public class Announcement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="announcement_id")
    private Integer id;

    @Column(nullable = false)
    private String title;

    @Column(nullable=false)
    private String description;

    @ManyToOne(fetch=FetchType.LAZY,optional = false)
    @JoinColumn(name="association_id",nullable=false)
    private Association association;

    @ManyToOne(fetch=FetchType.LAZY,optional = false)
    @JoinColumn(name="category_id",nullable=false)
    private Category category;

    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id=id;
    }
    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title=title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Association getAssociation() {
        return association;
    }
    public void setAssociation(Association association) {
        this.association = association;
    }
    public Category getCategory() {
        return category;
    }
    public void setCategory(Category category) {
        this.category = category;
    }
}
