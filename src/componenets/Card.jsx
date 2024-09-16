import React from 'react'

function Card({user,hr,index}) {
  return (
    <div className='w-52 h-full bg-zinc-300 rounded-lg flex flex-col items-center p-2'>
        <div className='image w-[3vw] h-[3vw] rounded-full bg-blue-500 overflow-hidden' >
            <img className='w-full h-full object-fit' src={user.image} alt="" />
        </div>
        <h1 className='mt-1 text-xl font-semibold'>{user.name}</h1>
        <h4 className='opacity-60 text-xs font-semibold'>{user.email}</h4>
            <p className='mt-2 text-center text-xs font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo enim voluptate!</p> 
            <button onClick={()=>hr(index)} className='px-3 py-1 bg-red-600 text-xs font-semibold rounded-md mt-2 text-white'>Remove It</button>
    </div>
  )
} 

export default Card 