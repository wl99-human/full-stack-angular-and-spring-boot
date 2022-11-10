package com.luv2code.ecommerce.dto;

import lombok.Data;

@Data
public class PaymentInfo {
    // because of US dollar lowest denomination is cents
    // $12.54 * 100 cents = 1254 cents
    private int amount;
    private String currency;
    private String receiptEmail;
}
