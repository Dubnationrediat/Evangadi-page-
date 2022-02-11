import React from 'react'
import "./form .css"
function Form() {
    return (
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
    );
}

export default Form
