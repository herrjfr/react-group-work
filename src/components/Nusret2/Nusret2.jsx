import React from 'react'
import './Nusret2.css'
import Sekone from '../../assets/stepaunt.png'
import Sektyu from '../../assets/stepbro.png'
import Seksri from '../../assets/stepnese.png'

function Nusret2() {
  return (
    <section className='nusret-sec2'>
      <div className='ankeDiv'>
        <h1 className='mainhash'>What Our Customers Say</h1>
        <div className='ucDiv'>
          <div className='card'>
            <h1 className='baslar'>“The best restaurant”</h1>
            <p className='pler'>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
            <div className="xett"></div>
            <div className='sekil'>
              <img src={Sekone} alt="" />
              <div>
                <h1 className='Sophire'>Sophire Robson</h1>
                <p className='LosA'>Los Angeles, CA</p>
              </div>
            </div>
          </div>
          <div className='card'>
            <h1 className='baslar'>“Simply delicious”</h1>
            <p className='pler'>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
            <div className="xett"></div>
            <div className='sekil'>
              <img src={Sektyu} alt="" />
              <div>
                <h1 className='MattQaldim'>Matt Cannon</h1>
                <p className='SanDi'>San Diego, CA</p>
              </div>
            </div>
          </div>
          <div className='card'>
            <h1 className='baslar'>“One of a kind restaurant”</h1>
            <p className='pler'>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
            <div className="xett"></div>
            <div className='sekil'>
              <img src={Seksri} alt="" />
              <div>
                <h1 className='Andi'>Andy Smith</h1>
                <p className='SanFr'>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Nusret2