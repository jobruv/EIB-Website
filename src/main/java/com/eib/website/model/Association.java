package com.eib.website.model;

import jakarta.persistence.*;

@Entity
@Table(name = "association")
public class Association {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="association_id")
    private Short id;

    @Column(name = "association_name", nullable=false)
    private String associationName;

    public Short getId(){
        return id;
    }

    public void setId(Short id){
        this.id = id;
    }

    public String getAssociationName(){
        return associationName;
    }

    public void setAssociationName(String associationName){
        this.associationName = associationName;
    }
}