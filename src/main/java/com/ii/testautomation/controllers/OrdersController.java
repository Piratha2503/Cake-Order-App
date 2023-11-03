package com.ii.testautomation.controllers;

import com.ii.testautomation.DTO.Requests.OrdersRequest;
import com.ii.testautomation.Services.OrdersService;
import com.ii.testautomation.utils.EndpointURI;
import com.ii.testautomation.utils.StatusCodeBundle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class OrdersController {
    @Autowired
    private OrdersService ordersService;
    @Autowired
    private StatusCodeBundle statusCodeBundle;

    @PostMapping(EndpointURI.ORDERS)
    public ResponseEntity<Object> saveOrders(@RequestBody OrdersRequest ordersRequest) {

        return ResponseEntity.ok(ordersService.saveOrders(ordersRequest));

    }
}
