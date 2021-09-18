import React, {useRef} from 'react';
import Logo from '../assests/logo.jpg';

const Start = ({setUsername}) => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    }

    return (
    <div className="container">
        <img src={Logo} alt="logo" className="logo" />
        <div className="heading">Welcome to KBC</div>
        <div className="start">
            <input placeholder="Enter your name" className="startInput" ref={inputRef} />
            <button className="startButton" onClick={handleClick}>Start</button>
        </div>
    </div>  
    )
}

export default Start
