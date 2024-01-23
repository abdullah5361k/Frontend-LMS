import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import toast from "react-hot-toast";
import { isEmail } from "../Helpers/RegexMatch";

function Contact() {

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handleInputChange(e) {
        const { name, value } = e.target;
        console.log(name, value)
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    function onFormSubmit(e) {
        e.preventDefault();
        console.log(e);
        if (!userInput.name || !userInput.email || !userInput.message) {
            toast.error("All fields are mandator!");
            return;
        }

        if (!isEmail(userInput.email)) {
            toast.error("Invalid email");
            return;
        }
    }

    return (
        <HomeLayout>
            <div className="h-[90vh] flex items-center justify-center" >
                <form
                    noValidate
                    onSubmit={onFormSubmit}
                    className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]" >
                    <h1 className="text-3xl font-semibold" >
                        Contact From
                    </h1>
                    <div className="flex flex-col w-full gap-1" >
                        <label htmlFor="name" className="text-xl font-semibold" >
                            Name
                        </label>
                        <input
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="enter your name"
                            onChange={handleInputChange}
                        />

                    </div>
                    <div className="flex flex-col w-full gap-1" >
                        <label htmlFor="email" className="text-xl font-semibold" >
                            Email
                        </label>
                        <input
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="enter your email"
                            onChange={handleInputChange}
                        />

                    </div>
                    <div className="flex flex-col w-full gap-1" >
                        <label htmlFor="message" className="text-xl font-semibold" >
                            Message
                        </label>
                        <textarea
                            className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
                            id="message"
                            name="message"
                            placeholder="enter your message"
                            onChange={handleInputChange}
                        />

                    </div>
                    <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 rounded-sm py-2 font-semibold text-lg cursor-pointer " >
                        Submit
                    </button>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Contact;