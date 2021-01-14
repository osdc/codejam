import React from 'react';
import './Images.css';

const Images = ({text}) => {
    
        const wordsArray = text.split(' ')  
        let eachWord =  wordsArray.map(e => {
            if(e !== '')
            {
                const letters = e.split('');
                const lettersImg = letters.map( (single) => {
                    return(
                            <img src={'images/'+single.toUpperCase()+'.png'} className="imageSize"></img>
                    )
                })
                return ( 
                        <div className="column">
                            <div className="jarvis">{e}</div>
                            {lettersImg}
                        </div>
                )
            }
        });

    if(text !== "")
    {
        return (
            <div className="imageContainer">
                {eachWord}
            </div>
         )
    }
    else
    {
        return(
            <div></div>
        );
    }
}

export default Images;