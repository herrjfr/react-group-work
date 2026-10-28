import SecBot from "../../assets/elvin-img/sec-bot.svg"
import Play from "../../assets/elvin-img/play.svg"
import "../Elvin2/Elvin2.css"

function Elvin2() {
  return (
    <section className='elvin2-sec'>

      <div className="sec-top">
        <img src={Play} alt="" />
        <h4>Feel the authentic & <br /> original taste from us</h4>
      </div>

      <div className="sec-bot">
        <img src={SecBot} alt="" />
      </div>

    </section>
  )
}

export default Elvin2