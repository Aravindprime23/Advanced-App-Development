package com.connect.connect.mapper;

import com.connect.connect.dto.Enqdto;
import com.connect.connect.entity.Enqentity;

public class Enqmapper {

    public static Enqdto maptoServicedto(Enqentity enqentity) {
        // Implement the mapping logic
        return new Enqdto(
                enqentity.getId(),
                enqentity.getFirstname(),
                enqentity.getLastname(),
                enqentity.getFathername(),
                enqentity.getMothername(),
                enqentity.getAge(),
                enqentity.getPhonenumber(),
                enqentity.getGender(),
                enqentity.getAddress()

                
        );
    }

    public static Enqentity maptoServiceentity(Enqdto enqdto) {
        // Implement the mapping logic
        return new Enqentity(
                enqdto.getId(),
                enqdto.getFirstname(),
                enqdto.getLastname(),
                enqdto.getFathername(),
                enqdto.getMothername(),
                enqdto.getAge(),
                enqdto.getPhonenumber(),
                enqdto.getGender(),
                enqdto.getAddress()
            
        );
    }
}