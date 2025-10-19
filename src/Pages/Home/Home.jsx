import React from 'react';
import { Suspense, useRef } from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../../Components/Books/Books';

const booksPromise = fetch('./booksData.json').then(res => res.json());


const Home = () => {

    const booksRef = useRef(null);

    const scrollToBooks = () => {
        booksRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div>
            <Banner onViewListClick={scrollToBooks} />

            <Suspense fallback="Loading...">
                <div ref={booksRef}>
                    <Books booksPromise={booksPromise} />
                </div>
            </Suspense>
        </div>
    );
};

export default Home;