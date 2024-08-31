import { useGeneralStore } from "../stores/generalStore";
import { ImCross } from "react-icons/im";
import Input from "./Inupt";
import { useState } from "react";
import { GraphQLErrorExtensions } from "graphql";

function PropertieModal() {
    const setIsPropertyModalOpen = useGeneralStore((state) => state.setIsPropertyModalOpen);
    const isPropertyModalOpen = useGeneralStore((state) => state.isPropertyModalOpen);
    const [errors, setErrors] = useState<GraphQLErrorExtensions>({});
    const [addPropertieData, setAddPropertieData] = useState({
        name: "",
        address: "",
        type: "",
        numberOfUnits: 0,
        rentalCost: 0
    });

    const handleAddPropertie = () => {
        //
    }
    
    return (
        <div
            id="AuthModal"
            className="fixed flex items-center justify-center w-full h-full bg-black bg-opacity-50
                       z-50 top-0 left-0"
            >
            <div
                className="bg-white relative w-full max-w-[480px] h-[70%] p-4 rounded-lg"
            >
                <div
                    className="w-full flex justify-end"
                >
                    <button onClick={() => {setIsPropertyModalOpen(!isPropertyModalOpen)}}>
                        <ImCross size={"17"} color="balck"/>
                    </button>
                </div>
            <div className="text-center text-[28px] mb-4 font-bold">Add Propertie</div>
            <div className="px-6 pb-6">
                <Input 
                    placeHolder="Name"
                    InputType="text"
                    max={64}
                    error={errors?.name as string}
                    onChange={(e) => setAddPropertieData({...addPropertieData, name: e.target.value})}
                    autoFocus={false}
                />
            </div>
            <div className="px-6 pb-6">
                <Input 
                    placeHolder="Address"
                    InputType="text"
                    max={64}
                    error={errors?.address as string}
                    onChange={(e) => setAddPropertieData({...addPropertieData, address: e.target.value})}
                    autoFocus={false}
                />
            </div>
            <div className="px-6 pb-6">
                <Input 
                    placeHolder="Number of Units"
                    InputType="number"
                    max={64}
                    error={errors?.numberOfUnits as string}
                    onChange={(e) => setAddPropertieData({...addPropertieData, numberOfUnits: parseInt(e.target.value)})}
                    autoFocus={false}
                />
            </div>
            <div className="px-6 pb-6">
                <Input 
                    placeHolder="Rental Cost"
                    InputType="number"
                    max={64}
                    error={errors?.rentalCost as string}
                    onChange={(e) => setAddPropertieData({...addPropertieData, rentalCost: parseInt(e.target.value)})}
                    autoFocus={false}
                />
            </div>
            <div className="mx-6 mt-2">
                <button
                    disabled={
                        !addPropertieData.name ||
                        !addPropertieData.address ||
                        !addPropertieData.type ||
                        !addPropertieData.numberOfUnits ||
                        !addPropertieData.rentalCost
                    }
                    onClick={handleAddPropertie}
                    className={[
                        "w-full text-[17px] font-semibold text-white py-3 rounded-sm",
                        !addPropertieData.name ||
                        !addPropertieData.address ||
                        !addPropertieData.type ||
                        addPropertieData.numberOfUnits === 0 ||
                        addPropertieData.rentalCost === 0
                          ? "bg-gray-200"
                          : "bg-[#F02C56]",
                      ].join(" ")}
                      >
                    Add Propertie
                </button>   
            </div>
            </div>
        </div>
    );
}

export default PropertieModal;