"use client"
import { Workout } from '@/types/Workout';
import React from 'react';
import { FaRegCalendarPlus } from 'react-icons/fa';

const TodaysMyPlanButton = ({workout}:{workout:Workout}) => {
    const handletodaysPlan = () =>{
        console.log("Selected workout", workout)
    }
    return (
        <button className="flex items-center gap-2 px-6 py-3.5 bg-[#ccff00] text-black font-semibold rounded-lg hover:bg-[#b3e600] transition-colors" onClick={()=>handletodaysPlan()}>
                            <FaRegCalendarPlus />
                            Add to today`s plan
                        </button>
    );
};

export default TodaysMyPlanButton;