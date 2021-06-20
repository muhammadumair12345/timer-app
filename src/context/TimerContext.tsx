import React,{ createContext,useState } from 'react';

export const TimerContext=createContext<InitialState>({});

export const TimerProvider:React.FC=({children})=>{
    const [startFlag, setStartFlag] = useState<boolean>(false);
    const [stopFlag, setStopFlag] = useState<boolean>(false);
    const [resetFlag, setResetFlag] = useState<boolean>(false);

    const timerState:TimerState={   
        startFlag,stopFlag,resetFlag,
        setStartFlag,setStopFlag,
        setResetFlag,
    }

    return(
        <TimerContext.Provider value={timerState}>
            {children}
        </TimerContext.Provider>
    )
}