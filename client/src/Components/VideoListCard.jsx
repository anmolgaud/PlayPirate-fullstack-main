import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const tempList =  [
    '1 - Introduction.mp4',
    '2 - What is CSS.mp4',
    '4 - CSS History Present & Future.mp4',
    '5 - Course Outline.mp4',
    '7 - Course Prerequisites.mp4',
    '8 - How To Get The Most Out Of This Course.mp4',
    '9 - Recommended Tools.mp4'
  ]

const VideoListCard = () => {
    const [videoList, setVideoList] = useState(tempList)
    const [isActive, setisActive] = useState(true)
    const handleActive = () => setisActive(!isActive)
  return (
    <div className='bg-gray-600 relative'>
        <div className='flex items-center justify-between px-4 py-2 text-lg font-semibold border-4 border-indigo-500' onClick={handleActive}>
            <p className=''>{'Parent Folder'}</p>
            {!isActive &&<FaAngleDown  className='mr-8 w-6 h-6'/>}
            {isActive && <FaAngleUp className='mr-8 w-6 h-6'/>}
        </div>
        {isActive && 
        <ul className='bg-gray-500'>
            {videoList.map((item, index) => {
                return(
                    <li className='py-4 mx-4 border-b-2 border-blue-300 overflow-ellipsis'>{item}</li>
                )
            })}
        </ul>}
    </div>
  )
}

export default VideoListCard