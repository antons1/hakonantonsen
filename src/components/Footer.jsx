import React from 'react';

import wrapperClass from './wrapperClass';

export default function Footer() {
    return (
        <footer className="bg-green-700 text-white mt-auto">
            <div className={wrapperClass}>
                <nav>
                    <ul className="flex py-4">
                        <a href="https://twitter.com/Antons1"><li className="mr-4">Twitter</li></a>
                        <a href="https://github.com/antons1"><li className="mr-4" >GitHub</li></a>
                        <a href="https://www.linkedin.com/in/h%C3%A5kon-antonsen-53a88737/"><li className="mr-4">LinkedIn</li></a>
                        <a href="https://www.flickr.com/people/125760551@N02/"><li className="mr-4">Flickr</li></a>
                    </ul>
                </nav>
            </div >
        </footer >
    );
}