import { gql } from "@apollo/client";

export const UPDATE_TENANT = gql`
    mutation UpdateTenant($name: String!, $contact: String!, $section: String!, $tenantId: Float!) {
        updateTenant(UpdateTenantDto: {name: $name, contact: $contact, section: $section}, tenantId: $tenantId) {
            id
            name
            contact
            section
        }
    }
`