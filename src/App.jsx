import './App.css'
import { Footer, Navbar, Section} from './components'
function App() {
  return (
    <>
      <Navbar />
      <Section id='aboutUs'>
        <div>
          <h1 className='text-center'>About Section</h1>
        </div>
      </Section>
      <Section id='services'>
        <div>
          <h1 className='text-center'>Services Section</h1>
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
