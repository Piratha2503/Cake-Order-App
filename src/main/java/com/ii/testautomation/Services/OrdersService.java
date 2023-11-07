package com.ii.testautomation.Services;

import com.ii.testautomation.CommonResponses.PaginatedContentResponse;
import com.ii.testautomation.DTO.Requests.OrdersRequest;
import com.ii.testautomation.DTO.Responses.OrdersResponse;
import com.ii.testautomation.DTO.Search.OrdersSearch;
import com.ii.testautomation.Entities.Orders;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface OrdersService {

    List<Orders> saveOrders(OrdersRequest ordersRequest);

    List<OrdersResponse> viewOrdersWithPagination(Pageable pageable, PaginatedContentResponse.Pagination pagination, OrdersSearch ordersSearch);

}
