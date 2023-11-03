package com.ii.testautomation.repositories;


import com.ii.testautomation.Entities.Designs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DesignRepository extends JpaRepository<Designs,Long> {
       List<Designs> findAllByOrderByCreatedAt();
}
