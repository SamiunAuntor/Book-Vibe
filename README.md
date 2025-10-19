# Book Vibe

[Live Link](https://book-vibe-47b.pages.dev/)

## Overview

Book Vibe is a React-based web application for book enthusiasts. It provides a platform to browse, search, and manage a collection of books. Users can view book details, add books to their reading list, and sort books based on various criteria.

## Features

- **Home Page**: Displays a banner and a collection of books in a grid layout
- **Book Listings**: View all available books with filtering and sorting options
- **Book Details**: View comprehensive information about each book including cover image, author, publisher, and rating
- **Reading List**: Manage books you want to read
- **Filter Page**: Filter books by various criteria including categories and tags
- **Analytics**: Visual representation of book statistics with colorful charts
- **Responsive Design**: Fully responsive UI that works on mobile, tablet, and desktop devices
- **Modern UI**: Clean and intuitive user interface with smooth transitions and consistent design language

## Technologies Used

- **React** (v19.1.1): Frontend library for building the user interface
- **React Router** (v7.9.4): For handling navigation and routing
- **Tailwind CSS** (v4.1.14): For styling components
- **DaisyUI** (v5.3.7): Tailwind CSS component library
- **Lucide React** (v0.546.0): For icons
- **React Hot Toast** (v2.6.0): For notifications
- **Vite** (v7.1.7): Build tool and development server

## Project Structure

```
├── public/
│   └── booksData.json       # Book data
├── src/
│   ├── Components/
│   │   ├── Banner/          # Banner component
│   │   ├── Books/           # Book listing components
│   │   ├── NavBar/          # Navigation bar component
│   │   └── ReadList/        # Reading list components
│   ├── Pages/
│   │   ├── BookDetails/     # Book details page
│   │   ├── ErrorPage/       # 404 error page
│   │   ├── Home/            # Home page
│   │   ├── ListedBooks/     # Listed books page
│   │   └── Root/            # Root layout
│   ├── Routes/
│   │   └── Routes.jsx       # Application routes
│   ├── Utility/
│   │   └── AddToDB.js       # Local storage utilities
│   ├── assets/              # Images and icons
│   ├── App.jsx              # Main App component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
└── package.json             # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd boi-poka
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
# Build the project
npm run build
# or
yarn build

# Preview the production build
npm run preview
# or
yarn preview
```

## UI Design

The application features a clean, modern UI with four main page designs:

1. **Landing Page**: Grid layout showcasing book covers with consistent card design
2. **Book Details Page**: Detailed view of selected book with cover image and comprehensive information
3. **Filter Page**: Interactive filtering interface to sort and find books by various criteria
4. **Analytics Dashboard**: Visual representation of book data with colorful charts

All pages maintain a consistent design language with a clean white background, green accent colors for actions, and a user-friendly layout.

## Acknowledgments

- Book data is currently stored in a JSON file and managed through local storage
- UI design inspired by modern book browsing applications
