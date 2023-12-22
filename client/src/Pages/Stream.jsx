import React from 'react'
import { useEffect, useState } from 'react';
import VideoListCard from '../Components/VideoListCard';
import axios from 'axios'

const getDir = async (reducer) => {
  try {
    const res = await axios.get('http://localhost:3000/dir/getDir');
    reducer(res.data)
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

const Stream = () => {
  const [currentVideo, setCurrentVideo] = useState("")
  const [dir, setDir] = useState([]);

  useEffect(() => {
    getDir(setDir)
  }, [])
  
  return (
    <div className="bg-[#0E0F1E] text-slate-100 max-h-[100vh] overflow-hidden">
      <nav className="">
        <h1 className="ml-8 text-3xl py-4 font-bold tracking-wide">
          PlayPirate
        </h1>
      </nav>
      <main className="grid grid-cols-12">
        <div className="col-start-1 col-end-10 w-full h-[100vh]">
        <video className='w-full h-auto' controls autoPlay>
          <source src={currentVideo} type='video/mp4'/>
        </video>
        <p className='text-lg mt-2 ml-8'>Current Video : <span>{currentVideo}</span></p>
        </div>
        <div className="col-start-10 col-end-13 overflow-scroll">
          {/* <VideoListCard /> */}
        </div>
      </main>
    </div>
  );
}

export default Stream