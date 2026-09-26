import Image from 'next/image';
import banner from "@/assets/banner.png"
import Link from 'next/link';
import { MdOutlineArrowDownward } from 'react-icons/md';
const Hero = () => {
    return (
        <div className='container mx-auto flex flex-col lg:flex-row justify-between bg-[#222630] mt-10 p-8 lg:p-12 gap-10 lg:gap-4 rounded-md lg:px-16'>
            <div className='flex flex-col items-start justify-center gap-6 w-full lg:w-1/2'>
                <p className='text-[#C2F800]'>WORKOUT LIBRARY</p>
                <h2 className='font-extrabold text-4xl lg:text-5xl font-sans'>TRAIN WITH INTENT. LOG <br />EVERY SET.</h2>
                <p className='text-slate-300'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />into today`s plan, and watch the week`s work add up.</p>
                
                <Link href="#library">
        
                    <button className='bg-[#C2F800] flex items-center justify-center text-black rounded-md py-3 px-4 font-semibold'>
                        
                        Browse Workouts<MdOutlineArrowDownward />
                        
                        </button>
                    
                </Link>
                
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
                <Image src={banner} alt='hero-section' className="max-w-full h-auto object-contain"></Image>
            </div>
        </div>
    );
};

export default Hero;