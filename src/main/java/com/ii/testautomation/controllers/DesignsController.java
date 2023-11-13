package com.ii.testautomation.controllers;

import com.ii.testautomation.DTO.Requests.DesignRequest;
import com.ii.testautomation.Services.DesignService;
import com.ii.testautomation.utils.EndpointURI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URISyntaxException;

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
    @PostMapping("images/{id}")
    public ResponseEntity<Object> uploadImage(@RequestParam(value = "image") MultipartFile imageFile, @PathVariable Long id) throws URISyntaxException, IOException {
        designService.uploadImage(id,imageFile);
        return ResponseEntity.ok("Ok");
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

}
