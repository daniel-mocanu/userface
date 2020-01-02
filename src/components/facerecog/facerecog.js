import React from 'react';
import './facerecog.css';

const FaceRecog = ({imageUrl, box}) => {
    return(
        <div className="center">
            <img  id='inputimage' alt="" src={imageUrl} width='500px' height='auto' />
            <div className ='bbb' 
            style={{top: box.topRow, right: box.rigthCol, bottom: box.bottomRow, left: box.leftCol}}>
                
            </div>

        </div>
    );
}

export default FaceRecog;
