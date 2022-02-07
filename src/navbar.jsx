import React, { Component } from 'react';
import vector from './Vector.png';
import vector1 from './Vector1.png';
import vector2 from './Vector2.png';
import rectangle from './Rectangle.png';
import login from './Login.png';
import g from './6.png';


import {bars} from './mock';
import './index.css'

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            navbar: bars,
            // home:'Home',
            // shop:'Shop',
            // plant:'PlantCare',
            active:'Home',
            }
        

     }
    
  render() {

          return(<div>
              <div className='vector'>
              <img src={vector} alt='vector' width='25px' height='16px' />
              <p>GREENSHOP</p>
              

              <div className='navbar'>
        {
            this.state.navbar.map(({id,title})=>(
                <h1 onClick={()=>this.setState({active:title})}
                className = {`link ${this.state.active === title && 'active'}`}
                 >
                        {title}
                </h1>
            ))
        }

        <img src={vector1} alt='test' />
        <img src={vector2} alt='test' />
        <img src={rectangle} alt='test' />
        <img src={g} alt='test' />
        <img src={login} alt='test' />

        
        </div>
        
    </div>
    </div>
    )
  }
}
