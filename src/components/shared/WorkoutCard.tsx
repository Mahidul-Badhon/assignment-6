import React from 'react';
import Link from 'next/link';
import { Workout } from '@/types/Workout';
import Image from 'next/image';
import { IoTimeOutline } from 'react-icons/io5';
import { TbFlameFilled } from 'react-icons/tb';
import { CiStar } from 'react-icons/ci';

interface WorkoutCardProps {
    workout: Workout
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link 
            href={`/workouts/${workout.id}`} 
            className="block bg-[#141414] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer border border-base-300">
            {/* Image Section */}
            <div className="relative h-48 w-full bg-base-300">
                <Image
                    src={workout.image} 
                    alt={workout.name}
                    width={600}
                    height={600} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-4">
                {/* Category Tags */}
                <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle, index) => (
                        <span 
                            key={index} 
                            className="px-3 py-1 text-[10px] font-bold uppercase bg-[#ccff00] text-black rounded-full"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name & Equipment */}
                <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-wide truncate">
                        {workout.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1 truncate">
                        {workout.equipment}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="flex items-center gap-5 text-xs text-gray-400 font-medium">
                    <div className="flex items-center gap-1.5">
                        <IoTimeOutline />
                        <span>{workout.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <TbFlameFilled />
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <CiStar />
                        <span>{workout.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;