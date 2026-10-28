import "../Elvin1/Elvin1.css"
import Img1 from "../../assets/elvin-img/img-1.svg"
import Img3 from "../../assets/elvin-img/img-3.svg"


function Elvin1() {
  return (
    <section className='elvin1-sec'>
      <div className="left-side">
        <img src={Img1} alt="" className="img-1"/>
        <img src={Img3} alt=""  className="img-3"/>

      </div>

      <div className="right-side">
        <h1 className="right-h1">We provide healthy <br /> food for your family.</h1>

        <h6 className="right-h6">Our story began with a vision to create a unique dining <br /> experience that merges fine dining, exceptional service, and a <br /> vibrant ambiance. Rooted in city's rich culinary culture, we aim to <br/> honor our local roots while infusing a global palate.</h6>

        <p className="right-p">At place, we believe that dining is not just about food, but also <br /> about the  overall experience. Our staff, renowned for their warmth <br /> and dedication,strives to make every visit an unforgettable event.</p>

      </div>

    </section>
  )
}

export default Elvin1