package com.example.Project.mapper;

import com.example.Project.dto.request.apartmentCharge.ApartmentChargeRequest;
import com.example.Project.dto.response.ApartmentChargeForBillResponse;
import com.example.Project.dto.response.ApartmentChargeResponse;
import com.example.Project.entity.Apartment;
import com.example.Project.entity.ApartmentCharge;
import com.example.Project.entity.Charge;
import com.example.Project.enums.Enums;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-27T21:35:13+0700",
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.41.0.v20241217-1506, environment: Java 17.0.13 (Eclipse Adoptium)"
)
@Component
public class ApartmentChargeMapperImpl implements ApartmentChargeMapper {

    @Override
    public ApartmentCharge toApartmentCharge(ApartmentChargeRequest request) {
        if ( request == null ) {
            return null;
        }

        ApartmentCharge apartmentCharge = new ApartmentCharge();

        apartmentCharge.setAmountPaid( request.getAmountPaid() );
        apartmentCharge.setPaymentMethod( request.getPaymentMethod() );
        apartmentCharge.setUnitQuantity( request.getUnitQuantity() );

        return apartmentCharge;
    }

    @Override
    public ApartmentChargeResponse toApartmentChargeResponse(ApartmentCharge apartmentCharge) {
        if ( apartmentCharge == null ) {
            return null;
        }

        ApartmentChargeResponse apartmentChargeResponse = new ApartmentChargeResponse();

        apartmentChargeResponse.setApartmentId( apartmentChargeApartmentId( apartmentCharge ) );
        apartmentChargeResponse.setChargeId( apartmentChargeChargeId( apartmentCharge ) );
        apartmentChargeResponse.setApartmentName( apartmentChargeApartmentApartmentName( apartmentCharge ) );
        apartmentChargeResponse.setChargeName( apartmentChargeChargeChargeName( apartmentCharge ) );
        apartmentChargeResponse.setUnitAmount( apartmentChargeChargeUnitAmount( apartmentCharge ) );
        apartmentChargeResponse.setUnitMeasurement( apartmentChargeChargeUnitMeasurement( apartmentCharge ) );
        apartmentChargeResponse.setChargeType( apartmentChargeChargeType( apartmentCharge ) );
        apartmentChargeResponse.setAmountPaid( apartmentCharge.getAmountPaid() );
        apartmentChargeResponse.setChargeAmount( apartmentCharge.getChargeAmount() );
        apartmentChargeResponse.setCreateAt( apartmentCharge.getCreateAt() );
        apartmentChargeResponse.setId( apartmentCharge.getId() );
        apartmentChargeResponse.setPaymentMethod( apartmentCharge.getPaymentMethod() );
        apartmentChargeResponse.setUnitQuantity( apartmentCharge.getUnitQuantity() );
        apartmentChargeResponse.setUpdateAt( apartmentCharge.getUpdateAt() );

        return apartmentChargeResponse;
    }

    @Override
    public List<ApartmentChargeResponse> toApartmentChargeResponseList(List<ApartmentCharge> apartmentChargeList) {
        if ( apartmentChargeList == null ) {
            return null;
        }

        List<ApartmentChargeResponse> list = new ArrayList<ApartmentChargeResponse>( apartmentChargeList.size() );
        for ( ApartmentCharge apartmentCharge : apartmentChargeList ) {
            list.add( toApartmentChargeResponse( apartmentCharge ) );
        }

        return list;
    }

    @Override
    public void mapApartmentCharge(ApartmentCharge apartmentCharge, ApartmentChargeRequest request) {
        if ( request == null ) {
            return;
        }

        if ( request.getAmountPaid() != null ) {
            apartmentCharge.setAmountPaid( request.getAmountPaid() );
        }
        if ( request.getPaymentMethod() != null ) {
            apartmentCharge.setPaymentMethod( request.getPaymentMethod() );
        }
        if ( request.getUnitQuantity() != null ) {
            apartmentCharge.setUnitQuantity( request.getUnitQuantity() );
        }
    }

