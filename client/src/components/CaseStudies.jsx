import { useState, useEffect, useRef } from 'react';


const caseStudyArray = [
  {
  title: "Custom burner project",
  img: "/bunsen burner close.jpg",
  description: "The custom burner project was one of our favorites. Our local school needed 50 new bunson burners for their classrooms."
  },
  {
  title: "Fabricated Stairway rails",
  img: "/metal staircase.jpg",
  description: "A commercial flight of stairs, over 1,000 ft and 500 pieces."
  },
  {
  title: "Case Study 3",
  img: "/bunson burner tables.jpg",
  description: "this is case study 3"
  }
]

const CaseStudies = () => {

const [blockIndex, BlockIndex] = useState(0)

const showPrevBlock = () => {
  setBlockIndex(index => {
    if (index === 0) return caseStudyArray.length -1
    return index - 1
  })
}

const showNextBlock = () => {

  setProjectIndex(index => {
    if (index === caseStudyArray.length-1) return 0
    return index + 1
  })
}


  return (

    <section id="case-studies">
    <div className="container">


      {caseStudyArray.map((study) => (
       
          <div className="card" style={{ translate: `${-100 * blockIndex}%` }}>        
          <h2>{study.title}</h2>
          <img src={study.img}/>
          <p>{study.description}</p>
        </div>

      ))}

    </div>



    </section>
  )
}


export default CaseStudies;