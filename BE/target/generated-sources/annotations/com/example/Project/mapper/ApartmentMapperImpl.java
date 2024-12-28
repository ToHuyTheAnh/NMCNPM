package com.example.Project.mapper;

import com.example.Project.dto.request.apartment.ApartmentRequest;
import com.example.Project.entity.Apartment;
import java.math.BigDecimal;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-28T16:53:03+0700",
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.41.0.v20241217-1506, environment: Java 17.0.13 (Eclipse Adoptium)"
)
@Component
public class ApartmentMapperImpl implements ApartmentMapper {

    @Override
    public Apartment toApartment(ApartmentRequest apartmentRequest) {
        if ( apartmentRequest == null ) {
            return null;
        }

        Apartment apartment = new Apartment();

        apartment.setApartmentName( apartmentRequest.getApartmentName() );
        apartment.setApartmentNumber( apartmentRequest.getApartmentNumber() );
        if ( apartmentRequest.getArea() != null ) {
            apartment.setArea( BigDecimal.valueOf( apartmentRequest.getArea() ) );
        }
        apartment.setFloorNumber( apartmentRequest.getFloorNumber() );
        apartment.setOwnerId( apartmentRequest.getOwnerId() );
        apartment.setStatus( apartmentRequest.getStatus() );

        return apartment;
    }

    @Override
    public void mapApartment(Apartment apartment, ApartmentRequest apartmentRequest) {
        if ( apartmentRequest == null ) {
            return;
        }

        if ( apartmentRequest.getApartmentName() != null ) {
            apartment.setApartmentName( apartmentRequest.getApartmentName() );
        }
        if ( apartmentRequest.getApartmentNumber() != null ) {
            apartment.setApartmentNumber( apartmentRequest.getApartmentNumber() );
        }
        if ( apartmentRequest.getArea() != null ) {
            apartment.setArea( BigDecimal.valueOf( apartmentRequest.getArea() ) );
        }
        if ( apartmentRequest.getFloorNumber() != null ) {
            apartment.setFloorNumber( apartmentRequest.getFloorNumber() );
        }
        if ( apartmentRequest.getOwnerId() != null ) {
            apartment.setOwnerId( apartmentRequest.getOwnerId() );
        }
        if ( apartmentRequest.getStatus() != null ) {
            apartment.setStatus( apartmentRequest.getStatus() );
        }
    }
}
