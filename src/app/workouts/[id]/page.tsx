

import SaveLaterButton from '@/components/workoutDetails/SaveLaterButton';
import TodaysMyPlanButton from '@/components/workoutDetails/TodaysMyPlanButton';

import { Workout } from '@/types/Workout';

import Image from 'next/image';
import React from 'react';
import { CiCalendarDate, CiSaveDown2 } from 'react-icons/ci';
import { FaRegCalendarPlus } from 'react-icons/fa';

interface IWorkoutDetailsPageProps{
    params: Promise<{id: string}>
}
const getWorkouts = async() =>{
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await response.json()
    return data
}
const WorkoutDetailsPage = async({params}:IWorkoutDetailsPageProps) => {
    const {id} = await params
    const workoutData = await getWorkouts()
    const workout = workoutData.find(
        (workout:Workout) => String(workout.id) === String(id)
    ) as Workout
    
    // console.log(workout, "workout")
    
    return (
        <div className="container mx-auto px-4 py-10 max-w-6xl">
            {/* Two-column layout: stacks on mobile (1 column), side-by-side on desktop (2 columns)[cite: 1] */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                
                {/* Left Side — Visual/Media[cite: 1] */}
                {/* On mobile, this will stay on top[cite: 1] */}
                <div className="w-full h-[300px] lg:h-[600px] relative rounded-2xl overflow-hidden bg-[#141414]">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

    
                <div className="flex flex-col space-y-8 lg:py-4">
                    
                    {/* Title & Subtitle[cite: 1] */}
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-wide mb-4">
                            {workout.name}
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {workout.description}
                        </p>
                    </div>

                    {/* Category tags[cite: 1] */}
                    <div className="flex flex-wrap gap-3">
                        {workout.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="px-4 py-1.5 text-sm font-bold uppercase bg-[#ccff00] text-black rounded-full"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Key Specs table/panel using standard HTML table[cite: 1, 7] */}
                    <div className="bg-[#141414] border border-gray-800 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <tbody>
                                <tr className="border-b border-gray-800">
                                    <td className="p-4 text-gray-500 font-semibold uppercase text-xs">EQUIPMENT</td>
                                    <td className="p-4 text-right text-white font-medium">{workout.equipment}</td>
                                </tr>
                                <tr className="border-b border-gray-800">
                                    <td className="p-4 text-gray-500 font-semibold uppercase text-xs">DIFFICULTY</td>
                                    <td className="p-4 text-right text-white font-medium">{workout.difficulty}</td>
                                </tr>
                                <tr className="border-b border-gray-800">
                                    <td className="p-4 text-gray-500 font-semibold uppercase text-xs">SETS</td>
                                    <td className="p-4 text-right text-white font-medium">{workout.sets}</td>
                                </tr>
                                <tr className="border-b border-gray-800">
                                    <td className="p-4 text-gray-500 font-semibold uppercase text-xs">REPS</td>
                                    <td className="p-4 text-right text-white font-medium">{workout.reps}</td>
                                </tr>
                                <tr className="border-b border-gray-800">
                                    <td className="p-4 text-gray-500 font-semibold uppercase text-xs">DURATION</td>
                                    <td className="p-4 text-right text-white font-medium">{workout.duration} min</td>
                                </tr>
                                <tr className="border-b border-gray-800">
                                    <td className="p-4 text-gray-500 font-semibold uppercase text-xs">CALORIES</td>
                                    <td className="p-4 text-right text-white font-medium">{workout.caloriesBurned} kcal</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-500 font-semibold uppercase text-xs">RATING</td>
                                    <td className="p-4 text-right text-white font-medium">{workout.rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* INSTRUCTIONS section[cite: 1] */}
                    <div>
                        <h2 className="text-lg font-bold text-white uppercase mb-5 tracking-wide">
                            INSTRUCTIONS
                        </h2>
                        {/* Ordered list[cite: 1] */}
                        <ol className="space-y-4 text-gray-400 text-[15px] list-decimal list-inside">
                            {workout.instructions.map((step, index) => (
                                <li key={index} className="leading-relaxed pl-2 marker:text-gray-500 marker:font-bold">
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Call-to-action buttons[cite: 1] */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        {/* Primary button[cite: 1] */}
                        <TodaysMyPlanButton workout={workout}></TodaysMyPlanButton>
                        {/* Secondary button[cite: 1] */}
                        <SaveLaterButton workout={workout}></SaveLaterButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;