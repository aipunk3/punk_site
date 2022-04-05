import { useState } from 'react'
import './buttonComponent.css';

export default function ButtonComponent(){

    const [buttonState, setButtonState] = useState(0)
    const [buttonText, setButtonText] = useState('Connect')
    const clickedButton = (e) =>{

        if(buttonState == 0){
           setButtonText('Disconnect')
           setButtonState(1)
        } else {
           setButtonText('Connect')
           setButtonState(0)
        }
        
    }

    return(
    <div className="connect-button">
        <button onClick={clickedButton}>{buttonText}</button>
    </div>
    )
}