"use client"
import TodaysPlanCard from '@/components/shared/TodaysPlanCard';
import { WorkoutContext } from '@/context/WorkoutContext';
import { Workout } from '@/types/Workout';
import React, { useContext } from 'react';

const ListedMyPlan = () => {

    const { todaysWorkout, saveLater } = useContext(WorkoutContext)
    // console.log(todaysWorkout,"Todays plan")
    // console.log(saveLater, "Save")

    return (
        <div className='container mx-auto mt-7'>
            <h2 className='font-semibold text-4xl'>My Plan</h2>
            <p className='text-slate-500'>Cap of five lifts for today. Finish them, then load more.</p>
            <div className='flex justify-between bg-[#222630] mt-9'>
                <div>
                    <p>Exercises</p>
                    <h2 className='text-[#C2F800]'></h2>
                </div>
                <div>
                    <p>Minutes</p>
                    <h2></h2>
                </div>
                <div>
                    <p>Calories</p>
                    <h2></h2>
                </div>
            </div>


            {/* tab design */}
            <div className="tabs tabs-border">
                <input type="radio" name="my_tabs_2" className="tab" aria-label="Today`s Plan" />
                <div className="tab-content mt-6 space-y-4">
                    {
                        todaysWorkout.length > 0 ? (
                            todaysWorkout.map((workout: Workout) =>{
                                return <TodaysPlanCard key={workout.id} workout={workout}></TodaysPlanCard>
                            })
                        ):(
                            <div className='text-center'>
                                <h2 className='font-semibold text-3xl'>Nothing here yet!</h2>
                                <p className='text-slate-400'>Browse the library and add a lift to get today moving.</p>
                                <button className='text-[#C2F800]'>Go to workouts</button>
                            </div>
                        )
                    }
                </div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved" defaultChecked />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    {

                    }
                </div>

                
            </div>

        </div>
    );
};

export default ListedMyPlan;