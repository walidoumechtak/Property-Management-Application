import { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../stores/userStore';
import { useGeneralStore } from '../stores/generalStore';


const ProtectedRoutes = ({ children }: { children: ReactNode}) => {
    const navigate = useNavigate();
    const user = useUserStore((state) => state);
    const setLoginIsOpen = useGeneralStore((state) => state.setLoginIsOpen)

    useEffect(() => {
        if (!user.id) {
            navigate('/');
            setLoginIsOpen(true);
        }
    }, [user.id, navigate, setLoginIsOpen])

    if (!user.id) 
        return <></> ;

    return <> {children} </>;
}

export default ProtectedRoutes;