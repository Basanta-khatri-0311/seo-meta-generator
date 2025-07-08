import React, { useState } from 'react'
import MetaForm from '../components/MetaForm'
import PreviewTabs from '../components/PreviewTabs'

const Home = () => {
  const [metaData, setMetaData] = useState({
    title:'',
    description:'',
    image:'',
    url:''
  })
  return (
    <div className='flex flex-col md:flex-row gap-8 px-4 sm:px-6 py-6 max-w-7xl mx-auto'>
      {/* Left:Form */}
      <div className='w-full md:w-1/2'>
        <MetaForm metaData={metaData} setMetaData={setMetaData}/>
      </div>

      {/* Right: Preview */}
      <div className='w-full md:w-1/2'>
        <PreviewTabs metaData={metaData}/>
      </div>
    </div>
  )
}

export default Home
