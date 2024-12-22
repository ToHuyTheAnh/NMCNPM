package com.example.Project.mapper;

import com.example.Project.dto.request.resident.ResidentRequest;
import com.example.Project.dto.response.ResidentResponse;
import com.example.Project.entity.Apartment;
import com.example.Project.entity.Resident;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-21T15:00:03+0700",
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.41.0.v20241217-1506, environment: Java 17.0.13 (Eclipse Adoptium)"
)
@Component
public class ResidentMapperImpl implements ResidentMapper {

    @Override
    public Resident toResident(ResidentRequest request) {
        if ( request == null ) {
            return null;
        }

        Resident resident = new Resident();

        resident.setAliasName( request.getAliasName() );
        resident.setBirthday( request.getBirthday() );
        resident.setEducationLevel( request.getEducationLevel() );
        resident.setEthnicLanguage( request.getEthnicLanguage() );
        resident.setEthnicity( request.getEthnicity() );
        resident.setGender( request.getGender() );
        resident.setHometown( request.getHometown() );
        resident.setIdentityNumber( request.getIdentityNumber() );
        resident.setLanguageProficiency( request.getLanguageProficiency() );
        resident.setNationality( request.getNationality() );
        resident.setOccupation( request.getOccupation() );
        resident.setPassportNumber( request.getPassportNumber() );
        resident.setPermanentAddress( request.getPermanentAddress() );
        resident.setPhoneNumber( request.getPhoneNumber() );
        resident.setPlaceOfBirth( request.getPlaceOfBirth() );
        resident.setProfessionalQualification( request.getProfessionalQualification() );
        resident.setReligion( request.getReligion() );
        resident.setResidentName( request.getResidentName() );
        resident.setRole( request.getRole() );
        resident.setTemporaryAddress( request.getTemporaryAddress() );
        resident.setWorkplace( request.getWorkplace() );

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
        residentResponse.setAliasName( resident.getAliasName() );
        residentResponse.setBirthday( resident.getBirthday() );
        residentResponse.setCreateAt( resident.getCreateAt() );
        residentResponse.setEducationLevel( resident.getEducationLevel() );
        residentResponse.setEthnicLanguage( resident.getEthnicLanguage() );
        residentResponse.setEthnicity( resident.getEthnicity() );
        residentResponse.setGender( resident.getGender() );
        residentResponse.setHometown( resident.getHometown() );
        residentResponse.setIdentityNumber( resident.getIdentityNumber() );
        residentResponse.setLanguageProficiency( resident.getLanguageProficiency() );
        residentResponse.setNationality( resident.getNationality() );
        residentResponse.setOccupation( resident.getOccupation() );
        residentResponse.setPassportNumber( resident.getPassportNumber() );
        residentResponse.setPermanentAddress( resident.getPermanentAddress() );
        residentResponse.setPhoneNumber( resident.getPhoneNumber() );
        residentResponse.setPlaceOfBirth( resident.getPlaceOfBirth() );
        residentResponse.setProfessionalQualification( resident.getProfessionalQualification() );
        residentResponse.setReligion( resident.getReligion() );
        residentResponse.setResidentName( resident.getResidentName() );
        residentResponse.setRole( resident.getRole() );
        residentResponse.setTemporaryAddress( resident.getTemporaryAddress() );
        residentResponse.setUpdateAt( resident.getUpdateAt() );
        residentResponse.setWorkplace( resident.getWorkplace() );

        return residentResponse;
    }

    @Override
    public List<ResidentResponse> toResidentResponseList(List<Resident> residentList) {
        if ( residentList == null ) {
            return null;
        }

        List<ResidentResponse> list = new ArrayList<ResidentResponse>( residentList.size() );
        for ( Resident resident : residentList ) {
            list.add( toResidentResponse( resident ) );
        }

        return list;
    }

    @Override
    public void mapResident(Resident resident, ResidentRequest request) {
        if ( request == null ) {
            return;
        }

        if ( request.getAliasName() != null ) {
            resident.setAliasName( request.getAliasName() );
        }
        if ( request.getBirthday() != null ) {
            resident.setBirthday( request.getBirthday() );
        }
        if ( request.getEducationLevel() != null ) {
            resident.setEducationLevel( request.getEducationLevel() );
        }
        if ( request.getEthnicLanguage() != null ) {
            resident.setEthnicLanguage( request.getEthnicLanguage() );
        }
        if ( request.getEthnicity() != null ) {
            resident.setEthnicity( request.getEthnicity() );
        }
        if ( request.getGender() != null ) {
            resident.setGender( request.getGender() );
        }
        if ( request.getHometown() != null ) {
            resident.setHometown( request.getHometown() );
        }
        if ( request.getIdentityNumber() != null ) {
            resident.setIdentityNumber( request.getIdentityNumber() );
        }
        if ( request.getLanguageProficiency() != null ) {
            resident.setLanguageProficiency( request.getLanguageProficiency() );
        }
        if ( request.getNationality() != null ) {
            resident.setNationality( request.getNationality() );
        }
        if ( request.getOccupation() != null ) {
            resident.setOccupation( request.getOccupation() );
        }
        if ( request.getPassportNumber() != null ) {
            resident.setPassportNumber( request.getPassportNumber() );
        }
        if ( request.getPermanentAddress() != null ) {
            resident.setPermanentAddress( request.getPermanentAddress() );
        }
        if ( request.getPhoneNumber() != null ) {
            resident.setPhoneNumber( request.getPhoneNumber() );
        }
        if ( request.getPlaceOfBirth() != null ) {
            resident.setPlaceOfBirth( request.getPlaceOfBirth() );
        }
        if ( request.getProfessionalQualification() != null ) {
            resident.setProfessionalQualification( request.getProfessionalQualification() );
        }
        if ( request.getReligion() != null ) {
            resident.setReligion( request.getReligion() );
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
        if ( request.getWorkplace() != null ) {
            resident.setWorkplace( request.getWorkplace() );
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
