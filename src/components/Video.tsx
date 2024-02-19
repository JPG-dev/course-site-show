import React from 'react'

interface Props {
  src: string;
}

const Video = ({ src }: Props) => {
  return (
    <iframe className='w-full h-[240px] md:h-[480px] md:w-[853px]' width="560" height="315" src={src}></iframe>
  )
}

export default Video