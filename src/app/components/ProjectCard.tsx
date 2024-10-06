import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({imgUrl, title, description}) => {
  return (
    <div>
        <div 
        className='h-52 md:h-72 rounded-t-xl'
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
          <Link href="/" className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] m-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 cursor-pointer hover:white'/>
          </Link>
        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard