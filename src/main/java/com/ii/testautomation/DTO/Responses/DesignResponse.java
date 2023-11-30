package com.ii.testautomation.DTO.Responses;
import lombok.Getter;
import lombok.Setter;

import java.net.URL;

@Getter
@Setter
public class DesignResponse {
    private Long id;
    private String name;
    private String imgUrl;
    private Double price;
    private String view;
    private String description;
}
