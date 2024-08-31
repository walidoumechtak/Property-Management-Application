import MainLayout from "../layouts/MainLayout";
import backgroundImage from '../assets/images/background.jpg';

const LandingPage = () => {
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', // Full screen height
      width: '100vw', // Full screen width
    };
};

function Home() {
    return (  
        <div className={`w-full h-[100vh] `}>
            <MainLayout>
                Home
            </MainLayout>
        </div>
    );
}

export default Home;