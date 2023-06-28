import React from 'react'

//La fonction HostName accepte un objet en tant qu'argument, et à l'intérieur de la fonction, on accède aux propriétés firstName et lastName de cet objet.
export default function HostName({firstName, lastName}) {
   
  return (
    <div className='hostName'>
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  )
}