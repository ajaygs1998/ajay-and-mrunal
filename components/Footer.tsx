import React from 'react';

const socialLinks = [
    { name: 'Twitter', href: '#', icon: (props: React.SVGProps<SVGSVGElement>) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> },
    { name: 'GitHub', href: '#', icon: (props: React.SVGProps<SVGSVGElement>) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg> },
    { name: 'Dribbble', href: '#', icon: (props: React.SVGProps<SVGSVGElement>) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.114.01-.227.02-.34.03-1.421.065-2.813.03-4.155-.09-2.298-.202-4.437-.78-6.281-1.614a8.522 8.522 0 013.06-4.839A8.454 8.454 0 0112 4a8.523 8.523 0 016.605 2.61zM4.135 15.39c1.132-.36 2.577-.849 4.125-1.234 1.547-.385 3.135-.594 4.74-.594 1.295 0 2.56.098 3.792.284 1.23.187 2.417.49 3.538.902a8.529 8.529 0 01-2.12 3.238A8.47 8.47 0 0112 20a8.47 8.47 0 01-7.865-4.61z" clipRule="evenodd" /></svg> },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center space-x-6 md:order-2">
                        {socialLinks.map((item) => (
                            <a key={item.name} href={item.href} className="text-slate-400 hover:text-slate-300">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-center text-xs leading-5 text-slate-400">
                            &copy; {new Date().getFullYear()} Stellar, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
