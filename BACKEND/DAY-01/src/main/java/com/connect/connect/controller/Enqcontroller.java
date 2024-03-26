package com.connect.connect.controller;

import com.connect.connect.dto.Enqdto;
import com.connect.connect.service.Enqservice;

import jakarta.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reg")

@CrossOrigin(origins = "*")
public class Enqcontroller {

    private final Enqservice enqservice;

    public Enqcontroller(Enqservice enqservice) {
        this.enqservice = enqservice;
    }

    @GetMapping
    public ResponseEntity<List<Enqdto>> getAllServices() {
        List<Enqdto> services = enqservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Enqdto> getServiceByFirstname(@PathVariable String firstname) {
        Enqdto service = enqservice.getServiceByFirstname(firstname);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Enqdto> createService(@RequestBody Enqdto service) {
        Enqdto createdService = enqservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }
    @Transactional
    @PutMapping("/{firstname}")
    public ResponseEntity<Enqdto> updateServiceByFirstname(@PathVariable String firstname, @RequestBody Enqdto updatedService) {
        Enqdto updatedServiceDto = enqservice.updateServiceByFirstname(firstname, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @Transactional
    @DeleteMapping("/{firstname}")
    public ResponseEntity<Void> deleteServiceByfirstname(@PathVariable String firstname) {
        enqservice.deleteServiceByFirstname(firstname);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}