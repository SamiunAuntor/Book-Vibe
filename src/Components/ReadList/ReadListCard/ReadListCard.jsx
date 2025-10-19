import React from 'react';
import { Book, User2, CalendarDays, Star } from 'lucide-react';

const ReadListCard = ({ book }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">

            {/* Book Cover Image Section */}
            <div className="flex-shrink-0 bg-gray-100 p-4 rounded-xl flex items-center justify-center">
                <img
                    src={book.image}
                    alt="Cover of Example Book Title"
                    className="w-32 h-48 object-cover rounded-md"
                />
            </div>

            {/* Book Details Section */}
            <div className="flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-[#131313] mb-2">{book.bookName}</h2>
                <p className="text-base text-[#131313CC] mb-4">By : {book.author}</p>

                {/* Tags, Publishing Year */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-base font-bold text-[#131313]">Tag</span>
                    {book.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-2 rounded-full text-sm font-medium"
                        >
                            #{tag}
                        </span>
                    ))}

                    <div className="flex items-center text-[#131313CC] text-base gap-2 ml-auto md:ml-6">
                        <CalendarDays size={20} className="text-[#13131380]" />
                        <span>Year of Publishing: {book.yearOfPublishing}</span>
                    </div>
                </div>


                {/* Publisher, Page Count */}
                <div className="flex flex-wrap items-center gap-6 border-b border-gray-200 pb-4 mb-4">
                    <div className="flex items-center text-[#131313CC] text-base gap-2">
                        <User2 size={20} className="text-[#13131380]" />
                        <span>Publisher: {book.publisher}</span>
                    </div>
                    <div className="flex items-center text-[#131313CC] text-base gap-2">
                        <Book size={20} className="text-[#13131380]" />
                        <span>Page {book.totalPages}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                    <span className="bg-[#328EFF26] text-[#328EFF] px-5 py-2 rounded-full text-base font-medium">Category: {book.category}</span>
                    <span className="flex items-center gap-1 bg-[#FFAC3326] text-[#FFAC33] px-5 py-2 rounded-full text-base font-medium">
                        <Star size={18} className="text-[#FFAC33]" fill="#FFAC33" /> {book.rating}
                    </span>
                    <button className="bg-[#23BE0A] text-white px-5 py-2 rounded-full text-base font-medium hover:bg-[#1fa209] transition-colors duration-200">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReadListCard;
