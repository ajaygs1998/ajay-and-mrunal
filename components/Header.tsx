import React from 'react';

const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="m11.645 20.91-1.106-1.007-7.133-6.505A5.5 5.5 0 0 1 8 2.324a5.5 5.5 0 0 1 6.355 4.095l.305 1.525.305-1.525A5.5 5.5 0 0 1 21 8.825c0 2.882-2.9 5.433-7.133 9.58l-1.106 1.007Z" />
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-rose-50/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 text-gray-800 font-serif text-2xl">
            <span>Ajay</span>
            <HeartIcon className="h-6 w-6 text-rose-500" />
            <span>Mrunalini</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;