import MainLayout from "../layouts/MainLayout";
import propertyImage from "../assets/images/Property.jpg";
import { useQuery } from "@apollo/client";
import { GetPropertieQuery, GetPropertieQueryVariables } from "../gql/graphql";
import { GET_PROPERTIE } from "../graphql/queries/getPropertie";
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";

function SinglePropertie() {
    const id = window.location.pathname.split("/").pop();
    const {data, error, loading} = useQuery<GetPropertieQuery, GetPropertieQueryVariables>(GET_PROPERTIE, {
        variables: {
            id: Number(id),
        }
    });

    return (
        <MainLayout>
          <div className="bg-gray-50 h-[100vh] w-full pt-[80px] ">
              <div className="flex flex-col mx-auto md:flex-row container bg-white max-w-[1200px] shadow-custom">
                  <div className="md:w-1/2 w-full mr-2">
                    <img src={propertyImage} className="w-full h-full" alt="" />
                  </div>
                  <div className="md:w-1/2 w-full flex p-8 flex-col">
                    <div className="mb-4">
                      <h2 className="font-bold text-[24px]">{data?.getPropertie.name}</h2>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaMapMarkerAlt className="mr-2" color="#9ca3af"/>
                      <p className="text-[18px] text-gray-400">Address: {data?.getPropertie.address}</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaHome className="mr-2" color="#9ca3af"/>
                      <p className="text-[18px] text-gray-400">Type: {data?.getPropertie.type}</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <IoReorderThreeOutline  className="mr-2" color="#9ca3af"/>
                      <p className="text-[18px] text-gray-400">Number of Units: {data?.getPropertie.numberOfUnits}</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaDollarSign className="mr-2" color="#9ca3af"/>
                      <p className="text-[18px] text-gray-400">Rental Cost: {data?.getPropertie.rentalCost}$ /month</p>
                    </div>
                    <div className="w-full flex justify-center mt-5">
                        <button
                          className="bg-red-500 text-white px-6 py-4 font-semibold rounded-sm border border-red-500 hover:bg-white hover:text-red-500">
                          Add new tenant  
                        </button>
                    </div>
                  </div>
              </div>
          </div>
        </MainLayout>
  );
}
export default SinglePropertie;