    @Override
    public ApartmentChargeForBillResponse toApartmentChargeForBillResponse(ApartmentCharge apartmentCharge) {
        if ( apartmentCharge == null ) {
            return null;
        }

        ApartmentChargeForBillResponse apartmentChargeForBillResponse = new ApartmentChargeForBillResponse();

        apartmentChargeForBillResponse.setChargeId( apartmentChargeChargeId( apartmentCharge ) );
        apartmentChargeForBillResponse.setChargeName( apartmentChargeChargeChargeName( apartmentCharge ) );
        apartmentChargeForBillResponse.setUnitAmount( apartmentChargeChargeUnitAmount( apartmentCharge ) );
        apartmentChargeForBillResponse.setUnitMeasurement( apartmentChargeChargeUnitMeasurement( apartmentCharge ) );
        apartmentChargeForBillResponse.setChargeAmount( apartmentCharge.getChargeAmount() );
        apartmentChargeForBillResponse.setUnitQuantity( apartmentCharge.getUnitQuantity() );

        return apartmentChargeForBillResponse;
    }

    @Override
    public List<ApartmentChargeForBillResponse> toApartmentChargeForBillResponseList(List<ApartmentCharge> apartmentChargeList) {
        if ( apartmentChargeList == null ) {
            return null;
        }

        List<ApartmentChargeForBillResponse> list = new ArrayList<ApartmentChargeForBillResponse>( apartmentChargeList.size() );
        for ( ApartmentCharge apartmentCharge : apartmentChargeList ) {
            list.add( toApartmentChargeForBillResponse( apartmentCharge ) );
        }

        return list;
    }

    private String apartmentChargeApartmentId(ApartmentCharge apartmentCharge) {
        if ( apartmentCharge == null ) {
            return null;
        }
        Apartment apartment = apartmentCharge.getApartment();
        if ( apartment == null ) {
            return null;
        }
        String id = apartment.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private String apartmentChargeChargeId(ApartmentCharge apartmentCharge) {
        if ( apartmentCharge == null ) {
            return null;
        }
        Charge charge = apartmentCharge.getCharge();
        if ( charge == null ) {
            return null;
        }
        String id = charge.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private String apartmentChargeApartmentApartmentName(ApartmentCharge apartmentCharge) {
        if ( apartmentCharge == null ) {
            return null;
        }
        Apartment apartment = apartmentCharge.getApartment();
        if ( apartment == null ) {
            return null;
        }
        String apartmentName = apartment.getApartmentName();
        if ( apartmentName == null ) {
            return null;
        }
        return apartmentName;
    }

    private String apartmentChargeChargeChargeName(ApartmentCharge apartmentCharge) {
        if ( apartmentCharge == null ) {
            return null;
        }
        Charge charge = apartmentCharge.getCharge();
        if ( charge == null ) {
            return null;
        }
        String chargeName = charge.getChargeName();
        if ( chargeName == null ) {
            return null;
        }
        return chargeName;
    }

    private BigDecimal apartmentChargeChargeUnitAmount(ApartmentCharge apartmentCharge) {
        if ( apartmentCharge == null ) {
            return null;
        }
        Charge charge = apartmentCharge.getCharge();
        if ( charge == null ) {
            return null;
        }
        BigDecimal unitAmount = charge.getUnitAmount();
        if ( unitAmount == null ) {
            return null;
        }
        return unitAmount;
    }

    private String apartmentChargeChargeUnitMeasurement(ApartmentCharge apartmentCharge) {
        if ( apartmentCharge == null ) {
            return null;
        }
        Charge charge = apartmentCharge.getCharge();
        if ( charge == null ) {
            return null;
        }
        String unitMeasurement = charge.getUnitMeasurement();
        if ( unitMeasurement == null ) {
            return null;
        }
        return unitMeasurement;
    }

    private Enums.ChargeType apartmentChargeChargeType(ApartmentCharge apartmentCharge) {
        if ( apartmentCharge == null ) {
            return null;
        }
        Charge charge = apartmentCharge.getCharge();
        if ( charge == null ) {
            return null;
        }
        Enums.ChargeType type = charge.getType();
        if ( type == null ) {
            return null;
        }
        return type;
    }
}
