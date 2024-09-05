import { gql } from "@apollo/client";


export const GET_USER_TOTAL_INFO = gql`
    query UserWithToals($userId: Float!) {
        userWithToals(userId: $userId) {
            totalProperties
            totalTenants
        }
    }
`