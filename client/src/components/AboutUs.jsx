import bgImage from '../../public/Closeup of CNC machine with sparks-1.webp';



const AboutUs = () => {

  //backgroundImage filepath in CSS file doesn't render properly
  const setionStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  textAlign: 'center',
  padding: '100px 0',
};

  return (
    <section id="about-us" style={setionStyle}>       
      <div className="about-us-content">
        <div className="container">
          <h1>Custom Fabrication, Custom Parts and Custom Project</h1>      
          <h2>About Us</h2>
          <div className="content">
            <img src="./machineshop.jpg" />
            <div className="text">
            <p>In the world of a small business, you must remain competitive. 
            Our philosophy is that we will not stop working hard. Working hard to compete on price, quality and customer service. 
            We are a family-owned, machining and miscellaneous fabrication job shop, specializing in custom projects, parts and burners.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu 
            </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}


export default AboutUs