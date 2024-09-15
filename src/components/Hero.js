import React from 'react';
// import checkkk from './backLogo.jpeg'; // Importing the image
import checkkk from './hehe.jpeg'; // Importing the image

const Hero = () => {
    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${checkkk})`, opacity: 0.6 }} // Adjust opacity here
            ></div>

            {/* Content */}
            <div className="relative text-custom-text text-center p-8 z-10" >
                <h1
                    className="text-6xl font-bold tracking-wide leading-tight relative"

                >
                    Welcome to Cafe Varaharoopam
                </h1>

                <a
                    href="#menu"
                    className="mt-8 inline-block bg-yellow-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
                >
                    Explore Menu
                </a>
            </div>
        </section>
    );
};

export default Hero;
