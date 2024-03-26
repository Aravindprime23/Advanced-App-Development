package com.connect.connect.controller;

import com.connect.connect.dto.Adddto;
import com.connect.connect.service.Addservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/add")

@CrossOrigin(origins = "*")
public class Addcontroller {

    private final Addservice addservice;

    public Addcontroller(Addservice addservice) {
        this.addservice = addservice;
    }

    @GetMapping
    public ResponseEntity<List<Adddto>> getAllServices() {
        List<Adddto> services = addservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Adddto> getServiceByName(@PathVariable String name) {
        Adddto service = addservice.getServiceByName(name);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Adddto> createService(@RequestBody Adddto service) {
        Adddto createdService = addservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{name}")
    public ResponseEntity<Adddto> updateServiceByName(@PathVariable String name, @RequestBody Adddto updatedService) {
        Adddto updatedServiceDto = addservice.updateServiceByName(name, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
        addservice.deleteServiceByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}