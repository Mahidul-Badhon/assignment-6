"use client"

import React, { createContext, useState } from 'react';


export const WorkoutContext = createContext({})

const WorkoutProvider = ({children}:{children:React.ReactNode}) => {
    
    const [todaysWorkout, settodaysWorkout] = useState([])
    const [saveLater, setsaveLater] = useState([])
    
    const sharedData = {
        todaysWorkout, settodaysWorkout, saveLater, setsaveLater
    }

    return (
        <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
    );
};


export default WorkoutProvider;