import React from "react";
import { use } from "react";
import Book from "./Book/Book";

const Books = ({ booksPromise }) => {
    const booksData = use(booksPromise);

    return (
        <div className="mt-16 mx-6 pb-14">
            {/* Title */}
            <h1 className="text-center font-bold text-[40px] mb-8">Books</h1>

            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full">
                {booksData.map((book) => (
                    <div className="flex justify-center w-full" key={book.bookId}>
                        <Book book={book} className="w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;
