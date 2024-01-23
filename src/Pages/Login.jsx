import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { login } from "../Redux/Slices/AuthSlice";

function Login() {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleUserInput(e) {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    async function onLogin(e) {
        e.preventDefault();
        if (!loginData.email || !loginData.password) {
            toast.error("Please fill all the fields");
        }

        // Dispatch create acacount
        const response = await dispatch(login(loginData));
        if (response?.payload?.success) {
            navigate("/");
        }

        setLoginData({
            email: "",
            password: "",
        });
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[90vh] " >
                <form noValidate onSubmit={onLogin} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black] " >
                    <h1 className="text-center text-2xl font-bold " >Login Page</h1>

                    <div className="flex flex-col gap-1 " >
                        <label htmlFor="email" className="font-semibold" >Email</label>
                        <input
                            className="bg-transparent px-2 py-1 border "
                            type="email"
                            required
                            name="email"
                            placeholder="enter your email"
                            onChange={handleUserInput}
                            value={loginData.email}
                        />
                    </div>

                    <div className="flex flex-col gap-1 " >
                        <label htmlFor="password" className="font-semibold" >Password</label>
                        <input
                            className="bg-transparent px-2 py-1 border "
                            type="password"
                            required
                            name="password"
                            placeholder="enter your email"
                            onChange={handleUserInput}
                            value={loginData.password}
                        />
                    </div>

                    <button type="submit" className="mt-3 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold " >
                        Login
                    </button>

                    <p className="text-center" >Don't have an account? <Link to="/signup" className="link cursor-pointer text-blue-300 " >Signup</Link> </p>

                </form>
            </div>
        </HomeLayout>
    )
}

export default Login;