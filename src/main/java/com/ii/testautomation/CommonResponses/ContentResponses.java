package com.ii.testautomation.CommonResponses;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;
@Getter
@Setter
public class ContentResponses<T> extends BaseResponse{

    private Map<String, T> result = new HashMap<>();

    public ContentResponses(String key, T dto, String status, String statusCode, String message)
    {
        super(status, statusCode, message);
        result.put(key, dto);
    }





}
