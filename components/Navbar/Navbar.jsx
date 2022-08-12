import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <div className='static z-100 t-0 r-0'>
            <div className='w-full flex bg-black text-xl z-100 pb-1'>
                <div className='m-4 flex justify-left'>
                    <h1 className='text-white'>CEMCNJ</h1>
                </div>
                <div className='text-center ml-auto m-3 mt-4 mr-1 justify-right flex grid grid-cols-5'> 
                    <div>
                        <button className='peer text-white px-5'>
                            <Link href="."><a>
                                <h1 className='text-white'>Introduction</h1>
                            </a></Link>
                        </button>
                        <div className='absolute justify-center hidden peer-hover:flex hover:flex flex-col bg-black drop-shadow-lg text-white py-2 px-2'>
                            <a href=".">About CEMCNJ</a>
                            <a href=".">Our Pastors</a>
                            <a href=".">Newcomers</a>
                            <a href=".">Contact</a>
                        </div>
                    </div>
                    <div>
                        <button className='peer text-white px-5'>
                            <Link href="."><a>
                                <h1 className='text-white'>Schedule</h1>
                            </a></Link>
                        </button>
                        <div className=' absolute justify-center hidden peer-hover:flex hover:flex flex-col bg-black drop-shadow-lg text-white py-2 px-2 transition-1000'>
                            <a href=".">Service Hours</a>
                            <a href=".">Calendar</a>
                        </div>
                    </div>
                    <div>
                        <button className='peer text-white px-5'>
                            <Link href="."><a>
                                <h1 className='text-white'>Sermons</h1>
                            </a></Link>
                        </button>
                    </div>
                    <div>
                        <button className='peer text-white px-5'>
                            <Link href="."><a>
                                <h1 className='text-white'>Events</h1>
                            </a></Link>
                        </button>
                    </div>
                    <div>
                        <button className='peer text-white px-5'>
                            <Link href="."><a>
                                <h1 className='text-white'>More</h1>
                            </a></Link>
                        </button>
                        <div className='absolute text-center hidden peer-hover:flex hover:flex flex-col bg-black drop-shadow-lg text-white py-2 px-2'>
                            <a href=".">Forms</a>
                            <a href=".">Prayer Requests</a>
                            <a href=".">Baptism</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}