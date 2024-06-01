import Hero from '../Hero/Hero'
import NewArrival from '../New Arrival/NewArrival'
import LatestNews from '../LatestNews/LatestNews'
import AboutUs from '../AboutUs/AboutUs'

function Shop() {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <NewArrival/>
        <LatestNews/>
        <AboutUs/>
    </div>
  )
}

export default Shop