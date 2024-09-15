const CaseStudies = () => {

 const caseStudyArray = [
    {
    title: "Custom burner project",
    img: "public/bunsen burner close.jpg",
    description: "The custom burner project was one of our favorites. Our local school needed 50 new bunson burners for their classrooms."
    },
    {
    title: "Fabricated Stairway rails",
    img: "public/metal staircase.jpg",
    description: "A commercial flight of stairs, over 1,000 ft and 500 pieces."
    },
    {
    title: "Case Study 3",
    img: "my image",
    description: "this is case study 3"
    }
]


  return (

    <section id="case-studies">
      {caseStudyArray.map((study) => (
        <div className="card">        
        <h2>{study.title}</h2>
        <img src={study.img}/>
        <p>{study.description}</p>
      </div>
      ))}


    </section>
  )
}


export default CaseStudies;