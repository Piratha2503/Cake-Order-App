package com.ii.testautomation.DTO.Requests;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class OrdersRequest {
    private Long id;
    private String orderId;
    private Long deliveryId;
    private List<Long> designsIdList;

}
