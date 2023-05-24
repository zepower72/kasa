import React from 'react'

export default function HostName({firstName, lastName}) {
   
  return (
    <div className='hostName'>
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  )
}