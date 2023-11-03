package com.ii.testautomation.Services.impl;


import com.ii.testautomation.DTO.Requests.DesignRequest;
import com.ii.testautomation.DTO.Responses.DesignResponse;
import com.ii.testautomation.Entities.Designs;
import com.ii.testautomation.Services.DesignService;
import com.ii.testautomation.repositories.DesignRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.FileSystemNotFoundException;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

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

    @Override
    public void uploadImage(Long id, MultipartFile imageFile)  {
        Designs design = designRepository.findById(id).get();
       try{
           File file = new File("D:\\imgs\\"+imageFile.getOriginalFilename());
           imageFile.transferTo(file);
           design.setImgPath(file.getPath());
           designRepository.save(design);
       }catch (FileSystemNotFoundException | IOException e){
           System.out.println(e.toString());
       }
    }

    @Override
    public URL viewImage(Long id) throws MalformedURLException {
        Designs design = designRepository.findById(id).get();
        URL url = Path.of(design.getImgPath()).toUri().toURL();
        return url;



    }

    @Override
    public List<DesignResponse> viewAllImages() {
        List<DesignResponse> designResponseList = new ArrayList<>();
        List<Designs> designsList = designRepository.findAllByOrderByCreatedAt();
          for (Designs design : designsList){
              DesignResponse designResponse = new DesignResponse();
              BeanUtils.copyProperties(design,designResponse);
              if (design.getImgPath() != null)
              designResponse.setImgPath(Path.of(design.getImgPath()).toString());
              designResponseList.add(designResponse);
          }
        return designResponseList;
    }
}
