package com.ii.testautomation.CommonResponses;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BaseResponse {

    private String status;
    private String code;
    private String message;

    public BaseResponse(String status, String code, String message){
        this.status = status;
        this.code = code;
        this.message = message;
    }



}
