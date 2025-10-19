import React from "react";
import ratingIcon from "../../../assets/star.png";

const Book = ({ book }) => {
    return (
        <div className="bg-white rounded-lg p-4 w-full h-[500px] flex flex-col border border-[#131313]/15">
            {/* Book Image */}
            <div className="h-[60%] w-full py-6 bg-[#F3F3F3] rounded-md flex items-center justify-center overflow-hidden">
                <img
                    src={book.image}
                    alt="Book"
                    className="object-contain h-full w-full"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between h-[40%] mt-3">
                {/* Capsules */}
                <div className="flex gap-2 mt-3 flex-wrap">
                    {/* Category capsule */}
                    <span className="text-[#23BE0A] bg-[#23BE0A]/5 px-3 py-1 rounded-full text-sm font-semibold">
                        {book.category}
                    </span>

                    {/* Tags capsule */}
                    <span className="text-[#23BE0A] bg-[#23BE0A]/5 px-3 py-1 rounded-full text-sm font-semibold">
                        {book.tags.join(", ")}
                    </span>
                </div>


                {/* Book Name and Writer */}
                <div>
                    <h2 className="font-bold text-gray-900 text-lg">{book.bookName}</h2>
                    <p className="text-gray-700 text-sm"> By : {book.author}</p>
                </div>

                {/* Underline */}
                <div className="w-full border-t border-[#131313]/15 my-2"></div>

                {/* Book Type and Rating */}
                <div className="flex justify-between items-center w-full">
                    <span className="text-gray-700 text-sm">Publisher : {book.publisher}</span>
                    <div className="flex items-center gap-1">
                        <span className="text-gray-900 font-semibold mr-1.25">{book.rating}</span>
                        <img src={ratingIcon} alt="Rating" className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
