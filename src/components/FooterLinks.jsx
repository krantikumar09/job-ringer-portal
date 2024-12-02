import React from 'react'

const FooterLinks = () => {
  return (
    <div className='border-t border-gray-400 text-center'>
        <ul className='flex gap-3 mb-4 flex-wrap'>
            <li className='text-sm text-black font-normal'>Terms and Conditions |</li>
            <li className='text-sm text-black font-normal'>Privacy Policy |</li>
            <li className='text-sm text-black font-normal'>Refund / Cancellation Policy |</li>
            <li className='text-sm text-black font-normal'>About Us |</li>
            <li className='text-sm text-black font-normal'>Contact Us |</li>
            <li className='text-sm text-black font-normal'>FAQ</li>
        </ul>
        <p className='text-sm text-black font-normal text-center'>&copy; All Rights Reserved.</p>
    </div>
  )
}

export default FooterLinks