import React from 'react'

export default function Tags(props) {
  const tags = props.tags
  return (
  <section className='tags__container'>
    {tags.map((tag, index) => { return (<div className='tag' key={index+"tag"}>{tag}</div>) }
    )}
    
  </section>
    
  )
}