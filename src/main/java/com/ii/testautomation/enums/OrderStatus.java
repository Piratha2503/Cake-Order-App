package com.ii.testautomation.enums;

import lombok.Getter;

@Getter
public enum OrderStatus {

    DELIVERED("Delivered"), PROGRESS("Progress"), CANCELLED("Cancelled"), RETURNED("Returned");

    private String status;

    private OrderStatus(String status) {
        this.status = status;
    }

    public static OrderStatus getStatus(String status) {
        for (OrderStatus orderStatus : values()){
            if (orderStatus.getStatus().equals(status)){
                return orderStatus;
            }
        }
        throw new AssertionError("Request status not found for given status [status: " + status + "]");
    }
}
