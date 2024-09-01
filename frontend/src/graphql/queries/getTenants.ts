import { gql } from "@apollo/client";


export const GET_TENANTS = gql`
    query GetTenants($propertyId: Float!) {
        getTenants(propertyId: $propertyId) {
            id
            name
            contact
            section
        }
    }
`