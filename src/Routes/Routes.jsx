import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/BookDetails/:id",
        loader: () => fetch("/booksData.json").then(res => res.json()),
        Component: BookDetails,
      },
      {
        path: "/ListedBooks",
        loader: () => fetch("/booksData.json").then(res => res.json()),
        Component: ListedBooks,
      }
    ]
  },
]);