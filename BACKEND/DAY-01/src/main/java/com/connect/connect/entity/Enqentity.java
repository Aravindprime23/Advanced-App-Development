package com.connect.connect.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "registertable")
public class Enqentity {
    public Enqentity(Long id2, String firstname2, String lastname2, String fathername2, String mothername2, int age2,
            int phonenumber2, int gender2, String address2) {
        //TODO Auto-generated constructor stub
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Firstname",nullable = false)
    private String firstname;

    @Column(name = "Lastname",nullable = false)
    private String lastname;

    @Column(name = "Fathername",nullable = false)
    private String fathername;

    @Column(name = "Mothername",nullable = false)
    private String mothername;

    @Column(name = "Age",nullable = false)
    private int age;

    @Column(name = "Phonenumber",nullable = false)
    private long phonenumber;

    @Column(name = "Gender",nullable = false)
    private String gender;

    @Column(name = "Address",nullable = false)
    private String address;

}