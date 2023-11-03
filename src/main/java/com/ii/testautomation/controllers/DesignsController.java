package com.ii.testautomation.controllers;

import com.ii.testautomation.DTO.Requests.DesignRequest;
import com.ii.testautomation.Services.DesignService;
import com.ii.testautomation.utils.EndpointURI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class DesignsController {
    @Autowired
    private DesignService designService;

    @PostMapping(EndpointURI.DESIGNS)
    public ResponseEntity<Object> saveDesigns(@RequestBody DesignRequest designRequest) {

        designService.saveDesigns(designRequest);
        return ResponseEntity.ok(designRequest);

    }
}
