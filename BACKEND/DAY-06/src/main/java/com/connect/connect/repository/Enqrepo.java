package com.connect.connect.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.connect.connect.entity.Enqentity;

@Repository
public interface Enqrepo extends JpaRepository<Enqentity, Long> {
    Enqentity findByFirstname(String firstname);
    void deleteByFirstname(String firstname);
    // Other methods...
}