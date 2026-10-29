import React from 'react'
import "./Sebine.css";
import our from "./our.png"
import foto1 from "./foto1.png"
import foto2 from "./foto2.png"
import foto3 from "./foto3.png"
import foto4 from "./foto4.png"
import foto5 from "./foto5.png"
function Sebine() {
  return (
    <>
<section className='hero'>
      <div className='our'>
        <img src={our} alt="our" />
        <button className='btn'>Read All Articles</button>
      </div><br />


  <section className='cards'>
 
        <div className='one'>
          <img src={foto1} alt="foto" /><br />
          <p style={{margin:"10px"}}>January 3, 2023</p>
          <h1 style={{margin:"10px"}}>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h1>
          <p style={{color:"#414536", margin:"10px"}}>Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
        </div>

     

    
        <div className='two'>
          <img src={foto2} alt="foto" /><br />
          <p style={{margin:"10px"}}>January 3, 2023</p>
          <h1 style={{margin:"10px"}}>How to prepare the perfect french fries in an air fryer</h1>
        </div>


        <div className='three'>
          <img src={foto3} alt="foto" /><br />
          <p style={{margin:"10px"}}>January 3, 2023</p>
          <h1 style={{margin:"10px"}}>How to prepare delicious chicken tenders</h1>
        </div>

        <div className='four'>
          <img src={foto4} alt="foto" /><br />
          <p style={{margin:"10px"}}>January 3, 2023</p>
          <h1 style={{margin:"10px"}}>7 delicious cheesecake recipes you can prepare</h1>
        </div>

        <div className='five'>
          <img src={foto5} alt="foto" /><br />
          <p style={{margin:"10px"}}>January 3, 2023</p>
          <h1 style={{margin:"10px"}}>5 great pizza restaurants you should visit this city</h1>
        </div>

      </section>
      </section>
    </>

  )
}

export default Sebine