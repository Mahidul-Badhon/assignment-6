"use client"
import SavedCards from '@/components/shared/SavedCard';
import TodaysPlanCard from '@/components/shared/TodaysPlanCard';
import { WorkoutContext } from '@/context/WorkoutContext';
import { Workout } from '@/types/Workout';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const ListedMyPlan = () => {

    const { todaysWorkout, saveLater } = useContext(WorkoutContext)
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");
    // console.log(todaysWorkout,"Todays plan")
    // console.log(saveLater, "Save")


    const sortWorkouts = (workouts: Workout[]) => {
        const sortedWorkouts = [...workouts];

        if (sortBy === "duration") {
            sortedWorkouts.sort((a, b) => b.duration - a.duration);
        } else if (sortBy === "calories") {
            sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } else if (sortBy === "rating") {
            sortedWorkouts.sort((a, b) => b.rating - a.rating);
        }

        return sortedWorkouts;
    };

    const activeWorkouts = activeTab === "today" ? todaysWorkout : saveLater
    const sortedWorkouts = sortWorkouts(activeWorkouts)

    // Calculate dynamic metrics for Today's Plan[cite: 1]
    const totalExercises = activeWorkouts.length
    const totalMinutes = activeWorkouts.reduce((acc, curr) => acc + curr.duration, 0)
    const totalCalories = activeWorkouts.reduce((acc, curr) => acc + curr.caloriesBurned, 0)

    return (
        <div className='container mx-auto mt-7'>
            <h2 className='font-semibold text-4xl'>My Plan</h2>
            <p className='text-slate-500'>Cap of five lifts for today. Finish them, then load more.</p>
            <div className='grid grid-cols-3 gap-2 bg-[#222630] mt-9 p-3 rounded-md py-4'>
                <div>
                    <p className='text-slate-400'>Exercises</p>
                    <h2 className='text-[#C2F800] font-semibold text-3xl'>{totalExercises}</h2>
                </div>
                <div>
                    <p className='text-slate-400'>Minutes</p>
                    <h2 className='text-white font-semibold text-3xl'>{totalMinutes}</h2>
                </div>
                <div>
                    <p className='text-slate-400'>Calories</p>
                    <h2 className='text-white font-semibold text-3xl'>{totalCalories}</h2>
                </div>
            </div>


            {/* Tab Header & Sort Dropdown Row */}
            <div className='flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-800 pb-4 mb-6 gap-4'>
                
                {/* Tabs */}
                <div className="flex bg-[#141414] p-1 rounded-lg w-max mt-8">
                    <button 
                        onClick={() => setActiveTab("today")}
                        className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${activeTab === "today" ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-white'}`}
                    >
                        Today`s Plan
                    </button>
                    <button 
                        onClick={() => setActiveTab("saved")}
                        className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${activeTab === "saved" ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-white'}`}
                    >
                        Saved
                    </button>
                </div>


                <div className='flex items-center gap-3 mt-5'>
                    <p className='text-sm text-gray-500 font-medium'>Sort By</p>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "duration" | "calories" | "rating")}
                        className="bg-[#141414] border border-gray-700 text-white text-sm rounded-lg focus:ring-[#ccff00] focus:border-[#ccff00] block p-2 outline-none cursor-pointer"
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            {/* List Content Area[cite: 4, 5, 6] */}
            <div className="space-y-4 min-h-100">
                {sortedWorkouts.length > 0 ? (
                    sortedWorkouts.map((workout: Workout) => (
                        activeTab === "today" 
                            ? <TodaysPlanCard key={workout.id} workout={workout} />
                            : <SavedCards key={workout.id} workout={workout} />
                    ))
                ) : (
                    // Empty State[cite: 1, 4]
                    <div className='flex flex-col items-center justify-center h-64 border border-dashed border-gray-700 rounded-2xl'>
                        <h2 className='font-black text-2xl text-white uppercase tracking-wide'>Nothing here yet</h2>
                        <p className='text-gray-400 mt-2 mb-6'>Browse the library and add a lift to get today moving.</p>
                        <Link 
                            href="/" 
                            className='px-8 py-3 bg-[#ccff00] text-black font-bold rounded-full hover:bg-[#b3e600] transition-colors'
                        >
                            Go to workouts
                        </Link>
                    </div>
                )}
            </div>



        </div>
    );
};

export default ListedMyPlan;