package com.ii.testautomation.Services;


import com.ii.testautomation.DTO.Requests.DesignRequest;
import com.ii.testautomation.DTO.Responses.DesignResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

public interface DesignService {

    DesignResponse saveDesigns(DesignRequest designRequest);

    void uploadImage(Long id, MultipartFile imageFile) throws URISyntaxException, IOException;

    byte[] viewImage(Long id) throws IOException;

    List<DesignResponse> viewAllImages() throws IOException;
}