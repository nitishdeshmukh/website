import './App.css'
import {Footer, Navbar, Section, Cardcarousel, Logocarousel, Clientfeedback, CaseStudies, DesignApproach,TechStack, AlkalineDevelopment, FeaturedResources, Card, BackToTop ,AboutUs} from './components'

function App() {
  return (
    <>
      <Navbar />
      <Section id="about" className="lg:pb-20 lg:pt-2 min-h-screen">
        <AboutUs/>
      </Section>

      <Section id='services'className='min-h-[310vh]'>
        <div>
          <Cardcarousel></Cardcarousel>
        </div>
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-around p-4 lg:p-8">
          <div className="max-w-xl w-full lg:w-1/2 space-y-6">
            <div className='bg-[linear-gradient(to_right,_#004589,_#00A1F1)] w-24 h-1.5'></div>

            <div className='text-start'>
              <span className="text-2xl sm:text-3xl lg:text-4xl block lg:leading-relaxed">Leading companies trust us</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold block lg:leading-loose">to develop software</h2>
            </div>

            <p className="text-base lg:text-xl lg:leading-loose text-slate-950 inline-block pt-6 lg:pt-10">
              At RDK Technologies, we enhance tech teams with top-tier development capacity, ensuring comprehensive support throughout the project lifecycle. As a premier custom software development company, we don't just build teams—we guarantee the successful delivery of your project from start to finish.
            </p>

            <div className="pt-6 lg:pt-10">
              <div className="flex items-center text-base lg:text-xl bg-custom-gradient text-transparent bg-clip-text">
                <span className="inline-block font-bold">See more Information</span>
                <img src="./arrow.svg" alt="" className="ml-2 max-w-full object-contain" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 relative">
            {/* Background Image */}
            <img src="Rectangle_9.png" alt="logo" className="w-full h-auto object-cover rounded-lg shadow-lg" />
            
            {/* Centered Image */}
            <div className="absolute inset-0 m-auto w-1/2 h-20 z-20 cursor-pointer">
              <a href="#">
                <img 
                  src="./Play.svg" alt="center1 image" 
                  className="absolute inset-0 m-auto w-1/2 h-20 z-20 cursor-pointer"  
                />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='min-h-10 flex flex-col items-start justify-around pl-16 space-y-6'>
            <div className='bg-[linear-gradient(to_right,_#004589,_#00A1F1)] to-pink-500 w-24 h-1.5'>
            </div>
            <div className='text-start'>
              <span className="text-2xl sm:text-3xl lg:text-4xl block lg:leading-relaxed">Meet the People</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold block lg:leading-loose">We are Working With</h2>
            </div>
          </div>
          {/* <div className='min-h-10 flex flex-col items-end justify-around pr-16 space-y-6'>
            <div className='bg-[linear-gradient(to_right,_#004589,_#00A1F1)] to-pink-500 w-24 h-2'>
            </div>
            <div className='text-end'>
              <span className="text-2xl sm:text-3xl lg:text-4xl block lg:leading-relaxed">Meet the People</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold block lg:leading-loose">We are Working With</h2>
            </div>
          </div> */}
        </div>
        <Logocarousel></Logocarousel>
        <Clientfeedback></Clientfeedback>
      </Section>

      <Section id='caseStudies' className=' text-center'>
        <div>
          <CaseStudies></CaseStudies>
        </div>
      </Section>
      <Section id='blog' className='min-h-[260vh]'>
        <Card/>
      </Section>
      <Section id='howItWorks' className='max-h-[440vh]'>
        <DesignApproach></DesignApproach>
        <TechStack></TechStack>
        <AlkalineDevelopment></AlkalineDevelopment>
        <FeaturedResources></FeaturedResources>
      </Section>
      <Section id='hire' className=' h-auto md:h-[50vh] flex justify-center items-center'>
        <div className='container mx-20 px-4 py-8 bg-sky-50 rounded-xl h-auto md:h-2/3 flex flex-col md:flex-row justify-center md:justify-around items-center'>
          <div className='text-center md:text-left mb-6 md:mb-0'>
            <span className='text-2xl md:text-3xl font-bold block leading-relaxed'>
              Hire the best developers and
            </span>
            <span className='text-2xl md:text-3xl font-bold block leading-relaxed'>
              designers around!
            </span>
          </div>
          <div>
          <div className="relative w-full max-w-md mx-auto">
              <img src="./sparking.svg" alt="sparking" className="w-full rounded-lg" />
              
              <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-custom-gradient-btn text-white px-12 py-4 rounded-md text-xl whitespace-nowrap">
                  Hire Top Developers
              </button>
          </div>
          </div>
        </div>
      </Section>
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App
