import { gql } from "@apollo/client";

export const GET_PROPERTIES = gql`
    query GetProperties($userId: Float!) {
        getProperties(userId: $userId) {
            id
            name
            address
            type
            numberOfUnits
            rentalCost
            createdAt
            updatedAt
        }
    }
`