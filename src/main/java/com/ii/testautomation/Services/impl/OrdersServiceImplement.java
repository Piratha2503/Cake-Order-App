package com.ii.testautomation.Services.impl;
import com.ii.testautomation.CommonResponses.PaginatedContentResponse;
import com.ii.testautomation.DTO.Requests.OrdersRequest;
import com.ii.testautomation.DTO.Responses.DesignResponse;
import com.ii.testautomation.DTO.Responses.OrdersResponse;
import com.ii.testautomation.DTO.Search.OrdersSearch;
import com.ii.testautomation.Entities.Designs;
import com.ii.testautomation.Entities.Orders;
import com.ii.testautomation.Entities.QOrders;
import com.ii.testautomation.Services.OrdersService;
import com.ii.testautomation.repositories.DesignRepository;
import com.ii.testautomation.repositories.OrdersRepository;
import com.ii.testautomation.utils.Utils;
import com.querydsl.core.BooleanBuilder;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    @Override
    public List<OrdersResponse> viewOrdersWithPagination(Pageable pageable, PaginatedContentResponse.Pagination pagination, OrdersSearch ordersSearch) {
        String order = ordersSearch.getOrderId();
        BooleanBuilder booleanBuilder = new BooleanBuilder();
        if (Utils.isNotNullAndEmpty(order)){
            booleanBuilder.and(QOrders.orders.orderId.containsIgnoreCase(order));
        }

        List<OrdersResponse> ordersResponseList = new ArrayList<>();
        Page<Orders> ordersPage = ordersRepository.findAll(booleanBuilder,pageable);
        pagination.setTotalPages(ordersPage.getTotalPages());
        pagination.setTotalRecords(ordersPage.getTotalElements());
        for (Orders orders : ordersPage){
            OrdersResponse ordersResponse = new OrdersResponse();
            BeanUtils.copyProperties(orders,ordersResponse);
            ordersResponseList.add(ordersResponse);
        }
        return ordersResponseList;
    }


}
