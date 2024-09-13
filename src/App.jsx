import './App.css'
import { Button, Footer, Navbar, Section, Cardcarousel, Logocarousel } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Section id="aboutUs" className="min-h-screen pt-12 border">
        <div className="flex flex-col lg:flex-row items-center justify-around w-full h-full">
          {/* Left Side */}
          <div className="w-full p-6 lg:w-3/5 lg:px-5">
          <div>
              <div className="text-3xl lg:text-6xl  border space-x-2">
                <span className='font-light'>Exceptional</span>
                
                <span className="bg-custom-gradient text-transparent bg-clip-text font-bold inline-block">
                  Product
                </span>
                <span className='font-light inline-block'>starts</span>
                <span className="font-bold">with Exceptional</span>
                <span className="bg-custom-gradient text-transparent bg-clip-text font-bold">
                  teams
                </span>
              </div>

              <p className="text-sm lg:text-lg text-justify w-full lg:w-3/4 text-gray-700 mt-6 lg:mt-12">
                At RDK Technologies, we specialize in building and managing top-tier
                development teams dedicated to turning your vision into reality. Our
                world-class developers are experts in their fields, ensuring that your
                project benefits from cutting-edge technology and innovative
                solutions.
              </p>
              <p className="mb-4 mt-8 lg:mb-8">Ready to bring your ideas to life?</p>
            </div>
            <Button className="">Let’s get started today!</Button>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2 flex justify-center items-center pt-14 lg:mt-0">
            <img
              src="../Hero-Wrapper__image.jpg"
              alt="Hero Illustration"
              className="h-70 object-cover rounded-lg shadow-lg -mr-12"
            />
          </div>
        </div>
      </Section>

      <Section id='services'className='h-[210vh]'>
        <div>
          <Cardcarousel></Cardcarousel>
        </div>
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-around border border-black p-4 lg:p-8">
          <div className="max-w-xl w-full lg:w-1/2 space-y-6">
          <p className="w-full text-2xl lg:text-4xl text-slate-800 inline-block">
            Leading companies trust us <span className="block font-bold">to develop software</span>
          </p>

            <p className="text-base lg:text-xl leading-8 text-slate-950 inline-block pt-6 lg:pt-10">
              At RDK Technologies, we enhance tech teams with top-tier development capacity, ensuring comprehensive support throughout the project lifecycle. As a premier custom software development company, we don't just build teams—we guarantee the successful delivery of your project from start to finish.
            </p>

            <div className="pt-6 lg:pt-10">
              <div className="text-base lg:text-xl bg-custom-gradient text-transparent bg-clip-text">
                See more Information
                <div>arrow sign here</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <img src="Rectangle_9.png" alt="logo" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>
        </div>
        <Logocarousel></Logocarousel>
      </Section>

      <Section id='caseStudies' className='h-screen text-center border border-black'>
        <div>
          <h1 className='text-center'>Case Studies Section</h1>
        </div>
      </Section>
      <Section id='blog' className='h-screen text-center border border-black'>
        <div>
          <h1 className='text-center'>Blog Section</h1>
        </div>
      </Section>
      <Section id='howItWorks' className='h-screen text-center border border-black'>
        <div>
          <h1 className='text-center'>Work Section</h1>
        </div>
      </Section>
      <Section id='hire' className='h-screen text-center border border-black'>
        <div>
          <h1 className='text-center'>Hire Section</h1>
        </div>
      </Section>
      <Footer />
    </>
  )
}

export default App
