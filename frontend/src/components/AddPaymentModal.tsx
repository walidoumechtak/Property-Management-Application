import { useGeneralStore } from "../stores/generalStore";
import { ImCross } from "react-icons/im";
import Input from "./Inupt";
import { useState } from "react";
import { GraphQLErrorExtensions } from "graphql";
import { CreatePaymentMutation, CreatePaymentMutationVariables } from "../gql/graphql";
import { useMutation } from "@apollo/client";
import { CREATE_PAYMENT } from "../graphql/mutations/CreatePayment";

interface AddPaymentModalProps {
    tenantId: number;
}

function AddPaymentModal({tenantId}: AddPaymentModalProps) {
    const setIsAddPaymentModal = useGeneralStore((state) => state.setIsAddPaymentModalOpen);
    const isAddPaymentModalOpen = useGeneralStore((state) => state.isAddPaymentModalOpen);
    const [errors, setErrors] = useState<GraphQLErrorExtensions>({});
    // const [addPayment] = useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CREATE_PAYMENT);
    const [addPayment] = useMutation<CreatePaymentMutation>(CREATE_PAYMENT);
    const [paymentData, setpaymentData] = useState({
        datePaid: new Date(),
        isSettled: false,
        amount: 0,
    });

    const handleAddTenant = async () => {
        setErrors({});
        console.log("paymentData: --->", paymentData);
        const payment = await addPayment({
            variables: {
                datePaid: paymentData.datePaid,
                isSettled: paymentData.isSettled,
                amount: paymentData.amount,
                tenantId: tenantId ? Number(tenantId) : 0,    
            },
            refetchQueries: ["GetPayments"],
        }).catch(err => {
            if (err?.graphQLErrors)
                setErrors(err?.graphQLErrors[0]?.extensions);
            console.log("error: --->", err);
        })
        if (payment) {
            setIsAddPaymentModal(!isAddPaymentModalOpen);
            console.log("is Tenant Modal open:" ,isAddPaymentModalOpen)
        }
    }
    
    return (
        <div
            id="AddPaymentModal"
            className="fixed flex items-center justify-center w-full h-full bg-black bg-opacity-50
                       z-50 top-0 left-0"
            >
            <div
                className="bg-white relative w-full max-w-[480px]  p-10 pb-20 rounded-lg"
            >
                <div
                    className="w-full flex justify-end"
                >
                    <button onClick={() => {setIsAddPaymentModal(!isAddPaymentModalOpen)}}>
                        <ImCross size={"17"} color="balck"/>
                    </button>
                </div>
            <div className="text-center text-[28px] mb-4 font-bold">Add Payment</div>
            <div className="px-6 pb-6">
                <Input 
                    placeHolder="date paid"
                    InputType="date"
                    max={64}
                    error={errors?.datePaid as string}
                    onChange={(e) => setpaymentData({...paymentData, datePaid: new Date(e.target.value)})}
                    autoFocus={false}
                />
            </div>
            <div className="px-6 pb-6">
                <Input 
                    placeHolder="amount"
                    InputType="number"
                    max={64}
                    error={errors?.amount as string}
                    onChange={(e) => setpaymentData({...paymentData, amount: parseInt(e.target.value)})}
                    autoFocus={false}
                />
            </div>
            <div className="px-6 pb-6">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={paymentData.isSettled}
                        onChange={(e) => setpaymentData({...paymentData, isSettled: e.target.checked})}
                        className="mr-2"
                    />
                    Is Settled?
                </label>
            </div>
            <div className="mx-6 mt-2">
                <button
                    disabled={
                        !paymentData.datePaid ||
                        !paymentData.amount
                    }
                    onClick={handleAddTenant}
                    className={[
                        "w-full text-[17px] font-semibold text-white py-3 rounded-sm",
                        !paymentData.datePaid ||
                        !paymentData.amount
                          ? "bg-gray-200"
                          : "bg-[#F02C56]",
                      ].join(" ")}
                      >
                    Add Payment
                </button>   
            </div>
            </div>
        </div>
    );
}

export default AddPaymentModal;