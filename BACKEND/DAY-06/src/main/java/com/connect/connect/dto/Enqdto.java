package com.connect.connect.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Enqdto {
    private Long id;
    private String firstname;
    private String lastname;
    private String fathername;
    private String mothername;
    private int age;
    private long phonenumber;
    private String gender;
    private String address;


}