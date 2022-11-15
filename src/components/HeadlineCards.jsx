import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*Cards */}
        <div className='rounded-xl relative'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Pot , BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 abslolute mt-4 bottom-4'>Order Now</button>

            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className='rounded-xl relative'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Pot , BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 mt-4 abslolute bottom-4-'>Order Now</button>

            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className='rounded-xl relative'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Pot , BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 mt-4 abslolute bottom-4-'>Order Now</button>

            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://media.istockphoto.com/id/1371797343/photo/vegan-burger-with-beetroot-avocado-sauce-and-lettuce-salad-on-white-background-healthy.jpg?b=1&s=170667a&w=0&k=20&c=v_ONo_cv9lcUpAp_aqyvWck47CimHUxoKU4cljHEsTg=" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards