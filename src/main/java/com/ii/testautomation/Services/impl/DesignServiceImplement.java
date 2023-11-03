package com.ii.testautomation.Services.impl;


import com.ii.testautomation.DTO.Requests.DesignRequest;
import com.ii.testautomation.DTO.Responses.DesignResponse;
import com.ii.testautomation.Entities.Designs;
import com.ii.testautomation.Services.DesignService;
import com.ii.testautomation.repositories.DesignRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.FileSystemNotFoundException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

@PropertySource("classpath:application.properties")
@Service
public class DesignServiceImplement implements DesignService {
    @Autowired
    private DesignRepository designRepository;

    @Value("${reports.file.save.path}")
    private String imagePath;

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
           File file = new File(imagePath+imageFile.getOriginalFilename());
           imageFile.transferTo(file);
           design.setImgPath(file.getPath());
           design.setName(imageFile.getOriginalFilename());
           design.setImgUrl("http://localhost:8095/cake-orders/img/"+imageFile.getOriginalFilename());
           designRepository.save(design);
       }catch (FileSystemNotFoundException | IOException e){
           System.out.println(e.toString());
       }
    }

    @Override
    public byte[] viewImage(String name) throws IOException {
        Designs design = designRepository.findByName(name).get();
        byte[] imgBytes = Files.readAllBytes((Path.of(design.getImgPath())));
        return imgBytes;



    }

    @Override
    public List<DesignResponse> viewAllImages() throws IOException {
        List<DesignResponse> designResponseList = new ArrayList<>();
        List<Designs> designsList = designRepository.findAllByOrderByCreatedAt();
          for (Designs design : designsList){
              DesignResponse designResponse = new DesignResponse();
              BeanUtils.copyProperties(design,designResponse);
              if (design.getImgPath() != null) {
                  //Path newPath = Path.of("http://localhost:8095/cake-orders/img/" + design.getName());
                  Path path = new File(imagePath + design.getName()).toPath();
                  byte[] imgBytes = Files.readAllBytes(path);
                  designResponseList.add(designResponse);
              }
          }
        return designResponseList;
    }
}
