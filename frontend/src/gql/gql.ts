/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation CreatePayment($datePaid: DateTime!, $amount: Float!, $isSettled: Boolean!, $tenantId: Float!) {\n        createPayment(createPaymentDto: {datePaid: $datePaid, amount: $amount, isSettled: $isSettled}, tenantId: $tenantId) {\n            datePaid\n            isSettled\n            amount\n        }\n    }\n": types.CreatePaymentDocument,
    "\n    mutation CreatePropertie($name: String!, $address: String!, $type: String!, $numberOfUnits: Float!, $rentalCost: Float!, $userId: Float!) {\n        createPropertie(propertieDto: {name: $name, address: $address, type: $type, numberOfUnits: $numberOfUnits, rentalCost: $rentalCost}, userId: $userId) {\n            id\n            name\n            address\n            type\n            numberOfUnits\n            rentalCost\n        }\n    }\n": types.CreatePropertieDocument,
    "\n    mutation CreateTenant($name: String!, $contact: String!, $section: String!, $propertyId: Float!) {\n        createTenant(TenantDto: {name: $name, contact: $contact, section: $section}, propertyId: $propertyId) {\n            id\n            name\n            contact\n            section\n        }\n    }\n": types.CreateTenantDocument,
    "\n    mutation DeleteTenant($tenantId: Float!) {\n        deleteTenant(tenantId: $tenantId){\n            name\n        }\n    }\n": types.DeleteTenantDocument,
    "\n    mutation LoginUser($email: String!, $password: String!) {\n        login(loginInput: {email: $email, password: $password}) {\n            user {\n                id\n                email\n                fullName\n            }\n        }\n    }   \n": types.LoginUserDocument,
    "\n    mutation LogoutUser {\n        logout\n    }\n": types.LogoutUserDocument,
    "\n    mutation RegisterUser(\n        $email: String!\n        $password: String!\n        $fullName: String!\n        $confirmPassword: String!\n    ) {\n        register(registerInput: {\n            email: $email,\n            password: $password,\n            fullName: $fullName\n            confirmPassword: $confirmPassword,\n            })\n             {\n            user {\n                id\n                email\n                fullName\n            }\n        }\n    }\n": types.RegisterUserDocument,
    "\n    mutation UpdateTenant($name: String!, $contact: String!, $section: String!, $tenantId: Float!) {\n        updateTenant(UpdateTenantDto: {name: $name, contact: $contact, section: $section}, tenantId: $tenantId) {\n            id\n            name\n            contact\n            section\n        }\n    }\n": types.UpdateTenantDocument,
    "\n    query GetPayments($tenantId: Float!) {\n        getPayments(tenantId: $tenantId) {\n            id\n            datePaid\n            isSettled\n            amount\n        }\n    }\n": types.GetPaymentsDocument,
    "\n    query GetPropertie($id: Float!) {\n        getPropertie(id: $id) {\n            id\n            name\n            address\n            type\n            numberOfUnits\n            rentalCost\n        }\n    }\n": types.GetPropertieDocument,
    "\n    query GetProperties($userId: Float!) {\n        getProperties(userId: $userId) {\n            id\n            name\n            address\n            type\n            numberOfUnits\n            rentalCost\n            createdAt\n            updatedAt\n        }\n    }\n": types.GetPropertiesDocument,
    "\n    query GetPropertiesByName($name: String!) {\n        getPropertiesByname(name: $name) {\n            id\n            name\n            address\n            type\n            numberOfUnits\n            rentalCost\n        }\n    }\n": types.GetPropertiesByNameDocument,
    "\n    query GetTenants($propertyId: Float!) {\n        getTenants(propertyId: $propertyId) {\n            id\n            name\n            contact\n            section\n        }\n    }\n": types.GetTenantsDocument,
    "\n    query GetUsers {\n        getUsers {\n            id\n            fullName\n            email\n            image\n        }\n    }\n": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreatePayment($datePaid: DateTime!, $amount: Float!, $isSettled: Boolean!, $tenantId: Float!) {\n        createPayment(createPaymentDto: {datePaid: $datePaid, amount: $amount, isSettled: $isSettled}, tenantId: $tenantId) {\n            datePaid\n            isSettled\n            amount\n        }\n    }\n"): (typeof documents)["\n    mutation CreatePayment($datePaid: DateTime!, $amount: Float!, $isSettled: Boolean!, $tenantId: Float!) {\n        createPayment(createPaymentDto: {datePaid: $datePaid, amount: $amount, isSettled: $isSettled}, tenantId: $tenantId) {\n            datePaid\n            isSettled\n            amount\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreatePropertie($name: String!, $address: String!, $type: String!, $numberOfUnits: Float!, $rentalCost: Float!, $userId: Float!) {\n        createPropertie(propertieDto: {name: $name, address: $address, type: $type, numberOfUnits: $numberOfUnits, rentalCost: $rentalCost}, userId: $userId) {\n            id\n            name\n            address\n            type\n            numberOfUnits\n            rentalCost\n        }\n    }\n"): (typeof documents)["\n    mutation CreatePropertie($name: String!, $address: String!, $type: String!, $numberOfUnits: Float!, $rentalCost: Float!, $userId: Float!) {\n        createPropertie(propertieDto: {name: $name, address: $address, type: $type, numberOfUnits: $numberOfUnits, rentalCost: $rentalCost}, userId: $userId) {\n            id\n            name\n            address\n            type\n            numberOfUnits\n            rentalCost\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateTenant($name: String!, $contact: String!, $section: String!, $propertyId: Float!) {\n        createTenant(TenantDto: {name: $name, contact: $contact, section: $section}, propertyId: $propertyId) {\n            id\n            name\n            contact\n            section\n        }\n    }\n"): (typeof documents)["\n    mutation CreateTenant($name: String!, $contact: String!, $section: String!, $propertyId: Float!) {\n        createTenant(TenantDto: {name: $name, contact: $contact, section: $section}, propertyId: $propertyId) {\n            id\n            name\n            contact\n            section\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteTenant($tenantId: Float!) {\n        deleteTenant(tenantId: $tenantId){\n            name\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteTenant($tenantId: Float!) {\n        deleteTenant(tenantId: $tenantId){\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation LoginUser($email: String!, $password: String!) {\n        login(loginInput: {email: $email, password: $password}) {\n            user {\n                id\n                email\n                fullName\n            }\n        }\n    }   \n"): (typeof documents)["\n    mutation LoginUser($email: String!, $password: String!) {\n        login(loginInput: {email: $email, password: $password}) {\n            user {\n                id\n                email\n                fullName\n            }\n        }\n    }   \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation LogoutUser {\n        logout\n    }\n"): (typeof documents)["\n    mutation LogoutUser {\n        logout\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation RegisterUser(\n        $email: String!\n        $password: String!\n        $fullName: String!\n        $confirmPassword: String!\n    ) {\n        register(registerInput: {\n            email: $email,\n            password: $password,\n            fullName: $fullName\n            confirmPassword: $confirmPassword,\n            })\n             {\n            user {\n                id\n                email\n                fullName\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation RegisterUser(\n        $email: String!\n        $password: String!\n        $fullName: String!\n        $confirmPassword: String!\n    ) {\n        register(registerInput: {\n            email: $email,\n            password: $password,\n            fullName: $fullName\n            confirmPassword: $confirmPassword,\n            })\n             {\n            user {\n                id\n                email\n                fullName\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateTenant($name: String!, $contact: String!, $section: String!, $tenantId: Float!) {\n        updateTenant(UpdateTenantDto: {name: $name, contact: $contact, section: $section}, tenantId: $tenantId) {\n            id\n            name\n            contact\n            section\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateTenant($name: String!, $contact: String!, $section: String!, $tenantId: Float!) {\n        updateTenant(UpdateTenantDto: {name: $name, contact: $contact, section: $section}, tenantId: $tenantId) {\n            id\n            name\n            contact\n            section\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPayments($tenantId: Float!) {\n        getPayments(tenantId: $tenantId) {\n            id\n            datePaid\n            isSettled\n            amount\n        }\n    }\n"): (typeof documents)["\n    query GetPayments($tenantId: Float!) {\n        getPayments(tenantId: $tenantId) {\n            id\n            datePaid\n            isSettled\n            amount\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPropertie($id: Float!) {\n        getPropertie(id: $id) {\n            id\n            name\n            address\n            type\n            numberOfUnits\n            rentalCost\n        }\n    }\n"): (typeof documents)["\n    query GetPropertie($id: Float!) {\n        getPropertie(id: $id) {\n            id\n            name\n            address\n            type\n            numberOfUnits\n            rentalCost\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetProperties($userId: Float!) {\n        getProperties(userId: $userId) {\n            id\n            name\n            address\n            type\n            numberOfUnits\n            rentalCost\n            createdAt\n            updatedAt\n        }\n    }\n"): (typeof documents)["\n    query GetProperties($userId: Float!) {\n        getProperties(userId: $userId) {\n            id\n            name\n            address\n            type\n            numberOfUnits\n            rentalCost\n            createdAt\n            updatedAt\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPropertiesByName($name: String!) {\n        getPropertiesByname(name: $name) {\n            id\n            name\n            address\n            type\n            numberOfUnits\n            rentalCost\n        }\n    }\n"): (typeof documents)["\n    query GetPropertiesByName($name: String!) {\n        getPropertiesByname(name: $name) {\n            id\n            name\n            address\n            type\n            numberOfUnits\n            rentalCost\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetTenants($propertyId: Float!) {\n        getTenants(propertyId: $propertyId) {\n            id\n            name\n            contact\n            section\n        }\n    }\n"): (typeof documents)["\n    query GetTenants($propertyId: Float!) {\n        getTenants(propertyId: $propertyId) {\n            id\n            name\n            contact\n            section\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetUsers {\n        getUsers {\n            id\n            fullName\n            email\n            image\n        }\n    }\n"): (typeof documents)["\n    query GetUsers {\n        getUsers {\n            id\n            fullName\n            email\n            image\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;