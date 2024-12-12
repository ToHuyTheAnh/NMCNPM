package com.example.Project.mapper;

import com.example.Project.dto.request.charge.ChargeRequest;
import com.example.Project.entity.Charge;
import java.math.BigDecimal;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-12T10:18:01+0700",
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.40.0.z20241112-1021, environment: Java 17.0.13 (Eclipse Adoptium)"
)
@Component
public class ChargeMapperImpl implements ChargeMapper {

    @Override
    public Charge toCharge(ChargeRequest request) {
        if ( request == null ) {
            return null;
        }

        Charge charge = new Charge();

        charge.setChargeDate( request.getChargeDate() );
        charge.setChargeName( request.getChargeName() );
        charge.setDescription( request.getDescription() );
        charge.setDueDate( request.getDueDate() );
        charge.setType( request.getType() );
        if ( request.getUnitAmount() != null ) {
            charge.setUnitAmount( BigDecimal.valueOf( request.getUnitAmount() ) );
        }
        charge.setUnitMeasurement( request.getUnitMeasurement() );

        return charge;
    }

    @Override
    public void mapCharge(Charge charge, ChargeRequest request) {
        if ( request == null ) {
            return;
        }

        if ( request.getChargeDate() != null ) {
            charge.setChargeDate( request.getChargeDate() );
        }
        if ( request.getChargeName() != null ) {
            charge.setChargeName( request.getChargeName() );
        }
        if ( request.getDescription() != null ) {
            charge.setDescription( request.getDescription() );
        }
        if ( request.getDueDate() != null ) {
            charge.setDueDate( request.getDueDate() );
        }
        if ( request.getType() != null ) {
            charge.setType( request.getType() );
        }
        if ( request.getUnitAmount() != null ) {
            charge.setUnitAmount( BigDecimal.valueOf( request.getUnitAmount() ) );
        }
        if ( request.getUnitMeasurement() != null ) {
            charge.setUnitMeasurement( request.getUnitMeasurement() );
        }
    }
}
