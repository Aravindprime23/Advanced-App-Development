package com.connect.connect.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.connect.connect.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}