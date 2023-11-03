package com.ii.testautomation.repositories;


import com.ii.testautomation.Entities.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepository extends JpaRepository<Orders,Long> {

}
