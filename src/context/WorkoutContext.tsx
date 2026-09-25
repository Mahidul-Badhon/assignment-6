"use client"

import { Workout } from '@/types/Workout';
import React, { createContext, useState } from 'react';
interface WorkoutContextType {
    todaysWorkout: Workout[];
    settodaysWorkout: React.Dispatch<React.SetStateAction<Workout[]>>;
    saveLater: Workout[];
    setsaveLater: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType>({} as WorkoutContextType)

const WorkoutProvider = ({children}:{children:React.ReactNode}) => {
    
    const [todaysWorkout, settodaysWorkout] = useState<Workout[]>([])
    const [saveLater, setsaveLater] = useState<Workout[]>([])
    
    const sharedData = {
        todaysWorkout, settodaysWorkout, saveLater, setsaveLater
    }

    return (
        <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
    );
};


export default WorkoutProvider;