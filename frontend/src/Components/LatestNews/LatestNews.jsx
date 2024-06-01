import LatestCard from './LatestCard'
import img1 from './blog1.jpg'
import img2 from './blog2.jpg'
import img3 from './blog3.jpg'
function LatestNews() {
  return (  

    <div className='mt-24'>
          <h1 className=" font-thin  md:text-4xl text-4xl text-green-950 text-center  font-playfair-display">Updates HERE!!</h1>
    {/* <hr className='h-4 mt-1'/> */}
    <div className='main grid grid-cols-1 md:items-center md:justify-evenly gap-4 md:flex mt-4'>
      <LatestCard img={img1}  head='What Curling Irons Are The Best Ones' 
      details='Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..'/>

      <LatestCard img={img2}
       head='Vogues Ultimate Guide To Autumn Winter 2019 Shoes'
       details='Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..' />

      <LatestCard img={img3} head='What Curling Irons Are The Best Ones'
      details='Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..'/>
    </div>
    </div>
  )
}

export default LatestNews