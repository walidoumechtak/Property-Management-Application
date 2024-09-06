import { useGeneralStore } from "../stores/generalStore";
import { ImCross } from "react-icons/im";
import Input from "./Inupt";
import { useEffect, useState } from "react";
import { GraphQLErrorExtensions } from "graphql";
import { GetSingleTenantQuery, GetSingleTenantQueryVariables, UpdateTenantMutation } from "../gql/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_TENANT } from "../graphql/mutations/UpdateTenant";
import { GET_SINGL_TENANT } from "../graphql/queries/GetSinglTenant";

interface UpdateTenantModalProps {
    tenantId: number;
}

function UpdateTenantModal(tenantId: UpdateTenantModalProps) {
    const setIsUpdateTenantModalOpen = useGeneralStore((state) => state.setIsUpdateTenantModalOpen);
    const isUpdateTenantModalOpen = useGeneralStore((state) => state.isUpdateTenantModalOpen);
    const [errors, setErrors] = useState<GraphQLErrorExtensions>({});
    const [updateTenant, {data, error, loading}] = useMutation<UpdateTenantMutation>(UPDATE_TENANT);
    const oldTenantData = useQuery<GetSingleTenantQuery, GetSingleTenantQueryVariables>(GET_SINGL_TENANT, {
        variables: {
            tenantId: tenantId.tenantId,
        },
    });
    const extractedOldData = oldTenantData.data?.getSingleTenant;
    const [tenantData, setTenantData] = useState({
        name: extractedOldData?.name ? extractedOldData?.name : "",
        contact: extractedOldData?.contact ? extractedOldData?.contact : "",
        section: extractedOldData?.section ? extractedOldData?.section : "",   
    });

    useEffect(() => {
        if (isUpdateTenantModalOpen) {
            setTenantData({
                name: extractedOldData?.name ? extractedOldData?.name : "",
                contact: extractedOldData?.contact ? extractedOldData?.contact : "",
                section: extractedOldData?.section ? extractedOldData?.section : "",
            });
        }
    }, [isUpdateTenantModalOpen, extractedOldData]);

    // const propertyId = window.location.pathname.split("/").pop();

    const handleUpdateTenant = async () => {
        console.log("tenantId: ", tenantId);
        console.log("tenantData: ", tenantData);

        setErrors({});
        const tenant = await updateTenant({
            variables: {
                name: tenantData.name,
                contact: tenantData.contact,
                section: tenantData.section,
                tenantId: tenantId.tenantId,
            },
            refetchQueries: ["GetTenants"],
            onCompleted: () => {
                console.log("tenant added: --->", data);
            },
        }).catch(err => {
            setErrors(err.graphQLErrors[0].extensions);
        })
        if (tenant) {
            setIsUpdateTenantModalOpen(!isUpdateTenantModalOpen);
            console.log("is Tenant Modal open:" ,isUpdateTenantModalOpen)
        }
    }
    
    return (
        <div
            id="UpdateTenantModal"
            className="fixed flex items-center justify-center w-full h-full bg-black bg-opacity-50
                       z-50 top-0 left-0"
            >
            <div
                className="bg-white relative w-full max-w-[480px] h-[70%] p-4 rounded-lg"
            >
                <div
                    className="w-full flex justify-end"
                >
                    <button onClick={() => {setIsUpdateTenantModalOpen(!isUpdateTenantModalOpen)}}>
                        <ImCross size={"17"} color="balck"/>
                    </button>
                </div>
            <div className="text-center text-[28px] mb-4 font-bold">Add Tenant</div>
            <div className="px-6 pb-6">
                <Input 
                    placeHolder="Name"
                    InputType="text"
                    max={64}
                    error={errors?.name as string}
                    onChange={(e) => setTenantData({...tenantData, name: e.target.value})}
                    autoFocus={false}
                    value={tenantData.name}
                />
            </div>
            <div className="px-6 pb-6">
                <Input 
                    placeHolder="Contact (email or phone)"
                    InputType="text"
                    max={64}
                    error={errors?.contact as string}
                    onChange={(e) => setTenantData({...tenantData, contact: e.target.value})}
                    autoFocus={false}
                    value={tenantData.contact}
                />
            </div>
            <div className="px-6 pb-6">
                <Input 
                    placeHolder="Section (e.g., Unit 3A, Apartment 101"
                    InputType="text"
                    max={64}
                    error={errors?.section as string}
                    onChange={(e) => setTenantData({...tenantData, section: e.target.value})}
                    autoFocus={false}
                    value={tenantData.section}
                />
            </div>
            <div className="mx-6 mt-2">
                <button
                    disabled={
                        !tenantData.name ||
                        !tenantData.contact ||
                        !tenantData.section
                    }
                    onClick={handleUpdateTenant}
                    className={[
                        "w-full text-[17px] font-semibold text-white py-3 rounded-sm",
                        !tenantData.name ||
                        !tenantData.contact ||
                        !tenantData.section
                          ? "bg-gray-200"
                          : "bg-[#F02C56]",
                      ].join(" ")}
                      >
                    Update Tenant
                </button>   
            </div>
            </div>
        </div>
    );
}

export default UpdateTenantModal;