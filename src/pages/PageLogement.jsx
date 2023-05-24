import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Dropdown from "../components/Dropdown"
import HostName from "../components/HostName"
import Host  from "../components/Host"
import Rating from "../components/Rating"
import Carrousel from "../components/Carrousel"
import Tags from "../components/Tags"

import dataRent from "../datas/logements.json"

export default function Rental() {
    const { id } = useParams()
    const rent = dataRent.find(rental => rental.id === id.slice(1))

    const navigate = useNavigate()
    useEffect(() => { 
        if (!rent) { return navigate("/*") }
    }, [navigate, rent])
    
    let firstName
    let lastName

    if (rent)  {
        const arrayHost = rent.host.name.split(" ")
        firstName = arrayHost.shift()
        lastName = arrayHost.join(" ")


        return (
            <main className="rental__container">
                <Carrousel pictures={rent.pictures}/>

                <div className="rental__presentation">
                    <h1>{rent.title}</h1>
                    <p className="rental__location">{rent.location}</p>
                </div>

                <section className='hostProfile'>
                    <HostName firstName={firstName} lastName={lastName}/>
                    <Host name={rent.host.name} profil ={rent.host.picture}/>
                </section>

                <Rating rating={rent.rating}/>
            
                <Tags tags={rent.tags}/>

                <section className="dropdown__container">
                    <Dropdown title="Description" >
                        <p className="dropdown__body">{rent.description}</p>
                    </Dropdown>
                    <Dropdown title="Équipements" >
                        <ul className="dropdown__body" >
                            { rent.equipments.map((item, index) => 
                                <li key={ index } className="dropdown__body__item">{ item }</li>) 
                            }
                        </ul>
                    </Dropdown>
                </section> 
                
            </main>
        )
    }
}
