/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreatePaymentDto = {
  amount: Scalars['Float']['input'];
  datePaid: Scalars['DateTime']['input'];
  isSettled: Scalars['Boolean']['input'];
};

export type CreatePropertieDto = {
  address: Scalars['String']['input'];
  name: Scalars['String']['input'];
  numberOfUnits: Scalars['Float']['input'];
  rentalCost: Scalars['Float']['input'];
  type: Scalars['String']['input'];
};

export type CreateTenantDto = {
  contact: Scalars['String']['input'];
  name: Scalars['String']['input'];
  section: Scalars['String']['input'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  error?: Maybe<ErrorType>;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPayment: Payment;
  createPropertie: Propertie;
  createTenant: Tenant;
  deleteTenant: Tenant;
  login: LoginResponse;
  logout: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  register: RegisterResponse;
  removePayment: Payment;
  updateTenant: Tenant;
};


export type MutationCreatePaymentArgs = {
  createPaymentDto: CreatePaymentDto;
  tenantId: Scalars['Float']['input'];
};


export type MutationCreatePropertieArgs = {
  propertieDto: CreatePropertieDto;
  userId: Scalars['Float']['input'];
};


export type MutationCreateTenantArgs = {
  TenantDto: CreateTenantDto;
  propertyId: Scalars['Float']['input'];
};


export type MutationDeleteTenantArgs = {
  tenantId: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginDto;
};


export type MutationRegisterArgs = {
  registerInput: RegisterDto;
};


export type MutationRemovePaymentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateTenantArgs = {
  UpdateTenantDto: CreateTenantDto;
  tenantId: Scalars['Float']['input'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  datePaid: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isSettled: Scalars['Boolean']['output'];
};

export type Propertie = {
  __typename?: 'Propertie';
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  numberOfUnits: Scalars['Float']['output'];
  rentalCost: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  getPayments: Array<Payment>;
  getPropertie: Propertie;
  getProperties: Array<Propertie>;
  getPropertiesByname: Array<Propertie>;
  getTenants: Array<Tenant>;
  getUsers: Array<User>;
  hello: Scalars['String']['output'];
  payment: Payment;
  userWithToals: UserStatistics;
};


export type QueryGetPaymentsArgs = {
  tenantId: Scalars['Float']['input'];
};


export type QueryGetPropertieArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetPropertiesArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryGetPropertiesBynameArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetTenantsArgs = {
  propertyId: Scalars['Float']['input'];
};


export type QueryPaymentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserWithToalsArgs = {
  userId: Scalars['Float']['input'];
};

export type RegisterDto = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  error?: Maybe<ErrorType>;
  user?: Maybe<User>;
};

export type Tenant = {
  __typename?: 'Tenant';
  contact: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  section: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  image?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserStatistics = {
  __typename?: 'UserStatistics';
  totalProperties: Scalars['Float']['output'];
  totalTenants: Scalars['Float']['output'];
};

export type CreatePaymentMutationVariables = Exact<{
  datePaid: Scalars['DateTime']['input'];
  amount: Scalars['Float']['input'];
  isSettled: Scalars['Boolean']['input'];
  tenantId: Scalars['Float']['input'];
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'Payment', datePaid: any, isSettled: boolean, amount: number } };

export type CreatePropertieMutationVariables = Exact<{
  name: Scalars['String']['input'];
  address: Scalars['String']['input'];
  type: Scalars['String']['input'];
  numberOfUnits: Scalars['Float']['input'];
  rentalCost: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
}>;


export type CreatePropertieMutation = { __typename?: 'Mutation', createPropertie: { __typename?: 'Propertie', id: number, name: string, address: string, type: string, numberOfUnits: number, rentalCost: number } };

export type CreateTenantMutationVariables = Exact<{
  name: Scalars['String']['input'];
  contact: Scalars['String']['input'];
  section: Scalars['String']['input'];
  propertyId: Scalars['Float']['input'];
}>;


export type CreateTenantMutation = { __typename?: 'Mutation', createTenant: { __typename?: 'Tenant', id: number, name: string, contact: string, section: string } };

export type DeleteTenantMutationVariables = Exact<{
  tenantId: Scalars['Float']['input'];
}>;


export type DeleteTenantMutation = { __typename?: 'Mutation', deleteTenant: { __typename?: 'Tenant', name: string } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', user: { __typename?: 'User', id: number, email: string, fullName: string } } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: string };

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  confirmPassword: Scalars['String']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', user?: { __typename?: 'User', id: number, email: string, fullName: string } | null } };

export type UpdateTenantMutationVariables = Exact<{
  name: Scalars['String']['input'];
  contact: Scalars['String']['input'];
  section: Scalars['String']['input'];
  tenantId: Scalars['Float']['input'];
}>;


export type UpdateTenantMutation = { __typename?: 'Mutation', updateTenant: { __typename?: 'Tenant', id: number, name: string, contact: string, section: string } };

export type GetPaymentsQueryVariables = Exact<{
  tenantId: Scalars['Float']['input'];
}>;


export type GetPaymentsQuery = { __typename?: 'Query', getPayments: Array<{ __typename?: 'Payment', id: number, datePaid: any, isSettled: boolean, amount: number }> };

export type UserWithToalsQueryVariables = Exact<{
  userId: Scalars['Float']['input'];
}>;


export type UserWithToalsQuery = { __typename?: 'Query', userWithToals: { __typename?: 'UserStatistics', totalProperties: number, totalTenants: number } };

export type GetPropertieQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetPropertieQuery = { __typename?: 'Query', getPropertie: { __typename?: 'Propertie', id: number, name: string, address: string, type: string, numberOfUnits: number, rentalCost: number } };

export type GetPropertiesQueryVariables = Exact<{
  userId: Scalars['Float']['input'];
}>;


export type GetPropertiesQuery = { __typename?: 'Query', getProperties: Array<{ __typename?: 'Propertie', id: number, name: string, address: string, type: string, numberOfUnits: number, rentalCost: number, createdAt: any, updatedAt: any }> };

export type GetPropertiesByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetPropertiesByNameQuery = { __typename?: 'Query', getPropertiesByname: Array<{ __typename?: 'Propertie', id: number, name: string, address: string, type: string, numberOfUnits: number, rentalCost: number }> };

export type GetTenantsQueryVariables = Exact<{
  propertyId: Scalars['Float']['input'];
}>;


export type GetTenantsQuery = { __typename?: 'Query', getTenants: Array<{ __typename?: 'Tenant', id: number, name: string, contact: string, section: string }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id: number, fullName: string, email: string, image?: string | null }> };


export const CreatePaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isSettled"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPaymentDto"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"datePaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isSettled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isSettled"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"tenantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"isSettled"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]} as unknown as DocumentNode<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const CreatePropertieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePropertie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numberOfUnits"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rentalCost"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPropertie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"propertieDto"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"numberOfUnits"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numberOfUnits"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"rentalCost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rentalCost"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfUnits"}},{"kind":"Field","name":{"kind":"Name","value":"rentalCost"}}]}}]}}]} as unknown as DocumentNode<CreatePropertieMutation, CreatePropertieMutationVariables>;
export const CreateTenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTenant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contact"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"section"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"propertyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"TenantDto"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contact"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contact"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"section"},"value":{"kind":"Variable","name":{"kind":"Name","value":"section"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"propertyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"propertyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"section"}}]}}]}}]} as unknown as DocumentNode<CreateTenantMutation, CreateTenantMutationVariables>;
export const DeleteTenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTenant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tenantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteTenantMutation, DeleteTenantMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registerInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fullName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"confirmPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmPassword"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateTenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTenant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contact"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"section"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"UpdateTenantDto"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contact"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contact"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"section"},"value":{"kind":"Variable","name":{"kind":"Name","value":"section"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"tenantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"section"}}]}}]}}]} as unknown as DocumentNode<UpdateTenantMutation, UpdateTenantMutationVariables>;
export const GetPaymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPayments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tenantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"isSettled"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]} as unknown as DocumentNode<GetPaymentsQuery, GetPaymentsQueryVariables>;
export const UserWithToalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserWithToals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userWithToals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalProperties"}},{"kind":"Field","name":{"kind":"Name","value":"totalTenants"}}]}}]}}]} as unknown as DocumentNode<UserWithToalsQuery, UserWithToalsQueryVariables>;
export const GetPropertieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPropertie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPropertie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfUnits"}},{"kind":"Field","name":{"kind":"Name","value":"rentalCost"}}]}}]}}]} as unknown as DocumentNode<GetPropertieQuery, GetPropertieQueryVariables>;
export const GetPropertiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProperties"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProperties"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfUnits"}},{"kind":"Field","name":{"kind":"Name","value":"rentalCost"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetPropertiesQuery, GetPropertiesQueryVariables>;
export const GetPropertiesByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPropertiesByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPropertiesByname"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfUnits"}},{"kind":"Field","name":{"kind":"Name","value":"rentalCost"}}]}}]}}]} as unknown as DocumentNode<GetPropertiesByNameQuery, GetPropertiesByNameQueryVariables>;
export const GetTenantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTenants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"propertyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTenants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"propertyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"propertyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"section"}}]}}]}}]} as unknown as DocumentNode<GetTenantsQuery, GetTenantsQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreatePaymentDto = {
  amount: Scalars['Float']['input'];
  datePaid: Scalars['DateTime']['input'];
  isSettled: Scalars['Boolean']['input'];
};

