import React from 'react';
import { Link } from 'gatsby';

import wrapperClass from './wrapperClass';

export default function Header() {
    return (
        <header className="bg-green-700 text-white flex-initial font-serif">
            <div className={`${wrapperClass} flex justify-between py-4 items-baseline flex-wrap`}>
                <div className="text-2xl md:text-4xl mr-8 cursor-pointer flex-initial">
                    <span className="relative">
                        <Link to="/"><span className="">Hakonantonsen</span></Link>
                        <Link to="/"><span className="absolute left-0 opacity-50  hover:opacity-100">Håkonantonsen</span></Link>
                    </span>
                    <span className="opacity-50">.no</span>
                </div>
                <nav className="flex-1">
                    <ul className="flex justify-end text-xl md:text-2xl">
                        <Link to="/blog"><li className="mr-4">Blog</li></Link>
                        <Link to="/about"><li className="mr-4">About</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}