function CarouselSlide({ image, name, quote, slideNumber, totalSlide }) {
    return (
        <div id={`slide${slideNumber}`} className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-2 px-[15%] " >
                <img src={image} className="w-40 h-40 rounded-full border-2 border-gray-100 " />
                <p className="text-xl text-gray-200" >
                    {quote}
                </p>
                <h3 className="text-2xl font-semibold ">{name}</h3>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${slideNumber == 1 ? totalSlide : (slideNumber - 1)}`} className="btn btn-circle">❮</a>
                    <a href={`#slide${slideNumber != totalSlide ? (slideNumber + 1) : 1}`} className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

export default CarouselSlide;