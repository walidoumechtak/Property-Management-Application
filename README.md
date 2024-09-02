# Property Management Application

This repository contains the source code for the Property Management Application, which provides a set of APIs for managing properties.

## APIs

The following APIs are available in this application:

 @Mutation(() => RegisterResponse)
 register()

 login() check if the user exists in the database and if the password is correct.
 If the user exists and the password is correct, the login() method will return a token.
 @Mutation(() => LoginResponse)
 async login()


 The logout() method will clear the cookie that contains the refresh token.
 @Mutation(() => String)
 async logout()

 refreshToken() will be used to refresh the access token. 
 @Mutation(() => String)
 async refreshToken()

 getUsers() will return all users from the database.
 @Query(() => [User])
 async getUsers()

 ###############################################################

 Properties:

 Create a new propertie
    @Mutation(() => Propertie)
    async createPropertie()

 Get all the properties from db
    @Query(() => [Propertie])
    async getProperties()

 Get one record (propertie) from db
    @Query(() => Propertie)
    async getPropertie()

 Get all the properties that match a pattern used for search input
    @Query(() => [Propertie])
    asyn getPropertiesByname()

 ###############################################################

 Tenants:

 Create a new Tenant:
    @Mutation(() => Tenant)
    async createTenant()

 Update a tenant:
    @Mutation(() => Tenant)
    async updateTenant()
 
 Get all tenants:
    @Query(() => [Tenant])
    async getTenants()

 Delete a tenatn:
    @Mutation(() => Tenant)
    async deleteTenant()


## Example of how use graphql (we will take a mutation as example)

 1- need to create a mutation in the frontend something like this:

    ```typescript
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
    ```
 2- calle it in you component:

    ```typescript
        const [addTenant, {data, error, loading}] = useMutation<CreateTenantMutation>(CREATE_TENANT);
        const [tenantData, setTenantData] = useState({
            name: "",
            contact: "",
            section: ""
    });

    const tenant = await addTenant({
            variables: {
                name: tenantData.name,
                contact: tenantData.contact,
                section: tenantData.section,
                propertyId: propertyId ? Number(propertyId) : 0,    
            }
    })
    ```

## Installation

To install and run the Property Management Application, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/Property-Management-Application.git`
2. Navigate to the project directory: `cd Property-Management-Application`
3. Create folder called db or run `mkdir db`
4. Build the Docker image: `docker-compose build`
5. Start the application: `docker-compose up`
6. run this cmd `docker exec backend npx prisma migrate dev --name init`

Make sure to configure the necessary environment variables before running the application.

backend --> .env should containe:
    DATABASE_URL="postgresql://user:pass@database:5432/db"
    ACCESS_TOKEN_SECRET="secret"
    REFRESH_TOKEN_SECRET="secret"
