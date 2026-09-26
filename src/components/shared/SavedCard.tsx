"use client"
import { WorkoutContext } from '@/context/WorkoutContext';
import { Workout } from '@/types/Workout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { CiStar } from 'react-icons/ci';
import { IoTimeOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { TbFlameFilled } from 'react-icons/tb';
import { toast } from 'react-toastify';

const SavedCards = ({workout}: {workout: Workout}) => {
    
    const {saveLater, setsaveLater} = useContext(WorkoutContext)

    const handleRemove = () => {
        const updatedSaved = saveLater.filter((item: Workout) => item.id !== workout.id);
        setsaveLater(updatedSaved);
        toast(`${workout.name} has been removed`)
    }

    return (
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 p-4 bg-[#222630] border border-gray-800 rounded-2xl w-full">

            {/* Left Side: Thumbnail & Info */}
            {/* On mobile: takes full width, flex row to keep image and text side-by-side */}
            <div className="flex items-center gap-3 sm:gap-4 w-full xl:w-auto overflow-hidden">

                {/* Thumbnail - Shrinks slightly on very small screens[cite: 1, 8] */}
                <div className="relative w-24 h-16 sm:w-32 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-base-300">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text Info - Added min-w-0 and truncate to prevent layout breaking on small screens */}
                <div className="flex flex-col justify-center min-w-0">
                    <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wide truncate">
                        {workout.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">
                        {workout.equipment}
                    </p>

                    {/* Stats Row - Wraps if needed on narrow screens[cite: 1, 8] */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1 text-[10px] sm:text-xs font-medium text-gray-300">
                        <div className="flex items-center gap-1 shrink-0">
                            <IoTimeOutline className="text-[#ccff00] text-sm" />
                            <span>{workout.duration} min</span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                            <TbFlameFilled className="text-[#ccff00] text-sm" />
                            <span>{workout.caloriesBurned} kcal</span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                            <CiStar className="text-[#ccff00] text-sm" />
                            <span>{workout.rating}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Action Buttons[cite: 1, 8] */}
            {/* On mobile: buttons wrap and stretch. On desktop: aligned to right. */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 xl:mt-0 w-full xl:w-auto">

                {/* View Details Button[cite: 1, 8] */}
                <Link href={`/workouts/${workout.id}`} >
                    <button className="flex-1 xl:flex-none text-center px-4 sm:px-5 py-2.5 sm:py-2 text-xs sm:text-sm font-medium text-white border border-gray-600 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap">
                    View Details
                    </button>
                </Link>

                {/* Remove (X) Button[cite: 1, 8] */}
                <button 
                onClick={handleRemove}
                className="p-2.5 sm:p-2 text-gray-500 hover:text-white transition-colors shrink-0 ml-auto xl:ml-0">
                    <RxCross2 />
                </button>
            </div>

        </div>
    );
};

export default SavedCards;