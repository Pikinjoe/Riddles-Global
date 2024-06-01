import { Hero, Services, AboutUs, Mission, Partners, Footer} from './sections'
import Nav from './Components/Nav'

function App() {

  return (
    <>
     <main className='relative'>
      <Nav />
      <section>
      <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Mission />
      </section>
      <section>
        <Partners />
      </section>
      <section>
        <Footer />
      </section>
     </main>
    </>
  )
}

export default App
