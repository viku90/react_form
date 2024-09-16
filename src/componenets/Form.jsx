import React from 'react'
import { useForm } from 'react-hook-form'

function Form({hnd}) {
  const {register, handleSubmit,reset}= useForm();
  const h = (data)=>{
    hnd(data);
    reset();
  
  }
  return (
    <div className='mt-10 flex gap-10 justify-center'>
    <form className='flex gap-10' action="" onSubmit={handleSubmit(h)}>
     <input {...register('name')} className='rounded-md px-3 py-1 text-base font-semibold outline-none' type="text" placeholder='Name' />
     <input {...register('email')} className='rounded-md px-3 py-1 text-base font-semibold outline-none'  type="text" placeholder='Email' />
     <input {...register('image')} className='rounded-md px-3 py-1 text-base font-semibold outline-none' type="text" placeholder='image url'/>
     <input className='px-5 text-white font-semibold py-1 rounded-md bg-blue-500' type="submit" />
    </form>
    </div>
  )
}

export default Form