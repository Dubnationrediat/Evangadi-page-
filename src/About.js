import React from 'react'
import "./About.css"
function About() {
    return (
      <div className='abou container'>
              <div className='containe main'>
        <div className="wana container ">
          <p className="p1">Join the network</p>
          <p className="p2">
            Already have an account?<a className="a1">Sign in</a>
          </p>
          <form>
            <div className="in11">
              <input className="in1" type="email" placeholder="Email adress" />
            </div>
            <div className="in11">
              <input className="in1" type="text" placeholder="First name" />
            </div>
            <div className="in11">
              <input className="in1" type="text" placeholder="Last name" />
            </div>
            <div className="in11">
              <input className="in1" type="password" placeholder="Password" />
            </div>
          </form>
          <p className="p3">
            I agree to the <a className="a2">privacy policy</a>and
            <a className="a2">terms of serivice.</a>
          </p>
          <button className="btn1">Agree and Join</button>

          <a className="a3">Already have an account?</a>
        </div>
      </div>
      <div className='about container'>
        <h5>About</h5>
        <h2>Evangadi Networks</h2>
        <p>
          No matter what stage of life you are in, whether you’re just starting
          elementary school or being promoted to CEO of a Fortune 500 company,
          you have much to offer to those who are trying to follow in your
          footsteps.
        </p>
        <p>
          Wheather you are willing to share your knowledge or you are just
          looking to meet mentors of your own, please start by joining the
          network here.
            </p>
        <button>HOW IT WORKS</button> 
      </div>
      </div>
    );
}

export default About
