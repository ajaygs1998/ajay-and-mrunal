import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-rose-100/50">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="font-serif text-2xl text-rose-700">
                       With Love,
                    </p>
                    <p className="text-2xl font-serif text-rose-800 font-semibold mt-1">
                        Ajay & Mrunalini
                    </p>
                    <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                        &copy; {new Date().getFullYear()} Made with love.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
