import React from 'react'
import Logo from '@Images/logo.png'

function Products() {
  return (
    <div className='max-w-[1400px] m-auto p-4 grid lg:grid-cols-3 grid-flow-row-dense gap-4'>
        <div className='rounded-lg h-90 max-w-sm border-2 border-red-100'>
            <img src={Logo} alt='focusmedia logo' className='w-full h-full m-auto px-4 relative' />
        </div>
        <div className='flex flex-col self-center rounded-lg h-60 border-2 border-red-100 lg:col-span-2'>
            <h2 className='w-full text-center text-2xl text-bold'>Title</h2>
            <p className='font-["Arial"]'>Minim Lorem duis laborum nisi in exercitation velit irure. Excepteur pariatur nostrud nisi id eiusmod tempor. Consequat enim ullamco amet Lorem ullamco laborum eu quis. Ipsum consectetur labore consectetur sit et veniam. Minim enim proident laborum elit officia irure sunt velit magna fugiat.</p>
        </div>

        <div className='flex flex-col self-center rounded-lg h-64 border-2 border-red-100 lg:col-span-2'>
            <h2 className='w-full text-center text-2xl text-bold'>Title</h2>
            <p className='font-["Arial"]'>Minim Lorem duis laborum nisi in exercitation velit irure. Excepteur pariatur nostrud nisi id eiusmod tempor. Consequat enim ullamco amet Lorem ullamco laborum eu quis. Ipsum consectetur labore consectetur sit et veniam. Minim enim proident laborum elit officia irure sunt velit magna fugiat.</p>
        </div>
        <div className='rounded-lg h-90 max-w-sm  border-2 border-red-100 '>
            <img src={Logo} alt='focusmedia logo' className='w-full h-full m-auto px-4 relative' />
        </div>
    </div>
  )
}

export default Products