package com.ii.testautomation.Entities;

import com.ii.testautomation.utils.DateAudit;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class Orders extends DateAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String orderId;
    @OneToOne
    @JoinColumn(name = "delivery_id")
    private Delivery delivery;
    @ManyToMany
    @JoinColumn(name = "designs_id",nullable = false)
    private List<Designs> designsList;

}