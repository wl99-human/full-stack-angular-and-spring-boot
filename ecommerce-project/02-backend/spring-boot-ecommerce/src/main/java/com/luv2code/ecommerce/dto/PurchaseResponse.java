package com.luv2code.ecommerce.dto;

import lombok.Data;

@Data
public class PurchaseResponse {
    // use this class to send back a Java object as JSON
    // or use @NonNull to represent final
    private final String orderTrackingNumber;
}