export type CreatePropertieDto = {
  address: Scalars['String']['input'];
  name: Scalars['String']['input'];
  numberOfUnits: Scalars['Float']['input'];
  rentalCost: Scalars['Float']['input'];
  type: Scalars['String']['input'];
};

export type CreateTenantDto = {
  contact: Scalars['String']['input'];
  name: Scalars['String']['input'];
  section: Scalars['String']['input'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  error?: Maybe<ErrorType>;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPayment: Payment;
  createPropertie: Propertie;
  createTenant: Tenant;
  deleteTenant: Tenant;
  login: LoginResponse;
  logout: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  register: RegisterResponse;
  removePayment: Payment;
  updateTenant: Tenant;
};


export type MutationCreatePaymentArgs = {
  createPaymentDto: CreatePaymentDto;
  tenantId: Scalars['Float']['input'];
};


export type MutationCreatePropertieArgs = {
  propertieDto: CreatePropertieDto;
  userId: Scalars['Float']['input'];
};


export type MutationCreateTenantArgs = {
  TenantDto: CreateTenantDto;
  propertyId: Scalars['Float']['input'];
};


export type MutationDeleteTenantArgs = {
  tenantId: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginDto;
};


export type MutationRegisterArgs = {
  registerInput: RegisterDto;
};


export type MutationRemovePaymentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateTenantArgs = {
  UpdateTenantDto: CreateTenantDto;
  tenantId: Scalars['Float']['input'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  datePaid: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isSettled: Scalars['Boolean']['output'];
};

export type Propertie = {
  __typename?: 'Propertie';
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  numberOfUnits: Scalars['Float']['output'];
  rentalCost: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  getPayments: Array<Payment>;
  getPropertie: Propertie;
  getProperties: Array<Propertie>;
  getPropertiesByname: Array<Propertie>;
  getTenants: Array<Tenant>;
  getUsers: Array<User>;
  hello: Scalars['String']['output'];
  payment: Payment;
  userWithToals: UserStatistics;
};


export type QueryGetPaymentsArgs = {
  tenantId: Scalars['Float']['input'];
};


export type QueryGetPropertieArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetPropertiesArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryGetPropertiesBynameArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetTenantsArgs = {
  propertyId: Scalars['Float']['input'];
};


export type QueryPaymentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserWithToalsArgs = {
  userId: Scalars['Float']['input'];
};

export type RegisterDto = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  error?: Maybe<ErrorType>;
  user?: Maybe<User>;
};

export type Tenant = {
  __typename?: 'Tenant';
  contact: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  section: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  image?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserStatistics = {
  __typename?: 'UserStatistics';
  totalProperties: Scalars['Float']['output'];
  totalTenants: Scalars['Float']['output'];
};

export type CreatePaymentMutationVariables = Exact<{
  datePaid: Scalars['DateTime']['input'];
  amount: Scalars['Float']['input'];
  isSettled: Scalars['Boolean']['input'];
  tenantId: Scalars['Float']['input'];
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'Payment', datePaid: any, isSettled: boolean, amount: number } };

export type CreatePropertieMutationVariables = Exact<{
  name: Scalars['String']['input'];
  address: Scalars['String']['input'];
  type: Scalars['String']['input'];
  numberOfUnits: Scalars['Float']['input'];
  rentalCost: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
}>;


export type CreatePropertieMutation = { __typename?: 'Mutation', createPropertie: { __typename?: 'Propertie', id: number, name: string, address: string, type: string, numberOfUnits: number, rentalCost: number } };

export type CreateTenantMutationVariables = Exact<{
  name: Scalars['String']['input'];
  contact: Scalars['String']['input'];
  section: Scalars['String']['input'];
  propertyId: Scalars['Float']['input'];
}>;


export type CreateTenantMutation = { __typename?: 'Mutation', createTenant: { __typename?: 'Tenant', id: number, name: string, contact: string, section: string } };

export type DeleteTenantMutationVariables = Exact<{
  tenantId: Scalars['Float']['input'];
}>;


export type DeleteTenantMutation = { __typename?: 'Mutation', deleteTenant: { __typename?: 'Tenant', name: string } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', user: { __typename?: 'User', id: number, email: string, fullName: string } } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: string };

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  confirmPassword: Scalars['String']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', user?: { __typename?: 'User', id: number, email: string, fullName: string } | null } };

export type UpdateTenantMutationVariables = Exact<{
  name: Scalars['String']['input'];
  contact: Scalars['String']['input'];
  section: Scalars['String']['input'];
  tenantId: Scalars['Float']['input'];
}>;


export type UpdateTenantMutation = { __typename?: 'Mutation', updateTenant: { __typename?: 'Tenant', id: number, name: string, contact: string, section: string } };

export type GetPaymentsQueryVariables = Exact<{
  tenantId: Scalars['Float']['input'];
}>;


export type GetPaymentsQuery = { __typename?: 'Query', getPayments: Array<{ __typename?: 'Payment', id: number, datePaid: any, isSettled: boolean, amount: number }> };

export type UserWithToalsQueryVariables = Exact<{
  userId: Scalars['Float']['input'];
}>;


export type UserWithToalsQuery = { __typename?: 'Query', userWithToals: { __typename?: 'UserStatistics', totalProperties: number, totalTenants: number } };

export type GetPropertieQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetPropertieQuery = { __typename?: 'Query', getPropertie: { __typename?: 'Propertie', id: number, name: string, address: string, type: string, numberOfUnits: number, rentalCost: number } };

export type GetPropertiesQueryVariables = Exact<{
  userId: Scalars['Float']['input'];
}>;


export type GetPropertiesQuery = { __typename?: 'Query', getProperties: Array<{ __typename?: 'Propertie', id: number, name: string, address: string, type: string, numberOfUnits: number, rentalCost: number, createdAt: any, updatedAt: any }> };

export type GetPropertiesByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetPropertiesByNameQuery = { __typename?: 'Query', getPropertiesByname: Array<{ __typename?: 'Propertie', id: number, name: string, address: string, type: string, numberOfUnits: number, rentalCost: number }> };

export type GetTenantsQueryVariables = Exact<{
  propertyId: Scalars['Float']['input'];
}>;


export type GetTenantsQuery = { __typename?: 'Query', getTenants: Array<{ __typename?: 'Tenant', id: number, name: string, contact: string, section: string }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id: number, fullName: string, email: string, image?: string | null }> };


export const CreatePaymentDocument = gql`
    mutation CreatePayment($datePaid: DateTime!, $amount: Float!, $isSettled: Boolean!, $tenantId: Float!) {
  createPayment(
    createPaymentDto: {datePaid: $datePaid, amount: $amount, isSettled: $isSettled}
    tenantId: $tenantId
  ) {
    datePaid
    isSettled
    amount
  }
}
    `;
export type CreatePaymentMutationFn = Apollo.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      datePaid: // value for 'datePaid'
 *      amount: // value for 'amount'
 *      isSettled: // value for 'isSettled'
 *      tenantId: // value for 'tenantId'
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, options);
      }
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = Apollo.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const CreatePropertieDocument = gql`
    mutation CreatePropertie($name: String!, $address: String!, $type: String!, $numberOfUnits: Float!, $rentalCost: Float!, $userId: Float!) {
  createPropertie(
    propertieDto: {name: $name, address: $address, type: $type, numberOfUnits: $numberOfUnits, rentalCost: $rentalCost}
    userId: $userId
  ) {
    id
    name
    address
    type
    numberOfUnits
    rentalCost
  }
}
    `;
