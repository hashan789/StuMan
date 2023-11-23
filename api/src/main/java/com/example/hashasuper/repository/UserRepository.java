package com.example.hashasuper.repository;

import com.example.hashasuper.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
