import Image from 'next/image';
import React from 'react';
import banner from "@/assets/banner.png"
const Hero = () => {
    return (
        <div className='container mx-auto flex justify-between bg-[#222630] mt-10 p-12 gap-4 rounded-md px-16'>
            <div className='flex flex-col items-start justify-center gap-6'>
                <p className='text-[#C2F800]'>WORKOUT LIBRARY</p>
                <h2 className='font-extrabold text-5xl font-sans]'>TRAIN WITH INTENT. LOG <br />EVERY SET.</h2>
                <p className='text-slate-300'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />into today`s plan, and watch the week`s work add up.</p>
                <button className='bg-[#C2F800] text-center text-black rounded-md py-3 px-4 font-semibold'>Browse Workouts</button>
            </div>
            <div>
                <Image src={banner} alt='hero-section'></Image>
            </div>
        </div>
    );
};

export default Hero;