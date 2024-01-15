import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../assets/images/aboutMainImage.png";
import CarouselSlide from "../components/CarouselSlide";
import { celebrity } from "../Constants/CelebrityData";

function AboutUs() {

    return (
        <HomeLayout>
            <div className="pl-20 pt20 flex flex-col text-white" >
                <div className="flex items-center gap-5 mx-10" >
                    <section className="w-1/2 space-y-10 " >
                        <h1 className="text-5xl text-yellow-500 font-semibold " >
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200" >
                            Our goal is to provide the quality and affordable education to the world.
                            We are providing the platform to gain knowledged and share with otherss
                        </p>
                    </section>

                    <div className="w1/2" >
                        <img
                            id="test1"
                            alt="About us image"
                            className="drop-shadow-2xl"
                            src={aboutMainImage}
                        />
                    </div>

                </div>

                <div className="carousel w-1/2 m-auto ">
                    {celebrity && celebrity.map(celeb => <CarouselSlide
                        {...celeb}
                        key={celeb.slideNumber}
                        totalSlide={celebrity.length}
                    />
                    )}



                    {/* <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-2 px-[15%] " >
                            <img src={einstein} className="w-40 h-40 rounded-full border-2 border-gray-100 " />
                            <p className="text-xl text-gray-200" >
                                "Life is like riding a bicycle. To keep your balance, you must keep moving.”
                            </p>
                            <h3 className="text-2xl font-semibold ">Albert Einstein</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%] " >
                            <img src={nelsonMandela} className="w-40 h-40 rounded-full border-2 border-gray-100 " />
                            <p className="text-xl text-gray-200" >
                                "Education is the most powerfull tool you can use to chagne the world"
                            </p>
                            <h3 className="text-2xl font-semibold ">Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%] " >
                            <img src={steveJobs} className="w-40 h-40 rounded-full border-2 border-gray-100 " />
                            <p className="text-xl text-gray-200" >
                                "Quality is more important than quantity. One home run is much better than two doubles."
                            </p>
                            <h3 className="text-2xl font-semibold ">Steve Jobs</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%] " >
                            <img src={billGates} className="w-40 h-40 rounded-full border-2 border-gray-100 " />
                            <p className="text-xl text-gray-200" >
                                “Success is a lousy teacher. It seduces smart people into thinking they can’t lose.”
                            </p>
                            <h3 className="text-2xl font-semibold ">Bill Gates</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%] " >
                            <img src={apj} className="w-40 h-40 rounded-full border-2 border-gray-100 " />
                            <p className="text-xl text-gray-200" >
                                “If you want to shine like a sun, first burn like a sun.”
                            </p>
                            <h3 className="text-2xl font-semibold ">APJ Abdul Kalam</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </HomeLayout>
    )
}

export default AboutUs;