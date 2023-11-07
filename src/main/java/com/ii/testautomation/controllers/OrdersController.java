package com.ii.testautomation.controllers;

import com.ii.testautomation.CommonResponses.PaginatedContentResponse;
import com.ii.testautomation.DTO.Requests.OrdersRequest;
import com.ii.testautomation.DTO.Search.OrdersSearch;
import com.ii.testautomation.Services.OrdersService;
import com.ii.testautomation.enums.ResponsingStatus;
import com.ii.testautomation.utils.EndpointURI;
import com.ii.testautomation.utils.StatusCodeBundle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping(EndpointURI.ORDERS)
    public ResponseEntity<Object> viewAllOrders(@RequestParam(name = "page") int page,
                                                @RequestParam(name = "size") int size,
                                                @RequestParam(name = "direction") String direction,
                                                @RequestParam(name = "sortField") String sortField,
                                                OrdersSearch ordersSearch) {

        Pageable pageable = PageRequest.of(page, size, Sort.Direction.valueOf(direction), sortField);
        PaginatedContentResponse.Pagination pagination= new PaginatedContentResponse.Pagination(page,size,0,0L);
        return ResponseEntity.ok(new PaginatedContentResponse<>("Orders",ordersService.viewOrdersWithPagination(pageable,pagination,ordersSearch), ResponsingStatus.SUCCESS.getStatus(), statusCodeBundle.getCommonSuccessCode(), "Orders View Successfully",pagination));

    }


}
