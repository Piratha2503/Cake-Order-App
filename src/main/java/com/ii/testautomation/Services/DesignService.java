package com.ii.testautomation.Services;


import com.ii.testautomation.DTO.Requests.DesignRequest;
import com.ii.testautomation.DTO.Responses.DesignResponse;
import com.ii.testautomation.DTO.Responses.OrdersResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.List;

public interface DesignService {

    void saveDesigns(DesignRequest designRequest);

    void uploadImage(Long id, MultipartFile imageFile) throws URISyntaxException, IOException;

    URL viewImage(Long id) throws MalformedURLException;

    List<DesignResponse> viewAllImages();
}