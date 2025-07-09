import React from 'react'

function CategoryCard() {
  return (
    <div className='w-[250px] h-[300px] relative overflow-hidden group cursor-pointer rounded-[10px]' >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/960px-Youth-soccer-indiana.jpg" className=' transition-all duration-500 w-full h-full object-cover  group-hover:scale-110 ' alt="" />
        <div className=' w-full h-full absolute z-20 bg-[rgba(0,0,0,0.3)] top-0'></div>
        <div className='absolute w-full h-full inset-0 text-white flex justify-center items-center font-semibold'>
            Sport
        </div>
    </div>
  )
}

export default CategoryCard