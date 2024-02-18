import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../Redux/Slices/AuthSlice";
import HomeLayout from "../../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";

function EditProfile() {

    const dispatch = useDispatch();
    const [data, setData] = useState({
        previewImage: "",
        fullName: "",
        avatar: undefined,
        userId: useSelector(state => state?.auth?.data?._id)
    })

    function handleImageUpload(e) {
        e.preventDefault();
        const uploadImage = e.target.files[0];
        if (uploadImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadImage);
            fileReader.addEventListener('load', function () {
                setData({
                    ...data,
                    previewImage: this.result,
                    avatar: uploadImage
                })
            })
        }
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!data.fullName || !data.avatar) {
            toast.error("All fields are mandatory");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", data.fullName);
        formData.append("avatar", data.avatar);

        await dispatch(updateProfile(data.userId, data))

    }


    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]"
                >

                    <h1 className="text-center text-2xl font-semibold">Edit profile</h1>
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {data.previewImage ? (
                            <img
                                className="w-28 h-28 rounded-full m-auto"
                                src={data.previewImage}
                            />
                        ) : (
                            <BsPersonCircle className="w-28 h-28 rounded-full m-auto" />
                        )}
                    </label>
                    <input
                        className="hidden"
                        onChange={handleImageUpload}
                        type="file"
                        id="image_uploads"
                        name="image_uploads"
                        accept=".png, .jpg, .svg, .jpeg"
                    />

                    <div className="flex flex-col gap-1 px-3">
                        <label htmlFor="fullName" className="text-lg font-semibold">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Enter your name"
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-300 transition-all ease-in-out duration-500 rounded-sm cursor-pointer py-2 text-large font-semibold">
                        Update profile
                    </button>
                    <Link to="/user/profile">
                        <p className="link text-accent cursor-pointer flex items-center justify-center w-full">
                            <AiOutlineArrowLeft /> Go back to profile
                        </p>
                    </Link>

                </form>
            </div>
        </HomeLayout>
    )
}

export default EditProfile;