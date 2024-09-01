import { gql } from "@apollo/client";


export const GET_PROPERTIE = gql`
    query GetPropertie($id: Float!) {
        getPropertie(id: $id) {
            id
            name
            address
            type
            numberOfUnits
            rentalCost
        }
    }
`