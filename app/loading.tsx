import Loader from '@/components/loader/Loader'
import React from 'react'

const loading = () => {
  return (
    <div className="h-[calc(100dvh-56px)] w-full flex justify-center items-center">
      <Loader size={50} borderWidth={4} />
    </div>
  )
}

export default loading