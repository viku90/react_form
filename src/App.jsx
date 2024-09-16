import React, { useState } from 'react'
import Cards from './componenets/Cards'
import Form from './componenets/Form'

function App() {
  const [users, setusers]= useState([]);

  const hnd=(data)=>{
    setusers([...users, data ]);
  }
  const hr = (id)=>{
    setusers(()=>users.filter((item,index)=> index != id))
  }
  return (
    <div className='w-full h-screen bg-zinc-400 flex items-center justify-center p-10'>
      <div className='container mx-auto'>
      <Cards hr={hr} users={users} />
        <Form hnd={hnd} />
      </div>
    </div>
  )
}

export default App