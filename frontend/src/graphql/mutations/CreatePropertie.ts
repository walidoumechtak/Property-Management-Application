import { gql } from "@apollo/client";

export const CREATE_PROPERTIE = gql`
    mutation CreatePropertie($name: String!, $address: String!, $type: String!, $numberOfUnits: Float!, $rentalCost: Float!, $userId: Float!) {
        createPropertie(propertieDto: {name: $name, address: $address, type: $type, numberOfUnits: $numberOfUnits, rentalCost: $rentalCost}, userId: $userId) {
            id
            name
            address
            type
            numberOfUnits
            rentalCost
        }
    }
`