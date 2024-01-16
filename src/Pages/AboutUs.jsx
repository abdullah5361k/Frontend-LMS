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
                </div>

            </div>
        </HomeLayout>
    )
}

export default AboutUs;