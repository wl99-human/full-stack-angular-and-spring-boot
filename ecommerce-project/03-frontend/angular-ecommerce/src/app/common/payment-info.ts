export class PaymentInfo {
    // PaymentInfo DTO
    constructor(public amount?: number,
                public currency?: string,
                public receiptEmail?: string) { }
}