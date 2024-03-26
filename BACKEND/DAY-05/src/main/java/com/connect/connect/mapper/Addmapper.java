package com.connect.connect.mapper;

import com.connect.connect.dto.Adddto;
import com.connect.connect.entity.Addentity;

public class Addmapper {

    public static Adddto maptoServicedto(Addentity addentity) {
        // Implement the mapping logic
        return new Adddto(
                addentity.getId(),
                addentity.getName(),
                addentity.getChessacademyname(),
                addentity.getPhonenumber(),
                addentity.getEmail()
                
        );
    }

    public static Addentity maptoServiceentity(Adddto adddto) {
        // Implement the mapping logic
        return new Addentity(
                adddto.getId(),
                adddto.getName(),
                adddto.getChessacademyname(),
                adddto.getPhonenumber(),
                adddto.getEmail()
            
        );
    }
}