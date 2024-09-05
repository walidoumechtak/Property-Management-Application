import { gql } from "@apollo/client";

export const DELETE_ACCOUNT = gql `
    mutation DeleteAccount($userId: Float!) {
        deleteAccount(userId: $userId)
    }
`
