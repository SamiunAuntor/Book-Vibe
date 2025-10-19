import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLoaderData } from "react-router";
import { getStoredBooks } from '../../Utility/AddToDB';
import ReadListCard from "../../Components/ReadList/ReadListCard/ReadListCard";

const ListedBooks = () => {

    const [sort, setSort] = useState("");

    const handleSort = (type) => {
        setSort(type);

        let sortedBooks = [...readBooksList];

        if (type === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (type === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (type === "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        setReadBooksList(sortedBooks);
    };


    const booksData = useLoaderData();
    console.log(booksData)

    const [readBooksList, setReadBooksList] = useState([]);

    useEffect(() => {
        const readBooks = getStoredBooks(); // array of IDs from localStorage
        const readBooksIds = readBooks.map(id => parseInt(id)); // convert to numbers

        // Filter booksData to only include books in readBooksIds
        const filteredBooks = booksData?.filter(book => readBooksIds.includes(book.bookId)) || [];

        setReadBooksList(filteredBooks);
    }, [booksData]);



    const [selectedTab, setSelectedTab] = useState("read");
    const [showSortOptions, setShowSortOptions] = useState(false);

    // Helper function to build classes for the active tab look
    const getTabClasses = (tabName) => {
        const isActive = selectedTab === tabName;

        // Base classes for both tabs
        let classes = "px-6 py-3 font-semibold text-lg transition-colors duration-200 cursor-pointer focus:outline-none";

        if (isActive) {
            // Active state
            classes += " text-black border-t border-l border-r border-[#131313]/30 rounded-t-lg bg-white -mb-px";
        } else {
            // Inactive state
            classes += " text-[#131313]/50";
        }
        return classes;
    };

    return (
        <>
            <div className="w-full">
                {/* Header Section */}
                <div className="bg-[#131313]/5 mt-[36px] max-w-full flex flex-col items-center justify-center py-8 rounded-[16px] mx-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#131313]">Books</h1>
                </div>


                {/* Sort Button */}
                <div className="flex justify-center mt-6 relative">
                    <button
                        onClick={() => setShowSortOptions(!showSortOptions)}
                        className="flex items-center gap-2 bg-[#23BE0A] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#1fa209] transition-colors"
                    >
                        {/* If sort is selected, show "Sort by: type" */}
                        {sort ? (
                            <>Sort by : {sort.charAt(0).toUpperCase() + sort.slice(1)}</>
                        ) : (
                            <>
                                Sort By{" "}
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-200 ${showSortOptions ? "rotate-180" : ""}`}
                                />
                            </>
                        )}
                    </button>

                    {/* Dropdown Options */}
                    {showSortOptions && (
                        <div className="absolute top-14 bg-white shadow-md rounded-md flex flex-col w-60 z-10 border border-[#131313]/10">
                            <span
                                onClick={() => {
                                    handleSort("rating");
                                    setShowSortOptions(false);
                                }}
                                className="bg-[#131313]/5 px-4 py-2 text-sm text-[#131313]/80 cursor-pointer hover:bg-[#131313]/10 text-center"
                            >
                                Rating - Highest First
                            </span>
                            <span
                                onClick={() => {
                                    handleSort("pages");
                                    setShowSortOptions(false);
                                }}
                                className="bg-[#131313]/5 px-4 py-2 text-sm text-[#131313]/80 cursor-pointer hover:bg-[#131313]/10 text-center"
                            >
                                Number of Pages - Highest First
                            </span>
                            <span
                                onClick={() => {
                                    handleSort("year");
                                    setShowSortOptions(false);
                                }}
                                className="bg-[#131313]/5 px-4 py-2 text-sm text-[#131313]/80 cursor-pointer hover:bg-[#131313]/10 text-center"
                            >
                                Publishing Year - Latest First
                            </span>
                        </div>
                    )}
                </div>


                {/* Tabs */}
                <div className="w-full px-6 md:w-full mx-auto mt-10">
                    {/*
                    The border-b class here draws the main horizontal line.
                    The active tab will use -mb-px to visually hide this line beneath it.
                */}
                    <div className="flex border-b border-[#131313]/30">

                        {/* Read Books */}
                        <button
                            onClick={() => setSelectedTab("read")}
                            className={getTabClasses("read")}
                        >
                            Read Books
                        </button>

                        {/* Wishlist Books */}
                        <button onClick={() => setSelectedTab("wishlist")} className={getTabClasses("wishlist")}>
                            Wishlist Books
                        </button>
                    </div>
                </div>

                <div>
                    <div className="mt-6 px-6 pb-6 flex flex-col gap-4">
                        {selectedTab === "read" ? (
                            readBooksList.length > 0 ? (
                                readBooksList.map(book => (
                                    <ReadListCard key={book.bookId} book={book} />
                                ))
                            ) : (
                                <p className="text-center text-gray-500 mt-4">No books in your read list.</p>
                            )
                        ) : selectedTab === "wishlist" ? (
                            <h1 className="text-center text-gray-500 mt-8 text-2xl flex flex-col items-center justify-center gap-2">
                                🚧 This section is in progress!
                            </h1>
                        ) : null}
                    </div>


                </div>
            </div>
        </>
    );
};

export default ListedBooks;
