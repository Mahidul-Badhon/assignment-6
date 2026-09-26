import React from 'react';
// Import your logo image here
import logo from '@/assets/logo.png'; 
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="border-t border-gray-800 bg-[#0a0a0a] py-6 md:py-8 mt-12">
            {/* Flex container: stacks as a column on mobile, switches to row on tablet/desktop */}
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                
                <div className="flex items-center gap-3">
                    <div>
                        <Image src={logo} alt="FitLog Logo"/>
                        
                    </div>

                    <span className="text-white text-xl font-semibold uppercase">
                        FITLOG
                    </span>
                </div>

                <p className="text-gray-500 text-sm text-center md:text-right">
                    &copy; 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
                
            </div>
        </footer>
    );
};

export default Footer;