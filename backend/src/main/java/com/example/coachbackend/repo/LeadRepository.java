package com.example.coachbackend.repo;

import com.example.coachbackend.domain.Lead;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeadRepository extends JpaRepository<Lead, Long> {}
