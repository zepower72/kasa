import React from 'react'

import Star from '../assets/star_rate-24px empty.svg'



export default function Rating({rating}) {
  const range = [1, 2, 3, 4, 5]

  return (
    <section className='rating'>
      {range.map((number) => 
        rating >= number ? <Star className="star"alt="star" key={number}/> : <Star className="starEmpty" key={number+"star"}/>
      )}
    </section>
  )
}