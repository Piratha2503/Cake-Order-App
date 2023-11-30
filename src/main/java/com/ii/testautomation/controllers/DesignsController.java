package com.ii.testautomation.controllers;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ii.testautomation.CommonResponses.ContentResponses;
import com.ii.testautomation.CommonResponses.Test;
import com.ii.testautomation.DTO.Requests.DesignRequest;
import com.ii.testautomation.Services.DesignService;
import com.ii.testautomation.enums.ResponsingStatus;
import com.ii.testautomation.utils.EndpointURI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin
public class DesignsController {
    @Autowired
    private DesignService designService;
    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping(EndpointURI.DESIGNS)
    public ResponseEntity<Object> saveDesigns(@RequestBody DesignRequest designRequest) {
        return ResponseEntity.ok(new ContentResponses<>(ResponsingStatus.SUCCESS.getStatus(),designService.saveDesigns(designRequest),"Success","20000","Saved"));

    }
    @PostMapping("images/{id}")
    public <T> ResponseEntity uploadImage(@RequestParam(value = "file") MultipartFile imageFile,@RequestParam String object, @PathVariable Long id) throws URISyntaxException, IOException, NoSuchElementException,NullPointerException, MultipartException, JsonParseException {
        DesignRequest designRequest = objectMapper.readValue(object, DesignRequest.class);

           // designService.uploadImage(id, imageFile);
            return ResponseEntity.ok(imageFile.getContentType()+designRequest.getName());

    }

    @GetMapping("img")
    public ResponseEntity<Object> viewAllImage() throws IOException {
            return ResponseEntity.ok(designService.viewAllImages());
    }
    @GetMapping("img/{id}")
    public ResponseEntity<Object> viewImage(@PathVariable Long id) throws IOException {
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG)
                .body(designService.viewImage(id));
    }
    @GetMapping("imgcheck")
    public ResponseEntity<Object> checkImage(){
    return ResponseEntity.ok(new Test(true));
    }

}
