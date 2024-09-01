import { gql } from "@apollo/client";

export const CREATE_TENANT = gql`
    mutation CreateTenant($name: String!, $contact: String!, $section: String!, $propertyId: Float!) {
        createTenant(TenantDto: {name: $name, contact: $contact, section: $section}, propertyId: $propertyId) {
            id
            name
            contact
            section
        }
    }
`