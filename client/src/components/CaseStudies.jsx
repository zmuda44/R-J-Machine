import { useState, useEffect, useRef } from 'react';


const caseStudyArray = [
  {
  id: 1,
  title: "Custom burner project",
  img: "/bunsen burner close.jpg",
  description: "The custom burner project was one of our favorites. Our local school needed 50 new bunson burners for their classrooms."
  },
  {
  id: 2,
  title: "Fabricated Stairway rails",
  img: "/metal staircase.jpg",
  description: "A commercial flight of stairs, over 1,000 ft and 500 pieces."
  },
  {
  id: 3,
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
        <h2>Case Studies</h2>
        <p>See below for details on some of our favorite projects.</p>
        <div className="case-study-cards">
        {caseStudyArray.map((study) => (       
          <div key={study.id} className="card" style={{ translate: `${-100 * blockIndex}%` }}>        
            <h2>{study.title}</h2>
            <img src={study.img}/>
            <p>{study.description}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies;