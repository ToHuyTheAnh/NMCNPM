package com.example.Project.mapper;

import com.example.Project.dto.request.resident.ResidentRequest;
import com.example.Project.dto.response.ResidentResponse;
import com.example.Project.entity.Apartment;
import com.example.Project.entity.Resident;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-17T16:23:44+0700",
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.40.0.z20241112-1021, environment: Java 17.0.13 (Eclipse Adoptium)"
)
@Component
public class ResidentMapperImpl implements ResidentMapper {

    @Override
    public Resident toResident(ResidentRequest request) {
        if ( request == null ) {
            return null;
        }

        Resident resident = new Resident();

        resident.setBirthday( request.getBirthday() );
        resident.setIdNumber( request.getIdNumber() );
        resident.setPermanentAddress( request.getPermanentAddress() );
        resident.setPhoneNumber( request.getPhoneNumber() );
        resident.setResidentName( request.getResidentName() );
        resident.setRole( request.getRole() );
        resident.setTemporaryAddress( request.getTemporaryAddress() );

        return resident;
    }

    @Override
    public ResidentResponse toResidentResponse(Resident resident) {
        if ( resident == null ) {
            return null;
        }

        ResidentResponse residentResponse = new ResidentResponse();

        residentResponse.setApartmentId( residentApartmentId( resident ) );
        residentResponse.setApartmentName( residentApartmentApartmentName( resident ) );
        residentResponse.setId( resident.getId() );
        residentResponse.setBirthday( resident.getBirthday() );
        residentResponse.setCreateAt( resident.getCreateAt() );
        residentResponse.setIdNumber( resident.getIdNumber() );
        residentResponse.setPermanentAddress( resident.getPermanentAddress() );
        residentResponse.setPhoneNumber( resident.getPhoneNumber() );
        residentResponse.setResidentName( resident.getResidentName() );
        residentResponse.setRole( resident.getRole() );
        residentResponse.setTemporaryAddress( resident.getTemporaryAddress() );
        residentResponse.setUpdateAt( resident.getUpdateAt() );

        return residentResponse;
    }

    @Override
    public void mapResident(Resident resident, ResidentRequest request) {
        if ( request == null ) {
            return;
        }

        if ( request.getBirthday() != null ) {
            resident.setBirthday( request.getBirthday() );
        }
        if ( request.getIdNumber() != null ) {
            resident.setIdNumber( request.getIdNumber() );
        }
        if ( request.getPermanentAddress() != null ) {
            resident.setPermanentAddress( request.getPermanentAddress() );
        }
        if ( request.getPhoneNumber() != null ) {
            resident.setPhoneNumber( request.getPhoneNumber() );
        }
        if ( request.getResidentName() != null ) {
            resident.setResidentName( request.getResidentName() );
        }
        if ( request.getRole() != null ) {
            resident.setRole( request.getRole() );
        }
        if ( request.getTemporaryAddress() != null ) {
            resident.setTemporaryAddress( request.getTemporaryAddress() );
        }
    }

    private String residentApartmentId(Resident resident) {
        if ( resident == null ) {
            return null;
        }
        Apartment apartment = resident.getApartment();
        if ( apartment == null ) {
            return null;
        }
        String id = apartment.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private String residentApartmentApartmentName(Resident resident) {
        if ( resident == null ) {
            return null;
        }
        Apartment apartment = resident.getApartment();
        if ( apartment == null ) {
            return null;
        }
        String apartmentName = apartment.getApartmentName();
        if ( apartmentName == null ) {
            return null;
        }
        return apartmentName;
    }
}
