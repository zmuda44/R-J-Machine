import { useState, useEffect, useRef } from 'react';

const testimonialsArray = [
  {
  id: 1,
  name: "Greg Bailey",
  img: "/heashot random.jpg",
  text: "Great product and great service."
  },
  {
  id: 2,
  name: "Floyd Richards",
  img: "/heashot random.jpg",
  text: "asdfsadfasdfasdfsdffsdfa sdfsdfsadfsdsadfasdfasdfa sdfsdfasdfasdfasdfsadfasdfasdf"
  },
  {
  id: 3,
  name: "Andrew McDonald",
  img: "/heashot random.jpg",
  text: "We had a project that we needed done quickly. We called around to many different shops but couldn't find a product we liked on time."
  },
]


function TestimonialBlock ({ name, img, text, style }) {
  console.log(img)
  return (
   

    <div className="block" style={style} >  
      <img src={img}/>      
      <h2>{name}</h2>            
      <p>{text}</p>
    </div>
  )
}




const Testimonials = () => {



const [blockIndex, setBlockIndex] = useState(0)

const showPrevBlock = () => {

  setBlockIndex(index => {
    if (index === 0) return testimonialsArray.length -1
    return index - 1
  })
}

const showNextBlock = () => {
console.log("clicked")
  setBlockIndex(index => {
    if (index === testimonialsArray.length-1) return 0
    return index + 1
  })
}




  return (
    <section id="testimonials">
    <div className="container">
     <button id="left" onClick={showPrevBlock}>L</button>
      <div className="block-cont">
      {testimonialsArray.map((testimonial) => (
        <TestimonialBlock 
        key={testimonial.id}
        name={testimonial.name}
        img={testimonial.img}
        text={testimonial.text}
        style={{ translate: `${-100 * blockIndex}%` }}
        />
      ))}  

      </div>

      <button id="R" onClick={showNextBlock}>R</button>

    </div>
  
    </section>
  )
}


export default Testimonials;