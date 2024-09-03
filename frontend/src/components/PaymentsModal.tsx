import { useGeneralStore } from "../stores/generalStore";
import { ImCross } from "react-icons/im";
import Input from "./Inupt";
import { useState } from "react";
import { GraphQLErrorExtensions } from "graphql";
import { CreateTenantMutation, GetPaymentsQuery, GetPaymentsQueryVariables } from "../gql/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_TENANT } from "../graphql/mutations/CreateTenant";
import { RiAddLine, RiFilterLine } from "react-icons/ri";
import AddPaymentModal from "./AddPaymentModal";
import { GET_PAYMENTS } from "../graphql/queries/GetPayments";

interface PaymentsModalProps {
    tenantId: number;
}

function PaymentsModal({tenantId}: PaymentsModalProps) {
    
    const isPaymentsModalOpen = useGeneralStore((state) => state.isPaymentsModalOpen);
    const setIsPaymentsModalOpen = useGeneralStore((state) => state.setIsPaymentsModalOpen);

    const isAddPaymentModalOpen = useGeneralStore((state) => state.isAddPaymentModalOpen);
    const setIsAddPaymentModalOpen = useGeneralStore((state) => state.setIsAddPaymentModalOpen);

    const {data, loading, error} = useQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(GET_PAYMENTS, {
        variables: {
            tenantId: tenantId,
        }
    });

   
      
    return (
        <div
            id="paymentModal"
            className="fixed flex items-center justify-center w-full h-full bg-black bg-opacity-50
                       z-50 top-0 left-0"
            >
            <div
                className="bg-white relative w-full max-w-[1200px] h-[90%] p-4 rounded-lg"
            >
                <div
                    className="w-full flex justify-end"
                >
                    <button onClick={() => {setIsPaymentsModalOpen(!isPaymentsModalOpen)}}>
                        <ImCross size={"17"} color="balck"/>
                    </button>
                </div>
            <div className="text-center text-[28px] mb-4 font-bold">Payments</div>
                {/* your code gose here */}
                <div className="w-full p-10">
                    <div className="flex justify-between ">
                        {isAddPaymentModalOpen && <AddPaymentModal tenantId={tenantId}/>}
                        <button
                            onClick={() => setIsAddPaymentModalOpen(!isAddPaymentModalOpen)}
                            className="flex justify-center rounded-full w-[50px] h-[50px] items-center bg-blue-500 text-white px-4 py-2">
                            <RiAddLine size={60}/>
                        </button>
                        <button className="flex rounded-full justify-center w-[50px] h-[50px] items-center bg-gray-500 text-white px-4 py-2">
                            <RiFilterLine size={60} />
                        </button>
                    </div>

                    <div className="mt-10 bg-red-300 relative overflow-auto shadow-md sm:rounded-lg max-h-[400px]">
                        <table className="w-full text-sm text-left rtl:text-right  text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        date paid
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        amount
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        is settled?
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                

                            {data?.getPayments.map((payment) => (
                                <tr key={payment.id} className="odd:bg-white even:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {payment.datePaid}
                                    </th>
                                    <td className="px-6 py-4">
                                        {payment.amount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {payment.isSettled ? "Settled" : "Not Settled"}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentsModal;