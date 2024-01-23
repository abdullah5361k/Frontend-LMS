import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import HomeLayout from "../Layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/Slices/AuthSlice";
import { isEmail, checkPassword } from "../Helpers/RegexMatch";

function Signup() {

    const [previewImage, setPreviewImage] = useState("");
    const [signupData, setSignupData] = useState({
        fullName: "",
        email: "",
        password: "",
        avatar: ""
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleUserInput(e) {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value
        })
    }

    function getImage(e) {
        e.preventDefault();
        const uploadImage = e.target.files[0];
        if (uploadImage) {
            setSignupData({
                ...signupData,
                avatar: uploadImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadImage);
            fileReader.addEventListener("load", function () {
                setPreviewImage(this.result);
            })
        }
    }

    async function createNewAccount(e) {
        e.preventDefault();
        if (!signupData.email || !signupData.password || !signupData.fullName || !signupData.avatar) {
            toast.error("Please fill all the fields");
        }

        if (!isEmail(signupData.email)) {
            toast.error("Invalid email");
            return;
        }

        if (!checkPassword(signupData.password)) {
            toast.error("Password should be atleast 6 - 16 charcter long");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", signupData.fullName);
        formData.append("email", signupData.email);
        formData.append("password", signupData.password);
        formData.append("avatar", signupData.avatar);


        // Dispatch create acacount
        const response = await dispatch(createAccount(signupData));
        if (response?.payload?.success) {
            navigate("/");
        }

        setSignupData({
            fullName: "",
            email: "",
            password: "",
            avatar: ""
        });
        setPreviewImage("");


    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[90vh] " >
                <form noValidate onSubmit={createNewAccount} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black] " >
                    <h1 className="text-center text-2xl font-bold " >Registration Page</h1>

                    <label htmlFor="image_uploads" className="cursor-pointer" >
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto " />
                        )}
                    </label>
                    <input
                        className="hidden"
                        type="file"
                        name="image_uploads"
                        id="image_uploads"
                        onChange={getImage}
                        accept=".jpj, .jpeg, .png, .svg"
                    />

                    <div className="flex flex-col gap-1 " >
                        <label htmlFor="fullName" className="font-semibold" >Name</label>
                        <input
                            className="bg-transparent px-2 py-1 border "
                            type="text"
                            required
                            name="fullName"
                            id="fullName"
                            placeholder="enter your name"
                            onChange={handleUserInput}
                            value={signupData.fullName}
                        />
                    </div>

                    <div className="flex flex-col gap-1 " >
                        <label htmlFor="email" className="font-semibold" >Email</label>
                        <input
                            className="bg-transparent px-2 py-1 border "
                            type="email"
                            required
                            name="email"
                            placeholder="enter your email"
                            onChange={handleUserInput}
                            value={signupData.email}
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
                            value={signupData.password}
                        />
                    </div>

                    <button type="submit" className="mt-3 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold " >
                        Create account
                    </button>

                    <p className="text-center" >Already have an account? <Link to="/login" className="link cursor-pointer text-blue-300 " >Login</Link> </p>

                </form>
            </div>
        </HomeLayout>
    )
}

export default Signup;