import React, { } from "react";
import { useLoaderData, useParams } from "react-router";
import addToStoredDB from "../../Utility/AddToDB";
import toast from "react-hot-toast";

const BookDetails = () => {

    const { id } = useParams();
    const bookId = parseInt(id);

    const booksData = useLoaderData();

    const bookData = booksData.find(book => book.bookId === bookId);

    console.log(bookData);


    const handleWishListClick = () => {
        toast.error("This feature is not available yet!");
    }

    const handleMarkAsRead = (id) => {
        addToStoredDB(id);
    }

    return (
        <div className="flex flex-col md:flex-row gap-8 p-6 bg-white rounded-lg shadow-sm">

            {/* Left: Book Image */}
            <div className="bg-[#131313]/5 p-6 flex items-center justify-center rounded-xl md:w-1/2">
                <img src={bookData.image} alt="Book" className="object-contain h-[590px] w-full" />
            </div>

            {/* Right: Book Details */}
            <div className="md:w-1/2 flex flex-col gap-6 justify-between">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{bookData.bookName}</h1>
                    <p className="text-gray-700 text-xl">By : {bookData.author}</p>

                    <div className="w-full border-t border-[#131313]/15 my-2"></div>

                    {/* Tag */}
                    <div className="flex items-center gap-3 flex-wrap text-lg">
                        <span className="text-gray-900">{bookData.tags[0]}</span>
                    </div>

                    <div className="w-full border-t border-[#131313]/15 my-2"></div>



                    {/* Review */}
                    <p className="text-lg text-justify">
                        <span className="font-bold">Review:</span>{" "}
                        <span className="text-gray-500">{bookData.review}</span>
                    </p>

                    {/* Tags */}
                    <div className="flex items-center gap-3 mt-2 text-lg flex-wrap">
                        <span className="font-bold">Tags</span>
                        {bookData.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-[#23BE0A] bg-[#23BE0A]/5 px-3 py-1 rounded-full text-base font-semibold"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>


                    <div className="w-full border-t border-[#131313]/15 my-2"></div>
                </div>


                {/* Pages, Publisher, Year, Rating */}
                <div className="flex flex-col gap-3 text-lg">
                    <div className="flex gap-8">
                        <span className="text-[#131313]/70 w-40">Number of pages:</span>
                        <span className="font-bold text-gray-900">{bookData.totalPages}</span>
                    </div>
                    <div className="flex gap-8">
                        <span className="text-[#131313]/70 w-40">Publisher:</span>
                        <span className="font-bold text-gray-900">{bookData.publisher}</span>
                    </div>
                    <div className="flex gap-8">
                        <span className="text-[#131313]/70 w-40">Year of Publishing:</span>
                        <span className="font-bold text-gray-900">{bookData.yearOfPublishing}</span>
                    </div>
                    <div className="flex gap-8 items-center">
                        <span className="text-[#131313]/70 w-40">Rating:</span>
                        <span className="font-bold text-gray-900 flex items-center gap-1">
                            {bookData.rating}
                        </span>
                    </div>
                </div>


                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                    <button onClick={() => handleMarkAsRead(bookData.bookId)} className="bg-white text-black border border-[#131313]/30 rounded-lg px-6 py-2 md:px-8 md:py-3 font-semibold text-sm md:text-lg hover:scale-105 transition-transform duration-200">
                        Mark as Read
                    </button>
                    <button onClick={handleWishListClick} className="bg-[#50B1C9] text-white rounded-lg px-6 py-2 md:px-8 md:py-3 font-semibold text-sm md:text-lg hover:scale-105 transition-transform duration-200">
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
