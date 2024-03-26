package com.connect.connect.service;

import com.connect.connect.dto.Enqdto;
import com.connect.connect.entity.Enqentity;
import com.connect.connect.mapper.Enqmapper;
import com.connect.connect.repository.Enqrepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Enqservice {

    private final Enqrepo enqrepo;

    public Enqservice(Enqrepo enqrepo) {
        this.enqrepo = enqrepo;
    }

    public List<Enqdto> getAllServices() {
        List<Enqentity> services = enqrepo.findAll();
        return services.stream()
                .map(Enqmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Enqdto getServiceByFirstname(String firstname) {
        Enqentity enqentity = enqrepo.findByFirstname(firstname);
        return Enqmapper.maptoServicedto(enqentity);
    }

    public Enqdto createService(Enqdto servicedto) {
        Enqentity enqentity = Enqmapper.maptoServiceentity(servicedto);
        enqentity = enqrepo.save(enqentity);
        return Enqmapper.maptoServicedto(enqentity);
    }

    public Enqdto updateServiceByFirstname(String firstname, Enqdto updatedServicedto) {
        Enqentity existingService = enqrepo.findByFirstname(firstname);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setFirstname(updatedServicedto.getFirstname());
            existingService.setLastname(updatedServicedto.getLastname());
            existingService.setFathername(updatedServicedto.getFathername());
            existingService.setMothername(updatedServicedto.getMothername());
            existingService.setAge(updatedServicedto.getAge());
            existingService.setPhonenumber(updatedServicedto.getPhonenumber());
            existingService.setGender(updatedServicedto.getGender());
            existingService.setAddress(updatedServicedto.getAddress());
           
            
            existingService = enqrepo.save(existingService);
            return Enqmapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    public void deleteServiceByFirstname(String firstname) {
        enqrepo.deleteByFirstname(firstname);
    }
}