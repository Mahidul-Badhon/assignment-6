"use client"
import { WorkoutContext } from '@/context/WorkoutContext';
import { Workout } from '@/types/Workout';
import React, { useContext } from 'react';
import { CiSaveDown2 } from 'react-icons/ci';
import { FaRegCalendarPlus } from 'react-icons/fa';

const SaveLaterButton = ({workout}:{workout:Workout}) => {
    
    const {saveLater, setsaveLater} = useContext(WorkoutContext)
    const isSaved = saveLater.some((item: Workout) => item.id === workout.id)


    const handleSaveLater = () =>{
        // console.log("Selected workout", workout)
        setsaveLater([...saveLater, workout])
        alert(`You have selected "${workout.name}"`)
    }
    return (
        <button 
        disabled={isSaved}
        className={`flex items-center gap-2 px-6 py-3.5 border border-gray-600 text-white font-semibold rounded-lg hover:bg-[#1f1f1f] transition-colors ${isSaved ? 'cursor-not-allowed' : 'cursor-pointer'}`} 
        onClick={()=>handleSaveLater()}>
                            <CiSaveDown2 />
                            {isSaved ? "Saved" : "Save for later"}
                        </button>
    );
};

export default SaveLaterButton;