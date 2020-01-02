import React from 'react';
import './imagelink.css';
// import { SSL_OP_CIPHER_SERVER_PREFERENCE } from 'constants';

const ImageLink = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className='f3'>
                {'This magic brain will detect the faces in yout picture'}
            </p>
             <div className='center'>
                <div className=' form pa4 br-3 shadow-5'>
                    <input className='f4 pa2 w-70 ' type='text' onChange={onInputChange} />
                    <button onClick={onButtonSubmit} className='w-30 grow f4 link pv2 ph3 dib white bg-light-purple'> Detect</button>
                </div>    
            </div>
        </div>
    );
}
                // center in input would put it under
                //onChange signals any change
export default ImageLink;