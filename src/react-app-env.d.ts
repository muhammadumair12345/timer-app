/// <reference types="react-scripts" />
declare module '*.jpg';

interface TimerState{
    startFlag:boolean;
    stopFlag:boolean;
    resetFlag:boolean;
    setStartFlag:React.Dispatch<React.SetStateAction<boolean>>;
    setStopFlag:React.Dispatch<React.SetStateAction<boolean>>;
    setResetFlag:React.Dispatch<React.SetStateAction<boolean>>;
}


type InitialState=TimerState|{};