import React from 'react';
import TimerActions from '../TimerActions/TimerActions';
import TimerClock from '../TimerClock/TimerClock';
import TimerHeader from '../TimerHeader/TimerHeader';
import {Container} from './TimerContainer.style';

const TimerContainer = () => {
    return (
        <Container>
            <TimerHeader/>
            <TimerClock/>
            <TimerActions/>
        </Container>
    )
}

export default TimerContainer
