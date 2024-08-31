import MainLayout from "../layouts/MainLayout"
import { RiAddLine, RiFilterLine } from 'react-icons/ri';
import PropertieModal from "../components/PropertieModal"
import { useGeneralStore } from "../stores/generalStore";

function Proporties(){

    const isPropertyModalOpen = useGeneralStore((state) => state.isPropertyModalOpen);
    const setIsPropertyModalOpen = useGeneralStore((state) => state.setIsPropertyModalOpen);

    return (
        <MainLayout>
            {isPropertyModalOpen &&  <PropertieModal /> }
            <div className="pt-[80px] bg-gray-100 h-[100vh] flex justify-center">
                <div className="container p-10 overflow-auto">
                    <div className="max-w-[1140px] bg-gray-50 mx-auto p-10">
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
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Proporties