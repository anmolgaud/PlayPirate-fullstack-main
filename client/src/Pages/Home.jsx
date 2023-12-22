import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const [path, setPath] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async() => {
    try {
      const res = await axios.post("http://localhost:3000/dir/setDir",{path : path}, {headers : {
        'Content-Type' : 'application/x-www-form-urlencoded',
      }});
      if(res.status === 200)
        navigate('/stream')
      else
        console.log(res.data.msg)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="bg-[#0E0F1E] h-[100vh] relative overflow-hidden text-slate-100">
        <div className="absolute -top-1/2 -right-24 w-[800px] h-[800px] bg-gradient-to-tr from-violet-800 to-violet-400 rounded-full opacity-50 blur-sm"/>
        <div className="absolute -bottom-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet-800 to-violet-400 rounded-full opacity-50 blur-md"/>
        <div className="mx-32 relative z-10">
          <nav className="">
            <h1 className="text-3xl py-4 font-bold tracking-wide">
              PlayPirate
            </h1>
          </nav>
          <div className="flex flex-col items-center justify-center mt-8">
            <div>
              <h1 className="capitalize font-bold text-8xl">
                Play local files <br /> smoothly...
              </h1>
            </div>
            <div
              className="flex w-full flex-col items-center justify-center mt-16"
            >
              <input
                className="h-10 w-1/2 rounded-lg bg-slate-200 border-2 border-slate-100 focus:outline-none text-slate-800 px-2"
                type="text"
                name="path"
                onChange={(e) => setPath(e.target.value)}
              />
              <div className="relative mt-4">
              <div className="absolute z-9 bg-gradient-to-r -inset-[2px] from-red-500 to to-blue-500 rounded-lg"></div>
                  <button className="relative px-12 py-3 z-10 bg-[#0E0F1E] rounded-lg"
                  onClick={handleSubmit}>
                    Play
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
