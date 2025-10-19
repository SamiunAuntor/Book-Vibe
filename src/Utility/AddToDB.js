import toast from 'react-hot-toast';



export const getStoredBooks = () => {
    const storedBooksSTR = localStorage.getItem("readList");
    return storedBooksSTR ? JSON.parse(storedBooksSTR) : [];
};

const addToStoredDB = (id) => {
    const storedBooks = getStoredBooks();
    if (storedBooks.includes(id)) {
        toast.error("Book is already added!");
    } else {
        storedBooks.push(id);
        localStorage.setItem("readList", JSON.stringify(storedBooks));
        toast.success("Book added successfully!");
    }
};

export default addToStoredDB;
