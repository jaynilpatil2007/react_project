import React from 'react'

export default function About() {
    return (
        <div className="py-18 bg-[#212121]">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="./src/assets/About.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-white font-bold md:text-4xl">
                            About Watchly
                        </h2>
                        <p className="mt-6 text-gray-400">
                            Watchly is a sample movie application built with React and contemporary frontend techniques.It makes use of Context API to manage global state thoughout the application and React Router for smooth page navigation.
                        </p>
                        <p className="mt-4 text-gray-400">
                            The project emphasizes a simple, dark-themed user interface with reusable parts and well-organized layout.It also incorporates API fetching techniques to display dynamic movies data.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}