import React, { Children } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Hero.css';
import g1 from '../../images/g1.jpg';
import g2 from '../../images/g2.jpg';
import g3 from '../../images/g3.jpg';
import g4 from '../../images/g4.jpg';
import g5 from '../../images/g5.jpg';
import g6 from '../../images/g6.jpg';
import g7 from '../../images/g7.jpg';
import g8 from '../../images/g8.jpg';
import g9 from '../../images/g9.jpg';
import g10 from '../../images/g10.jpg';
import g11 from '../../images/g11.jpg';
import g12 from '../../images/g12.jpg';
import g13 from '../../images/g13.jpg';
import g14 from '../../images/g14.jpg';
import g15 from '../../images/g15.jpg';
import g16 from '../../images/g16.jpg';

const Hero = ({children}) => {
    return (
        <div>
            <h2 className="display-4 text-primary fw-bold text-center mb-2"> {children}</h2>
         
            <div class="row">
  <div class="column">
    <img src={g1}/>
    <img src={g2}/>
    <img src={g3}/>
    <img src={g4}/>
   
  </div>
  <div class="column">
  <img src={g5}/>
  <img src={g6}/>
  <img src={g7}/>
  <img src={g8}/>
  

  </div>
  <div class="column">
  
  <img src={g9}/>
  <img src={g10}/>
  <img src={g11}/>
  <img src={g12}/>
  <img src={g9}/>
 
    
  </div>
  <div class="column">
  <img src={g13}/>
  <img src={g14}/>
  <img src={g15}/>
  <img src={g16}/>
  </div>
</div>

            
            
        </div>
    );
};

export default Hero;