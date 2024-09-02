import { useGeneralStore } from "../stores/generalStore";
import { ImCross } from "react-icons/im";
import Input from "./Inupt";
import { useState } from "react";
import { GraphQLErrorExtensions } from "graphql";
import { CreateTenantMutation } from "../gql/graphql";
import { useMutation } from "@apollo/client";
import { CREATE_TENANT } from "../graphql/mutations/CreateTenant";

interface PaymentsModalProps {
    tenantId: number;
}

function PaymentsModal({tenantId}: PaymentsModalProps) {
    
    const isPaymentsModalOpen = useGeneralStore((state) => state.isPaymentsModalOpen);
    const setIsPaymentsModalOpen = useGeneralStore((state) => state.setIsPaymentsModalOpen);

    return (
        <div
            id="AddTenantModal"
            className="fixed flex items-center justify-center w-full h-full bg-black bg-opacity-50
                       z-50 top-0 left-0"
            >
            <div
                className="bg-white relative w-full max-w-[480px] h-[70%] p-4 rounded-lg"
            >
                <div
                    className="w-full flex justify-end"
                >
                    <button onClick={() => {setIsPaymentsModalOpen(!isPaymentsModalOpen)}}>
                        <ImCross size={"17"} color="balck"/>
                    </button>
                </div>
            <div className="text-center text-[28px] mb-4 font-bold">Payments</div>
           
            </div>
        </div>
    );
}

export default PaymentsModal;