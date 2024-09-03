import { gql } from "@apollo/client";


export const CREATE_PAYMENT = gql`
    mutation CreatePayment($datePaid: DateTime!, $amount: Float!, $isSettled: Boolean!, $tenantId: Float!) {
        createPayment(createPaymentDto: {datePaid: $datePaid, amount: $amount, isSettled: $isSettled}, tenantId: $tenantId) {
            datePaid
            isSettled
            amount
        }
    }
`