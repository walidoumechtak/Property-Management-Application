import { Link } from "react-router-dom";
import { useState } from "react";
import propertyLogo from '../assets/images/logo.png';
import { GiHouseKeys } from "react-icons/gi";
import {
    AiOutlineSearch,
} from 'react-icons/ai'

import {
    BsFillPersonFill,
} from 'react-icons/bs';
import {GrLogout} from 'react-icons/gr'

import { useGeneralStore } from "../stores/generalStore";
import { useUserStore } from "../stores/userStore";
import { LOGOUT_USER } from "../graphql/mutations/Logout";
import { useMutation, useQuery } from "@apollo/client";
import { GetPropertiesByNameQuery, GetPropertiesByNameQueryVariables, LogoutUserMutation } from "../gql/graphql";
import { GET_PROPERTIES_BY_NAME } from "../graphql/queries/getPropertiesByname";

function TopNav() {

    const isLoginOpen = useGeneralStore((state) => state.isLoginOpen);
    const setLoginIsOpen = useGeneralStore((state) => state.setLoginIsOpen)
    const user = useUserStore((state) => state);
    const setUser = useUserStore((state) => state.setUser);
    const [logoutUser] = useMutation<LogoutUserMutation>(LOGOUT_USER);
    const [showMenu, setShowMenu] = useState(false);
    const [propertieName, setPropertieName] = useState("");
    const {data, error, loading} = useQuery<GetPropertiesByNameQuery, GetPropertiesByNameQueryVariables>(GET_PROPERTIES_BY_NAME, {
        variables: {
            name: propertieName,
        }
    });

    const handleLogout = async () => {
        try{
            await logoutUser();
            setUser({
                id: undefined,
                fullName: "",
                email: "",
                bio: "",
                image: ""
            })
            setLoginIsOpen(true);
        }catch(err) {
            console.log(err)
        }
    }
    
    return (
        <div id="TopNav" className="bg-white fixed z-30 flex items-center w-full border-b h-[61px]">
            <div className={"max-w-[1150px] flex items-center justify-between w-full px-6 mx-auto"}>
                <div className={"w-[80%]"}>
                    <Link to="/">
                    <img
                        src={propertyLogo}
                        width={"100"}
                        height={"100"}
                        alt="logo"
                    />
                    </Link>
                </div>
          <div className="hidden relative md:flex items-center bg-[#F1F1F1] p-1
                rounded-full max-w-[380px] w-full">
             {data?.getPropertiesByname && (
                <div 
                    className={[(propertieName && data.getPropertiesByname.length !== 0) ? 'absolute' : 'hidden',
                        'bg-white shadow-custom w-full top-[50px] rounded-sm p-5 max-w-[380px] max-h-[300px] overflow-auto'].join(" ")}>
                    {propertieName && data.getPropertiesByname.map((property) => (
                        <Link
                            key={property.id}
                            to={`/property/${property.id}`}
                            className="flex items-center gap-3 py-2 px-3 hover:bg-gray-100"
                        >
                            <img
                                src={"https://picsum.photos/200"}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <span className="block text-sm text-[#161724]">
                                    {property.name}
                                </span>
                                <span className="block text-xs text-[#838383]">
                                    {property.address}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            <input
              type="text"
              onChange={(e) => setPropertieName(e.target.value)}
              className="w-full pl-3 my-2 bg-transparent placeholder-[#838383]
                text-[15px] focus:outline-none"
              placeholder="Search properties"
            />
            <div className="px-3 py-1 flex items-center border-l border-l-gray-4">
              <AiOutlineSearch size="20" color="#838383" />
            </div>
          </div>
          {/* end of search input */}
          <div className="flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full">
                {
                    !user.id && (
                        <div className="flex items-center">
                            <button onClick={() => setLoginIsOpen(!isLoginOpen)}
                                className="flex items-center bg-[#F02C56] text-white border
                                rounded-md px-3 py-[6px] min-w-[110px]">
                                <span className="mx-4 font-medium text-[15px]">Login In</span>
                            </button>
                        </div>
                )}
                {/* i think i should check if the user.id === true here.?! */}
                {/* ================================= The profile button section ================================= */}
                <div className="flex items-center">
                    <Link to={"/properties"} className="flex border border-orange-500 cursor-pointer rounded-sm p-1 items-center justify-center mr-6">
                        <GiHouseKeys className="text-orange-500" size={25}/>
                        <div className="font-semibold text-orange-500">
                            Properties
                        </div>
                    </Link>
                    <div className="relative">
                        <button onClick={() => setShowMenu(!showMenu)} className="mt-1">
                            <img 
                                className="rounded-full"
                                width={33}
                                src={!user.image ? "https://picsum.photos/200" : user.image}
                            />
                        </button>
                        {/* drow down menu for profile icon */}
                        <div className={[showMenu ? 'absolute' : 'hidden',
                            'bg-white rounded-lg w-[200px] shadow-xl border top-[46px] -right-2'
                        ].join(" ")}>
                            <Link
                                to={`/profile/${user.id}`}
                                onClick={() => setShowMenu(!showMenu)}
                                className="flex items-center px-3 py-3 hover:bg-gray-100"
                            >
                                <BsFillPersonFill size={20} color="#161724"/>
                                <span className="px-3 text-sm font-semibold text-[#161724]">
                                    Profile
                                </span>
                            </Link>
                            {
                                user.id && (
                                    <div
                                        onClick={handleLogout}
                                        className="flex cursor-pointer border-t items-center px-4 py-3 text-sm text-red-400 hover:bg-gray-100"
                                    >
                                        <GrLogout size={20} className="text-red-400"/>
                                        <span className="px-3 text-sm font-semibold text-red-400">
                                            Logout
                                        </span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    )
}
export default TopNav;