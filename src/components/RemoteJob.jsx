import React from 'react'
import Title from './Title'
import CardSlider from './CardSlider'
import { remoteJobs } from '../assets/assets'

const RemoteJob = () => {
  return (
    <div className='remote-job mt-12'>
        <Title heading={"Remote Jobs"}/>

        <div className="mt-6">
            <CardSlider jobList={remoteJobs}/>
        </div>
    </div>
  )
}

export default RemoteJob