package com.ii.testautomation.Entities;

import com.ii.testautomation.utils.Constants;
import com.ii.testautomation.utils.DateAudit;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.net.URL;

@Entity
@Getter
@Setter
public class Designs extends DateAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(length = 2555)
    private String imgPath;
    private String imgUrl;
    private String view = Constants.Products.toString();
    private Double price;

}