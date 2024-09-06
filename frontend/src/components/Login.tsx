import { useMutation } from "@apollo/client";
import { useUserStore } from "../stores/userStore";
import { GraphQLErrorExtensions } from "graphql";
import { useGeneralStore } from "../stores/generalStore";
import { LoginUserMutation } from "../gql/graphql";
import { useState, useEffect } from "react";
import Input from "./Inupt";
import { LOGIN_USER } from "../graphql/mutations/Login";

function Login() {
    const [loginUser, { data, error, loading }] = useMutation<LoginUserMutation>(LOGIN_USER, {
        onError: (err) => {
            // Handle errors directly when they occur
            if (err.graphQLErrors.length) {
                const graphQLError = err.graphQLErrors[0];
                if (graphQLError.message === "Invalid credentials") {
                    setInvalidCredentials("Invalid credentials");
                } else {
                    setErrors(graphQLError.extensions as GraphQLErrorExtensions);
                }
            }
        },
        onCompleted: () => {
            setIsJustRegistered(false); // Close the registration form if login is successful
            setLoginIsOpen(false);
        }
    });
    
    const setUser = useUserStore((state) => state.setUser);
    const setLoginIsOpen = useGeneralStore((state) => state.setLoginIsOpen);
    const [errors, setErrors] = useState<GraphQLErrorExtensions>({});
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [invalidCredentials, setInvalidCredentials] = useState("");   
    const setIsJustRegistered = useGeneralStore((state) => state.setIsJustRegistered);

    const handleLogin = async () => {
        setErrors({});
        setInvalidCredentials("");

        try {
            const response = await loginUser({
                variables: {
                    email: loginData.email,
                    password: loginData.password,
                },
            });

            if (response && response.data) {
                setUser(response.data.login.user);
            }
        } catch (_) {
            // Errors are now handled inside `onError` of useMutation
        }
    };

    return (
        <>
            <div className="text-center text-[28px] mb-4 font-bold">Sign in</div>
            <div className="px-6 pb-6">
                <Input
                    placeHolder="Email"
                    InputType="email"
                    max={64}
                    error={errors?.email as string}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    autoFocus={false}
                />
            </div>
            <div className="px-6 pb-6">
                <Input
                    placeHolder="Password"
                    InputType="password"
                    max={64}
                    error={errors?.password as string}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    autoFocus={false}
                />
            </div>
            <span className="mx-6 text-red-500 font-semibold">{invalidCredentials}</span>
            <div className="mx-6 mt-2">
                <button
                    disabled={!loginData.email || !loginData.password}
                    onClick={handleLogin}
                    className={[
                        "w-full text-[17px] font-semibold text-white py-3 rounded-sm",
                        !loginData.email || !loginData.password ? "bg-gray-200" : "bg-[#F02C56]",
                    ].join(" ")}
                >
                    Login
                </button>
            </div>
        </>
    );
}

export default Login;
