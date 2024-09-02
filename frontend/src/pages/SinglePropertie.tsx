import MainLayout from "../layouts/MainLayout";
import propertyImage from "../assets/images/Property.jpg";
import { useMutation, useQuery } from "@apollo/client";
import { DeleteTenantMutation, GetPropertieQuery, GetPropertieQueryVariables, GetTenantsQuery, GetTenantsQueryVariables, UpdateTenantMutation } from "../gql/graphql";
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useGeneralStore } from "../stores/generalStore";
import AddTenantModal from "../components/AddTenantModal";
import { GET_TENANTS } from "../graphql/queries/getTenants";
import { useNavigate } from "react-router-dom";
import { GET_PROPERTIE } from "../graphql/queries/getPropertie";
import { UPDATE_TENANT } from "../graphql/mutations/UpdateTenant";
import { DELETE_TENANT } from "../graphql/mutations/DeleteTenant";
import UpdateTenantModal from "../components/UpdateTenantModal";
import PaymentsModal from "../components/PaymentsModal";

function SinglePropertie() {
    let id = window.location.pathname.split("/").pop();
    const isAddTenantModalOpen = useGeneralStore((state) => state.isAddTenantModalOpen);
    const isUpdateTenantModalOpen = useGeneralStore((state) => state.isUpdateTenantModalOpen);
    const setIsUpdateTenantModalOpen = useGeneralStore((state) => state.setIsUpdateTenantModalOpen);
    const isPaymentsModalOpen = useGeneralStore((state) => state.isPaymentsModalOpen);
    const setIsPaymentsModalOpen = useGeneralStore((state) => state.setIsPaymentsModalOpen);
    const {data, error, loading} = useQuery<GetPropertieQuery, GetPropertieQueryVariables>(GET_PROPERTIE, {
      variables: {
          id: id ? Number(id) : 0,
      }
    });
    let tenatns;
    // const [updateTenant] = useMutation<UpdateTenantMutation>(UPDATE_TENANT);
    const [deleteTenant] = useMutation<DeleteTenantMutation>(DELETE_TENANT,
      {
        refetchQueries: [
          {
          query: GET_TENANTS,
            variables: {
              propertyId: id ? Number(id) : 0,
            }
          }
      ]
      }
    );
    
    tenatns = useQuery<GetTenantsQuery, GetTenantsQueryVariables>(GET_TENANTS, {
        variables: {
            propertyId: id ? Number(id) : 0,
        }
    });

    return (
        <MainLayout>
          { isAddTenantModalOpen && <AddTenantModal />}
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
                          onClick={() => {useGeneralStore.getState().setIsAddTenantModalOpen(true)}}
                          className="bg-red-500 text-white px-6 py-4 font-semibold rounded-sm border border-red-500 hover:bg-white hover:text-red-500">
                            Add new tenant  
                        </button>
                    </div>
                  </div>
              </div>

              {/* ========== show all the tenants ============ */}
              <div className="w-full mx-auto max-w-4xl max-h-[300px] overflow-auto p-3 mt-5 rounded-lg shadow-custom sm:p-8 ">
                  <div className="text-center mb-4 text-red-400 font-bold">List of Tenants</div>
                  <div className="flow-root">
                      <ul role="list">
                  {
                      tenatns.data?.getTenants.length === 0 ? <div>No tenant found</div> :
                      tenatns.data?.getTenants.map((tenant) => (
                          <li key={tenant.id} className=" border p-4 mb-3 sm:py-4 cursor-pointer">
                          <div className="flex items-center">
                              <div className="flex-shrink-0">
                                  <img className="w-20 h-20 rounded-full" src="https://picsum.photos/200" alt="Neil image" />
                              </div>
                              <div className="flex-1 min-w-0 ms-4">
                                  <p className="text-sm font-medium text-gray-900 truncate ">
                                      {tenant.name}
                                  </p>
                                  <p className="text-sm text-gray-500 truncate ">
                                      {tenant.contact}
                                  </p>
                              </div>
                              <div className="flex items-center text-base  text-gray-900 ">
                                  <div className="font-semibold mr-2">Section: </div>
                                  <div className="text-gray-400">{tenant.section}</div>
                              </div>
                              <div className="ml-10">
                                <button 
                                  onClick={() => deleteTenant({
                                    variables: {
                                      tenantId: tenant.id,
                                    }
                                  })}
                                  className="bg-red-500 mr-4 text-white px-3 py-2 font-semibold rounded-sm border border-red-500 hover:bg-white hover:text-red-500">
                                    Remove
                                </button>
                                { isUpdateTenantModalOpen && <UpdateTenantModal tenantId={tenant.id} />}
                                <button 
                                  onClick={() => setIsUpdateTenantModalOpen(!isUpdateTenantModalOpen)}
                                  className="bg-green-500 mr-4 text-white px-3 py-2 font-semibold rounded-sm border border-green-500 hover:bg-white hover:text-green-500">
                                    Edit
                                </button>
                                {isPaymentsModalOpen && <PaymentsModal tenantId={tenant.id} />}
                                <button
                                  onClick={() => setIsPaymentsModalOpen(!isPaymentsModalOpen)}
                                  className="bg-blue-500 text-white px-3 py-2 font-semibold rounded-sm border border-blue-500 hover:bg-white hover:text-blue-500"
                                >
                                  Payments
                                </button>
                              </div>
                          </div>
                      </li>
                      ))
                  }   
                      </ul>
                  </div>
              </div>
          </div>
        </MainLayout>
  );
}
export default SinglePropertie;