export type CreatePropertieMutationFn = Apollo.MutationFunction<CreatePropertieMutation, CreatePropertieMutationVariables>;

/**
 * __useCreatePropertieMutation__
 *
 * To run a mutation, you first call `useCreatePropertieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePropertieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPropertieMutation, { data, loading, error }] = useCreatePropertieMutation({
 *   variables: {
 *      name: // value for 'name'
 *      address: // value for 'address'
 *      type: // value for 'type'
 *      numberOfUnits: // value for 'numberOfUnits'
 *      rentalCost: // value for 'rentalCost'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreatePropertieMutation(baseOptions?: Apollo.MutationHookOptions<CreatePropertieMutation, CreatePropertieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePropertieMutation, CreatePropertieMutationVariables>(CreatePropertieDocument, options);
      }
export type CreatePropertieMutationHookResult = ReturnType<typeof useCreatePropertieMutation>;
export type CreatePropertieMutationResult = Apollo.MutationResult<CreatePropertieMutation>;
export type CreatePropertieMutationOptions = Apollo.BaseMutationOptions<CreatePropertieMutation, CreatePropertieMutationVariables>;
export const CreateTenantDocument = gql`
    mutation CreateTenant($name: String!, $contact: String!, $section: String!, $propertyId: Float!) {
  createTenant(
    TenantDto: {name: $name, contact: $contact, section: $section}
    propertyId: $propertyId
  ) {
    id
    name
    contact
    section
  }
}
    `;
export type CreateTenantMutationFn = Apollo.MutationFunction<CreateTenantMutation, CreateTenantMutationVariables>;

/**
 * __useCreateTenantMutation__
 *
 * To run a mutation, you first call `useCreateTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTenantMutation, { data, loading, error }] = useCreateTenantMutation({
 *   variables: {
 *      name: // value for 'name'
 *      contact: // value for 'contact'
 *      section: // value for 'section'
 *      propertyId: // value for 'propertyId'
 *   },
 * });
 */
