import { gql } from "@apollo/client";

export const GET_PROPERTIES_BY_NAME = gql`
    query GetPropertiesByName($name: String!) {
        getPropertiesByname(name: $name) {
            id
            name
            address
            type
            numberOfUnits
            rentalCost
        }
    }
`