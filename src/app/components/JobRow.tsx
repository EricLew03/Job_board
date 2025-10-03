import React from 'react'

const JobRow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
        <div className='content-center'> 
            <img 
            className=' size-12'
            src = 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' alt = ''/>
        </div>

        <div className='grow'>
            <div className='text-gray-500 text-sm'> Spotify</div>
            <div className='font-bold text-lg mb-1'> Software Developer</div>
            <div className='text-gray-400 text-sm'> 
                Remote &middot; Vancouver, BC &middot; Full Time </div>
        </div>
        <div className='content-end text-gray-600 text-sm'>2 Weeks Ago</div>
    </div>
  )
}

export default JobRow