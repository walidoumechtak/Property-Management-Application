import { gql } from "@apollo/client";

export const DELETE_TENANT = gql`
    mutation DeleteTenant($tenantId: Float!) {
        deleteTenant(tenantId: $tenantId){
            name
        }
    }
`