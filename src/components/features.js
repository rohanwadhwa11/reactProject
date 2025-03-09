import React from 'react'
import Course from './Course';
import Button from './Button';

export default function features() {
    const features = [
        {
            tag:<i class="fa-regular fa-calendar"></i>,
            desc: "Sketching Basics - shape, form and proportion fundamentals"
        },
        {
            tag:<i class="fa-solid fa-share-nodes"></i>,
            desc: "Digital Painting -  Master shading, blending & coloring techniques"
        },
        {
            tag:<i class="fa-brands fa-whatsapp"></i>,
            desc: "Tool Mastery - Hands-on with Procreate, Phtoshop & Illustrator"
        },
        {
            tag:<i class="fa-solid fa-newspaper"></i>,
            desc: "Character & Concept Art - Create professional-grade designs"
        },
        {
            tag:<i class="fa-solid fa-chart-line"></i>,
            desc: "Portfolio Building -  Craft stunning peices to showcase your skills"
        },
        {
            tag:<i class="fa-solid fa-clipboard-user"></i>,
            desc: "Bonus: Monetization guide - how to sell your art & get freelance gigs"
        },
        {
            tag:<i class="fa-solid fa-laptop"></i>,
            desc: "Certificate of completion - Boost your creative career"
        },
        {
            tag:<i class="fa-solid fa-database"></i>,
            desc:"Project -Based Learning -  Build a stunning portfolio"
        },
        {
            tag:<i class="fa-regular fa-circle-user"></i>,
            desc: "Live Mentorship - Weekly Q & A seesions with industry pros"
        },
    ];
      let divStyle = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      };
  return (
    <div className='text-center my-4' style={divStyle}>
      <h3>Not Satisfised Yet?</h3>
      <p>We got you! Here are some extra features</p>
       {features.map((feature)=>{
        return <Course detail={feature}/>
       })}
       <Button title="Book Now for &#8377;79"/>
    </div>
  )
}
