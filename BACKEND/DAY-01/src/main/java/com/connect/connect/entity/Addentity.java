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
@Table(name = "Academytable")
public class Addentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Name",nullable = false)
    private String name;

    @Column(name = "Chessacademy",nullable = false)
    private String chessacademyname;

    @Column(name = "Phonenumber",nullable = false)
    private long phonenumber;
    @Column(name = "Email",nullable = false)
    private String email;



}