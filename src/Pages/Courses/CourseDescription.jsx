import { useLocation } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";

function CourseDescription() {

    const { state } = useLocation();


    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
                <div className="grid grid-cols-2 gap-10 py-10 relative" >
                    <div className="space-y-5" >
                        <img
                            className="w-full h-64 "
                            src={state?.thumbnail?.secure_url}
                            alt="thumbnaile"
                        />
                        <div className="space-y-4">
                            <div className="flex flex-col items-center justify-between text-xl" >
                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">
                                        Total lectures : &nbsp;
                                    </span>
                                    {state?.lectures.length}
                                </p>
                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">
                                        Instructor : &nbsp;
                                    </span>
                                    {state.createdBy}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 text-xl">
                        <h1 className="text-3xl font-semibold text-yellow-500 mb-4 text-center">
                            {state?.title}
                        </h1>
                        <p className="text-yellow-500">
                            Course Description:
                        </p>
                        <p>{state?.description}</p>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default CourseDescription;