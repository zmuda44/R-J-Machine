import { useState, useEffect, useRef } from 'react';



const Testimonials = () => {

  const testimonialsArray = [
    {
    name: "Greg Bailey",
    img: "public/bunsen burner close.jpg",
    text: "Great product and great service."
    },
    {
    name: "Floyd Richards",
    img: "public/bunsen burner close.jpg",
    text: "asdfsadfasdfasdfsdffsdfasdfsdfsadfsdsadfasdfasdfasdfsdfasdfasdfasdfsadfasdfasdf"
    },
    {
    name: "Andrew McDonald",
    img: "public/bunsen burner close.jpg",
    text: "We had a project that we needed done quickly. We called around to many different shops but couldn't find a product we liked on time."
    },
]


const [blockIndex, BlockIndex] = useState(0)

const showPrevBlock = () => {
  setBlockIndex(index => {
    if (index === 0) return testimonialsArray.length -1
    return index - 1
  })
}

const showNextBlock = () => {

  setProjectIndex(index => {
    if (index === testimonialsArray.length-1) return 0
    return index + 1
  })
}




  return (
    <section id="testimonials">
    <div className="container">
      <div className="block-cont">

    
      {testimonialsArray.map((testimonial) => (
        <div className="block">  

          <div></div>
          {/* <img src={study.img}/>       */}
          <h2>{testimonial.name}</h2>            
          <p>{testimonial.text}</p>
        </div>
      ))}
      </div>



    </div>
  
    </section>
  )
}


export default Testimonials;