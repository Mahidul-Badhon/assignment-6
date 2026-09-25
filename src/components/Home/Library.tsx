import React from 'react';
import WorkoutCard from '../shared/WorkoutCard';
import { Workout } from '@/types/Workout';

const getWorkouts = async():Promise<Workout[]> =>{
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await response.json()
    return data
}

const Library = async() => {

    const workouts = await getWorkouts()
    console.log(workouts, "workouts")
    return (
        <div className='container mx-auto mt-12'>
            <h2 className='font-bold text-3xl'>The Library</h2>
            <p className='text-slate-500'>Twelve lifts covering every major muscle group.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workouts.map((workout:Workout) => (
                    <WorkoutCard key={workout.id} workout={workout} />
                ))}
            </div>

        </div>
    );
};

export default Library;