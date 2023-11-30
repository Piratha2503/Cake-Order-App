package com.ii.testautomation.CommonResponses;

import com.fasterxml.jackson.core.JsonParseException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.NoSuchElementException;

@ControllerAdvice
public class ExceptionHandling {

    @ExceptionHandler
    public ResponseEntity NullPointerException(NullPointerException nullPointerException){
        return ResponseEntity.status(500).body("Something Null Received in properties");
    }
    @ExceptionHandler
    public ResponseEntity NoSuchElementException(NoSuchElementException noSuchElementException){
        return ResponseEntity.status(500).body("There is No Such Element for your Given Id");
    }
    @ExceptionHandler
    public ResponseEntity JsonParseException(JsonParseException jsonParseException){
        return ResponseEntity.status(500).body("Json type Error");
    }




}
