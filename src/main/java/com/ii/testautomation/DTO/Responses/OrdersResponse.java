package com.ii.testautomation.DTO.Responses;

import com.ii.testautomation.Entities.Delivery;
import com.ii.testautomation.Entities.Designs;

import java.util.List;

public class OrdersResponse {
    private Long id;
    private String orderId;
    private Delivery delivery;
    private List<Designs> designsList;
}
