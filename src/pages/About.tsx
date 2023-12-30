import Background from '../assets/images/plants_bg.jpeg'

function About() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-50 text-black rounded'>This Greenventory is meant to help you keep track of the plants in yoyur personal collection. From houseplants to your small business we want to help you 
          keep track of your green friends and what you know about them.</h3>
        </div>
    </div>
  )
}

export default About