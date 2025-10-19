import React from "react";
import bannerImg from "../../assets/Banner-Image.png";

const Banner = () => {
    return (
        <>
            <section className="bg-[#1313130D] py-12 md:py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between rounded-2xl mt-6 mx-6">

                {/* Left side */}
                <div className="text-center md:text-left max-w-md space-y-6">
                    <h1 className="text-3xl md:text-[50px] font-bold text-gray-900 leading-snug">
                        Books to freshen up your bookshelf
                    </h1>

                    <button className="bg-[#23BE0A] text-white font-semibold px-6 py-3 rounded-lg transform transition-transform duration-200 hover:scale-105">
                        View The List
                    </button>
                </div>

                {/* Right side */}
                <div className="mt-8 md:mt-0 md:ml-10 flex justify-center">
                    <img
                        src={bannerImg}
                        alt="Books Banner"
                        className="w-64 md:w-96 object-contain"
                    />
                </div>
            </section>
        </>
    );
};

export default Banner;
