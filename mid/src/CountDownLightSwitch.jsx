import { useEffect, useState } from 'react';
import './CountDownLightSwitch.css'
import { sortUserPlugins } from 'vite';


function CountDownLightSwitch(){
    let [toggle, setToggle] = useState(true);
    let [theme,setTheme] = useState("black");
    let [count, setCount] = useState(30);
    let [timer, setTimer] = useState(false);
    let [width,setWidth] = useState(20)


    useEffect(()=>{
        setInterval(()=>{
            setCount(count-1)
            setWidth(width - (width/30))
        },1000 )
    },[timer])

    let handleToggle = ()=>{
        if(toggle == true){
            setTheme("black")}
        if(toggle == false){
            setTheme("white")}
    }



    return (
        <>
        <body style={{backgroundColor : {theme}}}>
        <div className="container">
    
            <div className="header">
                <h1>Countdown & Light Switch</h1>
                <div className="toggle-container">
                    <label className="toggle-switch">
                        <input type="checkbox" id="themeToggle" checked={()=>{setToggle(!toggle)}} />
                        <span className="slider" style={{width:`${width}px`}}></span>
                    </label>
                    <span>Light Mode</span>
                </div>
            </div>

    
            <div className="timer-section">
                <div className="progress-bar">
                    <div className="progress" id="progress"></div>
                </div>
                <div className="timer" id="timerDisplay">{count}s</div>
                <div className="btn-group">
                    <button id="startButton" onChange={()=>{setTimer(true)}}>Start Timer</button>
                    <button id="resetButton" onChange={()=>{setTimer(false)}} style={{display: "none"}}>Reset Timer</button>
                </div>
                <div className="message" id="messageArea"></div>
            </div>

        </div>
        </body>
        </>
    )
}

export default CountDownLightSwitch;