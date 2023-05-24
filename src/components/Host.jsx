import React from 'react'

export default function Host({name, profil}) {
  return (
    <img src={profil} className="hostPicture" alt={`profile of${name}`}/>
  )
}