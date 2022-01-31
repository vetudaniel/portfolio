import React  from 'react'
import { useState } from 'react'
import './About.css'
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  



export function About() {
   
 const [years] = useState([{
    id:1,
    year:"2015",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
{
    id:2,
    year:"2016",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
{
    id:3,
    year:"2017",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
])


  

    return (
        <div className="wrapper">
            <div className="heroo">
                <OwlCarousel items={1} nav={true} dots={true} className="owl-carousel owl-theme">
                  {years.map(year => {
                      return (
                        
                            
                            <div key={year.id} className="carouselItem ">
                                <h1 className="year">{year.year}</h1>
                                <p>{year.text}</p>
                                
                            </div>
                         
                      )
                  })}
                    
                    
                </OwlCarousel>
            </div>
        </div>
    )
}
