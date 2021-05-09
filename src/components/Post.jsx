import React from 'react';

const textStyles = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"; // Can't get CSSPurge not to purge these..

export default function Post({
    title,
    imageUrl,
    videoUrl,
    author,
    date,
    readTime,
    content,
    maxContentHeight,
    maxHeadingHeight,
    autoPlay,
    bottomTitle
}) {
    return (
        <article className="bg-white shadow-md rounded-lg overflow-hidden pb-4 h-full">
            <header className="">
                <div className="relative mb-4">
                    {imageUrl && <img className="w-full" src={imageUrl} />}
                    {videoUrl &&
                        <video autoPlay={autoPlay} muted loop>
                            <source src={videoUrl} type="video/mp4" />
                        </video>}
                    <h2 className={`absolute ${bottomTitle? "bottom-8" : "top-8"} left-8 right-8 text-white font-serif text-4xl sm:text-${maxHeadingHeight || 5}xl md:text-${maxHeadingHeight || 6}xl lg:text-${maxHeadingHeight || 7}xl xl:text-${maxHeadingHeight || 8}xl text-outline`}>
                        {title}
                    </h2>
                </div>
                <div className="text-sm mb-6 mt-0 m-auto max-w-3xl px-8 box-content">
                    <span className="mr-4">By {author}</span>
                    <span className="mr-4">Published {date}</span>
                    <span className="mr-4">{readTime} min read</span>
                </div>
            </header>
            <div className={`block text-xl mt-0 m-auto max-w-3xl px-8 overflow-hidden box-content ${maxContentHeight ? "max-h-" + maxContentHeight : ""}`} dangerouslySetInnerHTML={{ __html: content }}>
            </div>
        </article>
    );
}