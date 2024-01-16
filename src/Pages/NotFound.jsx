function NotFound() {
    return (
        <>
            <div className=" h-screen w-full flex flex-col justify-center items-center bg-[#1A2238] " >
                <h1 className="text-9xl font-extrabold text-white tracking-widest " >
                    404
                </h1>
                <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute " >
                    Page not found....
                </div>
            </div>
        </>
    )
}

export default NotFound;