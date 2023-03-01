import React from 'react'
import '../styles/Banner.css'

export default function Banner(props) { // Banner is a component
    const {banner, text} = props // props is an object
    return ( // return a component
      <section className="banner">
          <div className="banner__shadow"></div>
          <img src={banner} className="banner__img" alt="falaise"/>
          { text && <h1>{text}</h1 >}
      </section>
    )
  }