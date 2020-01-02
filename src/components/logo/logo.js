import React from 'react';
import Tilt from 'react-tilt'
import './logo.css';
import brain from './brain.png'

const Logo = () => {
        return (
            <div className='ma4 mt0'>
                  <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
                    <div className="Tilt-inner"></div>
                    <img style={{paddingTop: '50px', width: 100, height: 100 }} alt='logo' src={brain}/>
                        </Tilt>
            </div>
        );
}
export default Logo; 