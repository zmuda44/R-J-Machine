import { useState, useEffect, useRef } from 'react';

const testimonialsArray = [
  {
  id: 1,
  name: "Greg Bailey",
  img: "/istockphoto-508699681-612x612.jpg",
  text: "Great product and great service."
  },
  {
  id: 2,
  name: "Floyd Richards",
  img: "/headshot-portrait-smiling-blue-collar-footage-208780525_iconl.webp",
  text: "High quality work at a very affordable. Highly recommended."
  },
  {
  id: 3,
  name: "Andrew McDonald",
  img: "/Headshot_Smile_Normal.png",
  text: "We had a project that we needed done quickly. We called around to many different shops but couldn't find a product we liked on time."
  },
]


function TestimonialBlock ({ name, img, text, style }) {  
  return (
    <div className="block" style={ style } >  
      <img src={img}/>      
      <h3>{name}</h3>            
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
  setBlockIndex(index => {
    if (index === testimonialsArray.length-1) return 0
    return index + 1
  })
}

return (
  <section id="testimonials">
    <div className="container">
      <h2>Testimonials</h2>
      <p>See what customers like you are saying about our products and service!</p>

      <div className="testimonial-cards">
        <button id="left" onClick={showPrevBlock}>{`<`}</button>
        <div className="block-cont">
          <div
            className="block-wrapper"
            style={{
              display: 'flex',
              transform: `translateX(${-100 * blockIndex}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {testimonialsArray.map((testimonial) => (
              <TestimonialBlock
                key={testimonial.id}
                name={testimonial.name}
                img={testimonial.img}
                text={testimonial.text}
                style={{ minWidth: '100%' }}
              />
            ))}
          </div>
        </div>
        <button id="right" onClick={showNextBlock}>{`>`}</button>
      </div>
    </div>
  </section>
);
}

export default Testimonials;