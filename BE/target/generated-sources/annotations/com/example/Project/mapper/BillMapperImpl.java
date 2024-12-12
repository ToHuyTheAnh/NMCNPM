package com.example.Project.mapper;

import com.example.Project.dto.request.bill.BillRequest;
import com.example.Project.dto.response.ApartmentChargeForBillResponse;
import com.example.Project.dto.response.BillResponse;
import com.example.Project.entity.ApartmentCharge;
import com.example.Project.entity.Bill;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-12T12:25:27+0700",
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.40.0.z20241112-1021, environment: Java 17.0.13 (Eclipse Adoptium)"
)
@Component
public class BillMapperImpl implements BillMapper {

    @Override
    public Bill toBill(BillRequest request) {
        if ( request == null ) {
            return null;
        }

        Bill bill = new Bill();

        bill.setApartmentId( request.getApartmentId() );
        bill.setMonthYear( request.getMonthYear() );
        bill.setPaymentMethod( request.getPaymentMethod() );
        bill.setStatus( request.getStatus() );
        bill.setTotalAmountPaid( request.getTotalAmountPaid() );

        return bill;
    }

    @Override
    public BillResponse toBillResponse(Bill bill, ApartmentChargeMapper apartmentChargeMapper) {
        if ( bill == null && apartmentChargeMapper == null ) {
            return null;
        }

        BillResponse billResponse = new BillResponse();

        if ( bill != null ) {
            billResponse.setApartmentId( bill.getApartmentId() );
            billResponse.setCreateAt( bill.getCreateAt() );
            billResponse.setId( bill.getId() );
            billResponse.setMonthYear( bill.getMonthYear() );
            billResponse.setPaymentMethod( bill.getPaymentMethod() );
            billResponse.setStatus( bill.getStatus() );
            billResponse.setTotalAmountDue( bill.getTotalAmountDue() );
            billResponse.setTotalAmountPaid( bill.getTotalAmountPaid() );
            billResponse.setTotalPaymentAmount( bill.getTotalPaymentAmount() );
            billResponse.setUpdateAt( bill.getUpdateAt() );
        }
        billResponse.setApartmentChargeList( apartmentChargeMapper.toApartmentChargeForBillResponseList(bill.getApartmentChargeList()) );

        return billResponse;
    }

    @Override
    public List<BillResponse> toBillResponseList(List<Bill> billList) {
        if ( billList == null ) {
            return null;
        }

        List<BillResponse> list = new ArrayList<BillResponse>( billList.size() );
        for ( Bill bill : billList ) {
            list.add( billToBillResponse( bill ) );
        }

        return list;
    }

    @Override
    public void mapBill(Bill bill, BillRequest request) {
        if ( request == null ) {
            return;
        }

        if ( request.getApartmentId() != null ) {
            bill.setApartmentId( request.getApartmentId() );
        }
        if ( request.getMonthYear() != null ) {
            bill.setMonthYear( request.getMonthYear() );
        }
        if ( request.getPaymentMethod() != null ) {
            bill.setPaymentMethod( request.getPaymentMethod() );
        }
        if ( request.getStatus() != null ) {
            bill.setStatus( request.getStatus() );
        }
        if ( request.getTotalAmountPaid() != null ) {
            bill.setTotalAmountPaid( request.getTotalAmountPaid() );
        }
    }

    protected ApartmentChargeForBillResponse apartmentChargeToApartmentChargeForBillResponse(ApartmentCharge apartmentCharge) {
        if ( apartmentCharge == null ) {
            return null;
        }

        ApartmentChargeForBillResponse apartmentChargeForBillResponse = new ApartmentChargeForBillResponse();

        apartmentChargeForBillResponse.setChargeAmount( apartmentCharge.getChargeAmount() );
        apartmentChargeForBillResponse.setUnitQuantity( apartmentCharge.getUnitQuantity() );

        return apartmentChargeForBillResponse;
    }

    protected List<ApartmentChargeForBillResponse> apartmentChargeListToApartmentChargeForBillResponseList(List<ApartmentCharge> list) {
        if ( list == null ) {
            return null;
        }

        List<ApartmentChargeForBillResponse> list1 = new ArrayList<ApartmentChargeForBillResponse>( list.size() );
        for ( ApartmentCharge apartmentCharge : list ) {
            list1.add( apartmentChargeToApartmentChargeForBillResponse( apartmentCharge ) );
        }

        return list1;
    }

    protected BillResponse billToBillResponse(Bill bill) {
        if ( bill == null ) {
            return null;
        }

        BillResponse billResponse = new BillResponse();

        billResponse.setApartmentChargeList( apartmentChargeListToApartmentChargeForBillResponseList( bill.getApartmentChargeList() ) );
        billResponse.setApartmentId( bill.getApartmentId() );
        billResponse.setCreateAt( bill.getCreateAt() );
        billResponse.setId( bill.getId() );
        billResponse.setMonthYear( bill.getMonthYear() );
        billResponse.setPaymentMethod( bill.getPaymentMethod() );
        billResponse.setStatus( bill.getStatus() );
        billResponse.setTotalAmountDue( bill.getTotalAmountDue() );
        billResponse.setTotalAmountPaid( bill.getTotalAmountPaid() );
        billResponse.setTotalPaymentAmount( bill.getTotalPaymentAmount() );
        billResponse.setUpdateAt( bill.getUpdateAt() );

        return billResponse;
    }
}
