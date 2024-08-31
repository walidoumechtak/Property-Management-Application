import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useUserStore } from "../stores/userStore";
// import backgroundImage from '../assets/images/background.jpg';

// const LandingPage = () => {
//     const backgroundStyle = {
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh', // Full screen height
//       width: '100vw', // Full screen width
//     };
// };

function Home() {
    const user = useUserStore((state) => state);
    const navigate = useNavigate();
    return (
        <MainLayout>
            <div className={`h-[100vh] flex justify-center bg-gray-100`}>
                <div className="flex flex-col w-[calc(100vw-230px)] pt-[90px] items-center max-w-[1240px] justify-center">
                    <div className="pb-10 flex items-end">
                        <h1 className="text-7xl pr-4 font-bold">Welcome </h1>
                        <h2 className="text-4xl font-semibold text-red-300">{user.fullName}</h2>
                    </div>

                    <div className="w-full">
                        <p className="text-black text-center">
                            PropertyHub is your all-in-one solution for effortlessly managing your properties,
                            tenants, and rental payments. Whether you're a landlord or a property manager, 
                            our app streamlines the process, giving you complete control and visibility over your 
                            real estate assets. With intuitive features and powerful tools, RentEase ensures that 
                            managing your properties is easier, more efficient, and stress-free. From adding new 
                            properties to tracking tenant payments, RentEase has got you covered. Start optimizing your property management today!
                        </p>
                    </div>

                    <div>
                        <button
                            onClick={() => navigate('/properties')}
                            className="mt-10 bg-red-500 text-white font-bold py-4 px-6 rounded border border-red-600
                            hover:bg-white hover:text-red-600  transition">
                            Manage your Properties
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Home;