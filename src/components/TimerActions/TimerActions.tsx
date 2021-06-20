import React,{useContext} from 'react';
import { TimerContext } from '../../context/TimerContext';
import { Actions,Button } from './TimerActions.style';

const TimerActions = () => {
    const {stopFlag,setStartFlag,setStopFlag,setResetFlag} = useContext<any>(TimerContext);

    return (
        <Actions>
            <Button onClick={e=>setStartFlag(true)}>Start</Button>
            {stopFlag===true?<Button onClick={e=>setStopFlag(false)}>Resume</Button>:
            <Button onClick={e=>setStopFlag(true)}>Stop</Button>}
            <Button onClick={e=>setResetFlag(true)}>Reset</Button>
        </Actions>
    )
}

export default TimerActions
