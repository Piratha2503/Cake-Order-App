package com.ii.testautomation.Services;

import com.ii.testautomation.DTO.Requests.OrdersRequest;
import com.ii.testautomation.Entities.Orders;

import java.util.List;

public interface OrdersService {

    List<Orders> saveOrders(OrdersRequest ordersRequest);
}
