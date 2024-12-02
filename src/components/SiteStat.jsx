import React from 'react'

const SiteStat = () => {
  return (
    <div className='border-t border-gray-400 flex flex-col md:flex-row items-center justify-center gap-6 text-center w-full'>
        <div>
            <p className='text-base text-black font-medium mb-2'>Job Posted</p>
            <h6 className='text-xl md:text-3xl font-bold text-darkBlue'>31258</h6>
        </div>

        <div>
            <p className='text-base text-black font-medium mb-2'>Jobs Filled</p>
            <h6 className='text-xl md:text-3xl font-bold text-darkBlue'>15153</h6>
        </div>

        <div>
            <p className='text-base text-black font-medium mb-2'>Employers</p>
            <h6 className='text-xl md:text-3xl font-bold text-darkBlue'>19967</h6>
        </div>

        <div>
            <p className='text-base text-black font-medium mb-2'>Active Users</p>
            <h6 className='text-xl md:text-3xl font-bold text-darkBlue'>1295533</h6>
        </div>
    </div>
  )
}

export default SiteStat