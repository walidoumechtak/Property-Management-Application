import { gql } from "@apollo/client";


export const GET_PAYMENTS = gql`
    query GetPayments($tenantId: Float!) {
        getPayments(tenantId: $tenantId) {
            id
            datePaid
            isSettled
            amount
        }
    }
`