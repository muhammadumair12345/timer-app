 import React,{useState,useEffect} from 'react'
import { Timer } from './TimerClock.style'

interface Clock{
    hours:number;
    minutes:number;
    seconds:number;
    miliSeconds:number;
}

const TimerClock = () => {
    const [timer, setTimer] = useState<Clock>({hours:0,minutes:0,seconds:0,miliSeconds:0});

    return (
        <Timer>
            <div>{timer.hours>=10?timer.hours:"0"+timer.hours}</div>:
            <div>{timer.minutes>=10?timer.minutes:"0"+timer.minutes}</div>:   
            <div>{timer.seconds>=10?timer.seconds:"0"+timer.seconds}</div>:   
            <div>{timer.miliSeconds>=10?timer.miliSeconds:"0"+timer.miliSeconds}</div>
        </Timer>
    )
}

export default TimerClock
