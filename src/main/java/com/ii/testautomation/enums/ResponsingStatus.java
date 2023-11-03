package com.ii.testautomation.enums;

import lombok.Getter;

@Getter
public enum ResponsingStatus {
    SUCCESS("Success");

    private String status;

    ResponsingStatus(String status) {
        this.status =status;
    }

    public static ResponsingStatus getStatus(String status) {
        for (ResponsingStatus responseStatus : values()){
            if (responseStatus.status.equals(status))
                return responseStatus;
        }
        throw new AssertionError("Request status not found for given status [status: " + status + "]");
    }
}
