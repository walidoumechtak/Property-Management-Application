import MainLayout from "../layouts/MainLayout"
import { RiAddLine, RiFilterLine } from 'react-icons/ri';
import PropertieModal from "../components/PropertieModal"
import { useGeneralStore } from "../stores/generalStore";
import { useUserStore } from "../stores/userStore";
import { GET_PROPERTIES } from "../graphql/queries/getProperties";
import { GetPropertiesQuery, GetPropertiesQueryVariables } from "../gql/graphql";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Proporties(){

    const user = useUserStore();
    const navigate = useNavigate();
    const isPropertyModalOpen = useGeneralStore((state) => state.isPropertyModalOpen);
    const setIsPropertyModalOpen = useGeneralStore((state) => state.setIsPropertyModalOpen);
    const { data, error, loading } = useQuery<GetPropertiesQuery, GetPropertiesQueryVariables>(GET_PROPERTIES, {
        variables: {
            userId: user.id || 1,
        }
    });

    useEffect(() => {
        console.log("User: --->", user.fullName, user.id);
        console.log("Data: --->", data);
    }, []);

    return (
        <MainLayout>
            {isPropertyModalOpen &&  <PropertieModal /> }
            {loading ? <div>Loading...</div> : 
                <div className="pt-[80px] bg-gray-100 h-[100vh] flex justify-center overflow-auto">
                    <div className="container p-10">
                        <div className="max-w-[1140px] max-h-[90vh] bg-gray-50 mx-auto p-10">
                            <div className="flex justify-between">
                                <button
                                    onClick={() => setIsPropertyModalOpen(!isPropertyModalOpen)}
                                    className="flex justify-center rounded-full w-[50px] h-[50px] items-center bg-blue-500 text-white px-4 py-2">
                                    <RiAddLine size={60}/>
                                </button>
                                <button className="flex rounded-full justify-center w-[50px] h-[50px] items-center bg-gray-500 text-white px-4 py-2">
                                    <RiFilterLine size={60} />
                                </button>
                            </div>
                            {/* <div className="flex justify-between mt-5 bg-red-200"> */}
                            <div className="w-full mx-auto max-w-4xl max-h-[400px] overflow-auto p-2 mt-5  border border-gray-200 rounded-lg shadow-custom sm:p-8 ">
                                <div className="flow-root">
                                    <ul role="list" className="divide-y divide-gray-200">
                                {
                                    data?.getProperties.length === 0 ? <div>No properties found</div> :
                                    data?.getProperties.map((propertie) => (
                                        <li onClick={() => navigate(`/properties/${propertie.id}`)} key={propertie.id} className="py-3 sm:py-4 cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="w-20 h-20 rounded-full" src="https://picsum.photos/200" alt="Neil image" />
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate ">
                                                    {propertie.name}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate ">
                                                    {propertie.address}
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                {propertie.rentalCost}$ / month
                                            </div>
                                        </div>
                                    </li>
                                    ))
                                }   
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </MainLayout>
    )
}

export default Proporties