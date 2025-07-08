import React from 'react'
import MetaForm from '../components/MetaForm'
import PreviewTabs from '../components/PreviewTabs'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row gap-8 px-4 sm:px-6 py-6 max-w-7xl mx-auto'>
      {/* Left:Form */}
      <div className='w-full md:w-1/2'>
        <MetaForm/>
      </div>

      {/* Right: Preview */}
      <div className='w-full md:w-1/2'>
        <PreviewTabs/>
      </div>
    </div>
  )
}

export default Home
