import React from "react";
import { useNavigate } from "react-router";
import { Home } from "lucide-react";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7f8fa] to-[#e3fcef] text-[#131313] px-6 text-center">
            {/* Large 404 text */}
            <h1 className="text-[8rem] md:text-[10rem] font-extrabold text-[#23BE0A] drop-shadow-md">
                404
            </h1>

            {/* Subtext */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Oops! Page not found
            </h2>
            <p className="text-[#555] max-w-md mb-8">
                It looks like the page you’re looking for doesn’t exist or has been moved.
                Don’t worry, let’s get you back on track.
            </p>

            {/* Go Home Button */}
            <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 bg-[#23BE0A] text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#1fa209] hover:shadow-lg transition-all duration-300"
            >
                <Home size={20} />
                Back to Home
            </button>

            
        </div>
    );
};

export default ErrorPage;
