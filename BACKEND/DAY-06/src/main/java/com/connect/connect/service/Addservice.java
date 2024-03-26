package com.connect.connect.service;

import com.connect.connect.dto.Adddto;
import com.connect.connect.entity.Addentity;
import com.connect.connect.mapper.Addmapper;
import com.connect.connect.repository.Addrepo;

import jakarta.transaction.Transactional;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Addservice {

    private final Addrepo addrepo;

    public Addservice(Addrepo addrepo) {
        this.addrepo = addrepo;
    }

    public List<Adddto> getAllServices() {
        List<Addentity> services = addrepo.findAll();
        return services.stream()
                .map(Addmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Adddto getServiceByName(String name) {
        Addentity addentity = addrepo.findByName(name);
        return Addmapper.maptoServicedto(addentity);
    }

    public Adddto createService(Adddto servicedto) {
        Addentity addentity = Addmapper.maptoServiceentity(servicedto);
        addentity = addrepo.save(addentity);
        return Addmapper.maptoServicedto(addentity);
    }
    @Transactional

    public Adddto updateServiceByName(String name, Adddto updatedServicedto) {
        Addentity existingService = addrepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setName(updatedServicedto.getName());
            existingService.setChessacademyname(updatedServicedto.getChessacademyname());
            existingService.setPhonenumber(updatedServicedto.getPhonenumber());
            existingService.setEmail(updatedServicedto.getEmail());
           ;
            
            existingService = addrepo.save(existingService);
            return Addmapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }
@Transactional
    public void deleteServiceByName(String name) {
        addrepo.deleteByName(name);
    }
}