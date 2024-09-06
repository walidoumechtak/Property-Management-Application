import { gql } from "@apollo/client";


export const GET_SINGL_TENANT = gql`
    query GetSingleTenant($tenantId: Float!) {
        getSingleTenant(tenantId: $tenantId) {
            id
            name
            contact
            section
        }
    }
`