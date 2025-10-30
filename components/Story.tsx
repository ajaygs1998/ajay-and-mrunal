import React from 'react';

const Story: React.FC = () => {
    return (
        <section id="story" className="py-20 sm:py-24 bg-rose-50/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="text-base font-semibold leading-7 text-rose-500 tracking-widest uppercase">
                        Our Journey
                    </p>
                    <h2 className="mt-2 text-3xl font-serif font-bold tracking-tight text-gray-800 sm:text-4xl">
                        How We Met
                    </h2>
                </div>
                <div className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-gray-600">
                    <p>
                        Our story is a simple one, but it's our favorite. It began with a chance encounter that blossomed into a beautiful friendship, and eventually, a love that will last a lifetime. (This is a sample text, feel free to add your own beautiful story here!)
                    </p>
                    <p className="mt-4">
                        We've shared countless laughs, supported each other's dreams, and built a foundation of love and respect. Now, we're taking the next step and we're so excited to start our new chapter as husband and wife.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Story;
