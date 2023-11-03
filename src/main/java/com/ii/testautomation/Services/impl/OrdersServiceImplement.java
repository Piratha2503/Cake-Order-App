package com.ii.testautomation.Services.impl;

import com.ii.testautomation.DTO.Requests.OrdersRequest;
import com.ii.testautomation.Entities.Designs;
import com.ii.testautomation.Entities.Orders;
import com.ii.testautomation.Services.OrdersService;
import com.ii.testautomation.repositories.DesignRepository;
import com.ii.testautomation.repositories.OrdersRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrdersServiceImplement implements OrdersService {

    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private DesignRepository designRepository;

    @Override
    public List<Orders> saveOrders(OrdersRequest ordersRequest) {
        Orders orders = new Orders();
        BeanUtils.copyProperties(ordersRequest,orders);
        List<Designs> designsList = new ArrayList<>();
        for (Long designId: ordersRequest.getDesignsIdList()){
            Designs designs = designRepository.findById(designId).get();
            designsList.add(designs);
        }
        orders.setDesignsList(designsList);
        List<Orders> ordersList = new ArrayList<>();
        ordersList.add(orders);
        ordersRepository.save(orders);
        return ordersList;
    }


}
