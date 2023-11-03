package com.ii.testautomation.repositories;


import com.ii.testautomation.Entities.Designs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DesignRepository extends JpaRepository<Designs,Long> {
}
