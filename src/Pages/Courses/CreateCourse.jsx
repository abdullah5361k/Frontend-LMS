import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createNewCourse } from "../../Redux/Slices/CourseSlice";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CreateCourse() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: "",
        previewImage: ""
    })

    function handleImageUpload(e) {
        const uploadImage = e.target.files[0];
        if (uploadImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadImage);
            fileReader.addEventListener("load", function () {
                setUserInput({
                    ...userInput,
                    previewImage: this.result,
                    thumbnail: uploadImage
                })
            })
        }
    }

    function handleUserInput(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();

        if (!userInput.title || !userInput.category || !userInput.createdBy || !userInput.thumbnail || !userInput.description) {
            toast("All fields are madatory");
            return;
        }

        const res = await dispatch(createNewCourse(userInput));
        if (res?.payload?.success) {
            setUserInput({
                title: "",
                category: "",
                createdBy: "",
                description: "",
                thumbnail: "",
                previewImage: ""
            })
            navigate("/courses");
        }
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]" >
                <form
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] shadow-[0_0_10px_black] relative"
                >
                    <Link className="absolute top-8 text-2xl link text-accent cursor-pointer" >
                        <AiOutlineArrowLeft />
                    </Link>
                    <h1 className="text-center text-2xl font-bold" >
                        Create new course
                    </h1>

                    <main className="grid grid-cols-2 gap-x-10" >
                        <div className="gap-y-6s">
                            <div>
                                <label htmlFor="image_upload" className="cursor-pointer">
                                    {userInput.previewImage ? (
                                        <img
                                            className="w-full h-44 m-auto border"
                                            src={userInput.previewImage}
                                            alt="Course image"
                                        />
                                    ) : (
                                        <div className="w-full h-44 m-auto flex items-center justify-center border" >
                                            <h1 className="font-bold text-xl">Please upload course image</h1>
                                        </div>
                                    )}
                                </label>
                                <input
                                    className="hidden"
                                    type="file"
                                    id="image_upload"
                                    accept=".jpg, .jpeg, .png"
                                    name="image_upload"
                                    onChange={handleImageUpload}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="title" className="text-lg font-semibold " >
                                    Course title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="enter course title"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.title}
                                    onChange={handleUserInput}
                                />

                            </div>

                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="createdBy" className="text-lg font-semibold " >
                                    Course Instructor
                                </label>
                                <input
                                    type="text"
                                    name="createdBy"
                                    id="createdBy"
                                    placeholder="enter course instructor"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.createdBy}
                                    onChange={handleUserInput}
                                />

                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="category" className="text-lg font-semibold " >
                                    Category
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="enter course category"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.category}
                                    onChange={handleUserInput}
                                />

                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="description" className="text-lg font-semibold " >
                                    Category
                                </label>
                                <textarea
                                    name="description"
                                    id="description"
                                    placeholder="enter course description"
                                    className="bg-transparent px-2 py-1 h-24 resize-none border"
                                    value={userInput.description}
                                    onChange={handleUserInput}
                                />

                            </div>
                        </div>

                    </main>

                    <button type="submit" className="w-full py-2 rounded-sm font-semibold text-lg cursor-pointer bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300">
                        Create course
                    </button>

                </form>

            </div>
        </HomeLayout>
    )
}

export default CreateCourse;