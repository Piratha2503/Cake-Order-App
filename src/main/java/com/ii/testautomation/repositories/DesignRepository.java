package com.ii.testautomation.repositories;


import com.ii.testautomation.Entities.Designs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DesignRepository extends JpaRepository<Designs,Long> {
   List<Designs> findAllByOrderByCreatedAt();

    Optional<Designs> findByName(String name);

    Designs findFirstByOrderByCreatedAtDesc();
}