export function useCreateTenantMutation(baseOptions?: Apollo.MutationHookOptions<CreateTenantMutation, CreateTenantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTenantMutation, CreateTenantMutationVariables>(CreateTenantDocument, options);
      }
export type CreateTenantMutationHookResult = ReturnType<typeof useCreateTenantMutation>;
export type CreateTenantMutationResult = Apollo.MutationResult<CreateTenantMutation>;
export type CreateTenantMutationOptions = Apollo.BaseMutationOptions<CreateTenantMutation, CreateTenantMutationVariables>;
export const DeleteTenantDocument = gql`
    mutation DeleteTenant($tenantId: Float!) {
  deleteTenant(tenantId: $tenantId) {
    name
  }
}
    `;
export type DeleteTenantMutationFn = Apollo.MutationFunction<DeleteTenantMutation, DeleteTenantMutationVariables>;

/**
 * __useDeleteTenantMutation__
 *
 * To run a mutation, you first call `useDeleteTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTenantMutation, { data, loading, error }] = useDeleteTenantMutation({
 *   variables: {
 *      tenantId: // value for 'tenantId'
 *   },
 * });
 */
export function useDeleteTenantMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTenantMutation, DeleteTenantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTenantMutation, DeleteTenantMutationVariables>(DeleteTenantDocument, options);
      }
