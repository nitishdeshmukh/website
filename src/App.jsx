import './App.css'
import { Button, Footer, Navbar, Section, Carousel } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Section id="aboutUs" bgColor="bg-white" className="pt-12 border">
        <div className="flex flex-col md:flex-row items-center justify-around w-full h-full">
          {/* Left Side */}
          <div className="w-2/3 space-y-6 px-10 ">
            <div>
            <p className="text-6xl  pb-3 mb-4">
              Exceptional
              <span className="px-3 bg-custom-gradient text-transparent bg-clip-text font-bold">
                Product
              </span>
              starts
              <p className='font-bold inline-block'>with Exceptional</p>
              <span className="px-3 bg-custom-gradient text-transparent bg-clip-text font-bold">
                teams
              </span>
            </p>

              <p className="text-lg h-40 text-justify w-3/4 text-gray-700 mt-12 ">
                At RDK Technologies, we specialize in building and managing top-tier development teams dedicated to turning your vision into reality. Our world-class developers are experts in their fields, ensuring that your project benefits from cutting-edge technology and innovative solutions.
              </p>
              <p className='mb-8'>Ready to bring your ideas to life? </p>
            </div>
            <Button className=''>
              Let’s get started today!
            </Button>
          </div>
          {/* Right Side */}
          <div className="w-2/3 flex justify-center items-stretc">
            <img
              src="../Hero-Wrapper__image.jpg"
              alt="Hero Illustration"
              className="max-w-full h-81 object-cover rounded-lg shadow-lg -mr-12"
            />
          </div>
        </div>
      </Section>

      <Section id='services' className=''>
        <div>
          <Carousel></Carousel>
        </div>
      </Section>
      <Section id='caseStudies'>
        <div>
          <h1 className='text-center'>Case Studies Section</h1>
        </div>
      </Section>
      <Section id='blog'>
        <div>
          <h1 className='text-center'>Blog Section</h1>
        </div>
      </Section>
      <Section id='howItWorks'>
        <div>
          <h1 className='text-center'>Work Section</h1>
        </div>
      </Section>
      <Section id='hire'>
        <div>
          <h1 className='text-center'>Hire Section</h1>
        </div>
      </Section>
      <Footer />
    </>
  )
}

export default App
