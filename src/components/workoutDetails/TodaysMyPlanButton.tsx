"use client"
import { WorkoutContext } from '@/context/WorkoutContext';
import { Workout } from '@/types/Workout';
import React, { useContext } from 'react';
import { FaRegCalendarPlus } from 'react-icons/fa';

const TodaysMyPlanButton = ({workout}:{workout:Workout}) => {
    
    const {todaysWorkout, settodaysWorkout} = useContext(WorkoutContext)
    const isAdded = todaysWorkout.some((item: Workout) => item.id === workout.id);

    const handletodaysPlan = () =>{
        // console.log("Selected workout", workout)
        settodaysWorkout([...todaysWorkout, workout])
        alert(`You have selected "${workout.name}"`)
    }
    return (
        <button 
        disabled={isAdded}
        className={`flex items-center gap-2 px-6 py-3.5 bg-[#ccff00] text-black font-semibold rounded-lg hover:bg-[#b3e600] transition-colors ${isAdded ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={()=>handletodaysPlan()}>
                            <FaRegCalendarPlus />
                            {isAdded ? "Added to today's plan" : "Add to today's plan"}
                        </button>
    );
};

export default TodaysMyPlanButton;