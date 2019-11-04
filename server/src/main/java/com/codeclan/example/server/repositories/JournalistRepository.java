package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Journalist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface JournalistRepository extends JpaRepository<Journalist, Long> {
}
