import React from 'react';
import { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../../Components/Books/Books';

const booksPromise = fetch('./booksData.json').then(res => res.json());


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Suspense fallback="Loading...">
                <Books booksPromise={booksPromise}></Books>
            </Suspense>
        </div>
    );
};

export default Home;