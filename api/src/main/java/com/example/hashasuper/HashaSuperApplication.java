package com.example.hashasuper;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class HashaSuperApplication {

    public static void main(String[] args) {
        SpringApplication.run(HashaSuperApplication.class, args);
    }

}
