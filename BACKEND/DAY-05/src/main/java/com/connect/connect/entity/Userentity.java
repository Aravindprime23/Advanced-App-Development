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
@Table(name = "usertable")
public class Userentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "Email",nullable = false)
    private String email;

    @Column(name = "Password",nullable = false)
    private String password;

    @Column(name = "ConfirmPassword",nullable = false)
    private String ConfirmPassword;

    // @Column(name = "Gender",nullable = false)
    // private String gender;

    // @Column(name = "DOB",nullable = false)
    // private String dateOfBirth;

}