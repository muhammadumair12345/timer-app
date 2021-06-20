import React,{useState,useEffect,useContext,useCallback} from 'react';
import { TimerContext } from '../../context/TimerContext';
import { Timer } from './TimerClock.style';

const TimerClock:React.FC = () => {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const {startFlag,stopFlag,resetFlag,resumeFlag,
        setStartFlag,setStopFlag,setResetFlag} = useContext<any>(TimerContext);

    const startTimer=()=>{
        if(startFlag===true&&resetFlag===false){
            if(stopFlag===false)
            if(seconds<60)
            {
                setSeconds(prev=>++prev)
            }
            else{
                setSeconds(0);
                if(minutes<59){
                    setMinutes(prev=>++prev)
                }
                else{
                    setMinutes(0)
                    setHours(prev=>++prev)
                }
            }
        }
        else{
           setHours(0);
           setMinutes(0);
           setSeconds(0); 
           setResetFlag(false)
           setStartFlag(false);
        }
    }

    useEffect(()=>{
        let timerInterval:NodeJS.Timeout=setInterval(startTimer,1000)
        return ()=> {
            clearInterval(timerInterval);
        };
    },[startTimer]);

    return (
        <Timer>
            <div>{hours>=10?hours:"0"+hours}</div>:
            <div>{minutes>=10?minutes:"0"+minutes}</div>:   
            <div>{seconds>=10?seconds:"0"+seconds}</div>  
        </Timer>
    )
}

export default TimerClock
