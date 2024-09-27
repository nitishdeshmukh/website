import './App.css'
import {Footer, Navbar, Section, Cardcarousel, Logocarousel, Clientfeedback, CaseStudies, DesignApproach,TechStack, AlkalineDevelopment, FeaturedResources, Card, BackToTop ,AboutUs} from './components'

function App() {
  return (
    <>
      <Navbar />
      <Section id="aboutUs" className="min-h-screen">
        <AboutUs/>
      </Section>

      <Section id='services'className='min-h-[310vh]'>
        <div>
          <Cardcarousel></Cardcarousel>
        </div>
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-around p-4 lg:p-8">
          <div className="max-w-xl w-full lg:w-1/2 space-y-6 leading-loose">
          <div>
            <span className="text-2xl sm:text-3xl md:text-4xl block">Leading companies trust us</span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold block">to develop software</span>
          </div>
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
        <Clientfeedback></Clientfeedback>
      </Section>

      <Section id='caseStudies' className=' text-center'>
        <div>
          <CaseStudies></CaseStudies>
        </div>
      </Section>
      <Section id='blog' className='h-[250vh]'>
        <Card/>
      </Section>
      <Section id='howItWorks' className='h-[380vh]'>
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
    <img src="./sparking.png" alt="sparking" className="w-full rounded-lg" />
    
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
