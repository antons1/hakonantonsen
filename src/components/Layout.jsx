import React from 'react';
import Header from './Header';
import Footer from './Footer';

import wrapperClass from './wrapperClass'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-100">
            <Header />
            <main className={`${wrapperClass} flex-grow`}>
                {children}
            </main>
            <Footer />
        </div >
    )
}