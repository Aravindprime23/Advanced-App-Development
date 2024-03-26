package com.connect.connect.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.connect.connect.entity.Addentity;

@Repository
public interface Addrepo extends JpaRepository<Addentity, Long> {
    Addentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}