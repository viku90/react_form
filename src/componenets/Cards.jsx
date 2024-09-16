import React from 'react'
import Card from './Card'

function Cards({users,hr}) {
  return (
    <div className='w-full max-h-96 overflow-auto p-2 flex justify-center gap-4 flex-wrap'>
      
      {users.map((elem,index)=>{return <Card hr={hr} user={elem} key={index} index={index}/>})}
      
    </div>
  )
}

export default Cards