import { useQuery } from "@apollo/client";
import MainLayout from "../layouts/MainLayout";
import { useUserStore } from "../stores/userStore";
import { UserWithToalsQuery } from "../gql/graphql";
import { GET_USER_TOTAL_INFO } from "../graphql/queries/GetUserTotalInfo";
import { useEffect } from "react";

function Profile() {
    const user = useUserStore();
    const {data, error, loading} = useQuery<UserWithToalsQuery>(GET_USER_TOTAL_INFO, {
        variables: {
            userId: user.id
        },
        fetchPolicy: "network-only",
    });
    useEffect(() => {
        
    }, [data, user.id, error, loading]);
    return (
        <MainLayout>
            <div className="w-full h-[100vh] flex justify-center items-center">
                <div className="flex p-10 max-w-[1200px] max-h-[700px] rounded-lg shadow-custom bg-gray-50">
                    {/* ------ image section ------ */}
                    <div className="bg-white flex p-6 flex-col justify-center items-center w-[300px] shadow-custom">
                        <img src="https://picsum.photos/200" alt="profile pictures" className="rounded-full" width={"100px"} height={"100px"}/>
                        <div className="flex flex-col items-center mt-4">
                            <h3>{user.fullName}</h3>
                            <div className="text-gray-500">
                                {user.email}
                            </div>
                        </div>
                    </div>
                    {/* ----- infos section ------- */}
                    <div className="ml-5 shadow-custom">
                        <table className="w-full text-sm text-left rtl:text-right  text-gray-500 ">
                            <tbody>
                                <tr className="odd:bg-white even:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Full Name : 
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.fullName}
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Email :
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Total Properties : 
                                    </th>
                                    <td className="px-6 py-4">
                                        {data?.userWithToals.totalProperties}
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Total Tenants : 
                                    </th>
                                    <td className="px-6 py-4">
                                    {data?.userWithToals.totalTenants}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Profile;