export type DeleteTenantMutationHookResult = ReturnType<typeof useDeleteTenantMutation>;
export type DeleteTenantMutationResult = Apollo.MutationResult<DeleteTenantMutation>;
export type DeleteTenantMutationOptions = Apollo.BaseMutationOptions<DeleteTenantMutation, DeleteTenantMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($email: String!, $password: String!) {
  login(loginInput: {email: $email, password: $password}) {
    user {
      id
      email
      fullName
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logout
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($email: String!, $password: String!, $fullName: String!, $confirmPassword: String!) {
  register(
    registerInput: {email: $email, password: $password, fullName: $fullName, confirmPassword: $confirmPassword}
  ) {
    user {
      id
      email
      fullName
    }
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      fullName: // value for 'fullName'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateTenantDocument = gql`
    mutation UpdateTenant($name: String!, $contact: String!, $section: String!, $tenantId: Float!) {
  updateTenant(
    UpdateTenantDto: {name: $name, contact: $contact, section: $section}
    tenantId: $tenantId
  ) {
    id
    name
    contact
    section
  }
}
    `;
export type UpdateTenantMutationFn = Apollo.MutationFunction<UpdateTenantMutation, UpdateTenantMutationVariables>;

/**
 * __useUpdateTenantMutation__
 *
 * To run a mutation, you first call `useUpdateTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTenantMutation, { data, loading, error }] = useUpdateTenantMutation({
 *   variables: {
 *      name: // value for 'name'
 *      contact: // value for 'contact'
 *      section: // value for 'section'
 *      tenantId: // value for 'tenantId'
 *   },
 * });
 */
export function useUpdateTenantMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTenantMutation, UpdateTenantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTenantMutation, UpdateTenantMutationVariables>(UpdateTenantDocument, options);
      }
export type UpdateTenantMutationHookResult = ReturnType<typeof useUpdateTenantMutation>;
export type UpdateTenantMutationResult = Apollo.MutationResult<UpdateTenantMutation>;
export type UpdateTenantMutationOptions = Apollo.BaseMutationOptions<UpdateTenantMutation, UpdateTenantMutationVariables>;
export const GetPaymentsDocument = gql`
    query GetPayments($tenantId: Float!) {
  getPayments(tenantId: $tenantId) {
    id
    datePaid
    isSettled
    amount
  }
}
    `;

/**
 * __useGetPaymentsQuery__
 *
 * To run a query within a React component, call `useGetPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentsQuery({
 *   variables: {
 *      tenantId: // value for 'tenantId'
 *   },
 * });
 */
export function useGetPaymentsQuery(baseOptions: Apollo.QueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(GetPaymentsDocument, options);
      }
export function useGetPaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(GetPaymentsDocument, options);
        }
export type GetPaymentsQueryHookResult = ReturnType<typeof useGetPaymentsQuery>;
export type GetPaymentsLazyQueryHookResult = ReturnType<typeof useGetPaymentsLazyQuery>;
export type GetPaymentsQueryResult = Apollo.QueryResult<GetPaymentsQuery, GetPaymentsQueryVariables>;
export const UserWithToalsDocument = gql`
    query UserWithToals($userId: Float!) {
  userWithToals(userId: $userId) {
    totalProperties
    totalTenants
  }
}
    `;

/**
 * __useUserWithToalsQuery__
 *
 * To run a query within a React component, call `useUserWithToalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserWithToalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserWithToalsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserWithToalsQuery(baseOptions: Apollo.QueryHookOptions<UserWithToalsQuery, UserWithToalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserWithToalsQuery, UserWithToalsQueryVariables>(UserWithToalsDocument, options);
      }
export function useUserWithToalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserWithToalsQuery, UserWithToalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserWithToalsQuery, UserWithToalsQueryVariables>(UserWithToalsDocument, options);
        }
export type UserWithToalsQueryHookResult = ReturnType<typeof useUserWithToalsQuery>;
export type UserWithToalsLazyQueryHookResult = ReturnType<typeof useUserWithToalsLazyQuery>;
export type UserWithToalsQueryResult = Apollo.QueryResult<UserWithToalsQuery, UserWithToalsQueryVariables>;
export const GetPropertieDocument = gql`
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
    `;

/**
 * __useGetPropertieQuery__
 *
 * To run a query within a React component, call `useGetPropertieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPropertieQuery(baseOptions: Apollo.QueryHookOptions<GetPropertieQuery, GetPropertieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPropertieQuery, GetPropertieQueryVariables>(GetPropertieDocument, options);
      }
export function useGetPropertieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertieQuery, GetPropertieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPropertieQuery, GetPropertieQueryVariables>(GetPropertieDocument, options);
        }
export type GetPropertieQueryHookResult = ReturnType<typeof useGetPropertieQuery>;
export type GetPropertieLazyQueryHookResult = ReturnType<typeof useGetPropertieLazyQuery>;
export type GetPropertieQueryResult = Apollo.QueryResult<GetPropertieQuery, GetPropertieQueryVariables>;
export const GetPropertiesDocument = gql`
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
    `;

/**
 * __useGetPropertiesQuery__
 *
 * To run a query within a React component, call `useGetPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertiesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetPropertiesQuery(baseOptions: Apollo.QueryHookOptions<GetPropertiesQuery, GetPropertiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPropertiesQuery, GetPropertiesQueryVariables>(GetPropertiesDocument, options);
      }
export function useGetPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertiesQuery, GetPropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPropertiesQuery, GetPropertiesQueryVariables>(GetPropertiesDocument, options);
        }
export type GetPropertiesQueryHookResult = ReturnType<typeof useGetPropertiesQuery>;
export type GetPropertiesLazyQueryHookResult = ReturnType<typeof useGetPropertiesLazyQuery>;
export type GetPropertiesQueryResult = Apollo.QueryResult<GetPropertiesQuery, GetPropertiesQueryVariables>;
export const GetPropertiesByNameDocument = gql`
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
    `;

/**
 * __useGetPropertiesByNameQuery__
 *
 * To run a query within a React component, call `useGetPropertiesByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertiesByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertiesByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetPropertiesByNameQuery(baseOptions: Apollo.QueryHookOptions<GetPropertiesByNameQuery, GetPropertiesByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPropertiesByNameQuery, GetPropertiesByNameQueryVariables>(GetPropertiesByNameDocument, options);
      }
export function useGetPropertiesByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertiesByNameQuery, GetPropertiesByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPropertiesByNameQuery, GetPropertiesByNameQueryVariables>(GetPropertiesByNameDocument, options);
        }
export type GetPropertiesByNameQueryHookResult = ReturnType<typeof useGetPropertiesByNameQuery>;
export type GetPropertiesByNameLazyQueryHookResult = ReturnType<typeof useGetPropertiesByNameLazyQuery>;
export type GetPropertiesByNameQueryResult = Apollo.QueryResult<GetPropertiesByNameQuery, GetPropertiesByNameQueryVariables>;
export const GetTenantsDocument = gql`
    query GetTenants($propertyId: Float!) {
  getTenants(propertyId: $propertyId) {
    id
    name
    contact
    section
  }
}
    `;

/**
 * __useGetTenantsQuery__
 *
 * To run a query within a React component, call `useGetTenantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTenantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTenantsQuery({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *   },
 * });
 */
export function useGetTenantsQuery(baseOptions: Apollo.QueryHookOptions<GetTenantsQuery, GetTenantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTenantsQuery, GetTenantsQueryVariables>(GetTenantsDocument, options);
      }
export function useGetTenantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTenantsQuery, GetTenantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTenantsQuery, GetTenantsQueryVariables>(GetTenantsDocument, options);
        }
export type GetTenantsQueryHookResult = ReturnType<typeof useGetTenantsQuery>;
export type GetTenantsLazyQueryHookResult = ReturnType<typeof useGetTenantsLazyQuery>;
export type GetTenantsQueryResult = Apollo.QueryResult<GetTenantsQuery, GetTenantsQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    id
    fullName
    email
    image
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;