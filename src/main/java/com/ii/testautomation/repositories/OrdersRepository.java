package com.ii.testautomation.repositories;


import com.ii.testautomation.Entities.Orders;
import com.querydsl.core.BooleanBuilder;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders,Long>, QuerydslPredicateExecutor<Orders> {

}
