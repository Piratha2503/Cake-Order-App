package com.ii.testautomation.Services;


import com.ii.testautomation.DTO.Requests.DesignRequest;
import com.ii.testautomation.DTO.Responses.DesignResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.util.List;

public interface DesignService {

    void saveDesigns(DesignRequest designRequest);

    void uploadImage(Long id, MultipartFile imageFile) throws URISyntaxException, IOException;

    byte[] viewImage(String name) throws IOException;

    List<DesignResponse> viewAllImages() throws IOException;
}