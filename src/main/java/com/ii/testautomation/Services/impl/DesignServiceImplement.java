package com.ii.testautomation.Services.impl;


import com.ii.testautomation.DTO.Requests.DesignRequest;
import com.ii.testautomation.Entities.Designs;
import com.ii.testautomation.Services.DesignService;
import com.ii.testautomation.repositories.DesignRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DesignServiceImplement implements DesignService {
    @Autowired
    private DesignRepository designRepository;


    @Override
    public void saveDesigns(DesignRequest designRequest) {
        Designs designs = new Designs();
        BeanUtils.copyProperties(designRequest,designs);
        designRepository.save(designs);
    }
}
