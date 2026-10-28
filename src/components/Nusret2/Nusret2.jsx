import React from 'react'
import './Nusret2.css'
import Sekone from '../../assets/stepaunt.png'
import Sektyu from '../../assets/stepbro.png'
import Seksri from '../../assets/stepnese.png'

function Nusret2() {
  return (
    <section>
      <div className='ankeDiv'>
        <h1 className='mainhash'>What Our Customers Say</h1>
        <div className='ucDiv'>
          <div className='div sol'>
            <h1 className='bst'>“The best restaurant”</h1>
            <div>
              <p>Last night, we dined at place and were</p>
              <p>simply blown away. From the moment we</p>
              <p>stepped in, we were enveloped in an</p>
              <p>inviting atmosphere and greeted with</p>
              <p>warm smiles.</p>
            </div>
            <div className="xett"></div>
            <div className='sekil'>
              <img src={Sekone} alt="" />
              <div>
                <h1 className='Sophire'>Sophire Robson</h1>
                <p className='LosA'>Los Angeles, CA</p>
              </div>
            </div>
          </div>
          <div className='div orta'>
            <h1 className='Simpl'>“Simply delicious”</h1>
            <div>
              <p>Place exceeded my expectations on all </p>
              <p>fronts. The ambiance was cozy and </p>
              <p>relaxed, making it a perfect venue for our </p>
              <p>anniversary dinner. Each dish was </p>
              <p>prepared and beautifully presented.</p>
            </div>
            <div className="xett"></div>
            <div className='sekil'>
              <img src={Sektyu} alt="" />
              <div>
                <h1 className='MattQaldim'>Matt Cannon</h1>
                <p className='SanDi'>San Diego, CA</p>
              </div>
            </div>
          </div>
          <div className='div sag'>
            <h1 className='ONE'>“One of a kind restaurant”</h1>
            <div>
              <p>The culinary experience at place is first</p>
              <p>to none. The atmosphere is vibrant, the </p>
              <p>food - nothing short of extraordinary. The</p>
              <p>food was the highlight of our evening. </p>
              <p>Highly recommended.</p>
            </div>
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