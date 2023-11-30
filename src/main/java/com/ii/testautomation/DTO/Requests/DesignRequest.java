package com.ii.testautomation.DTO.Requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DesignRequest {
    private Long id;
    private String name;
    private Double price;
    private String view;
    private String description;
}
