package com.ii.testautomation.DTO.Responses;

import com.ii.testautomation.Entities.Delivery;
import com.ii.testautomation.Entities.Designs;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class OrdersResponse {
    private Long id;
    private String orderId;
    private Delivery delivery;
    private List<Designs> designsList;
}
