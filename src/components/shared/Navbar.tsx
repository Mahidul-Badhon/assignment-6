"use client"
import Image from 'next/image';
import React, { useContext } from 'react';
import logo from "@/assets/logo.png"
import Link from 'next/link';
import { WorkoutContext } from '@/context/WorkoutContext';
// import link from "@/app/page"
const Navbar = () => {

    const { todaysWorkout, saveLater } = useContext(WorkoutContext)

    return (
        <div className=' border-b border-slate-500'>
            <div className="navbar bg-black container mx-auto shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link href="/">WORKOUTS</Link>
                            </li>
                            <li>
                                <Link href="/myplan">My Plan</Link>
                            </li>
                        </ul>
                    </div>

                    <Image src={logo} alt='Logo'></Image>
                    <a className="btn btn-ghost text-xl">FITLOG</a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/">WORKOUTS</Link>
                        </li>
                        <li>
                            <Link href="/myplan">My Plan</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/myplan">
                        <button className="btn bg-black border-0">Plan
                            <span className='bg-[#C2F800] text-black rounded-full p-2'>{todaysWorkout.length}</span>
                        </button>
                        <button className="btn bg-black border-0 text-white">Saved
                            <span className='border border-slate-400 bg-black rounded-3xl p-2'>{saveLater.length}</span>
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;