import React from 'react';
import { TimerProvider } from '../../context/TimerContext';
import TimerActions from '../TimerActions/TimerActions';
import TimerClock from '../TimerClock/TimerClock';
import TimerHeader from '../TimerHeader/TimerHeader';
import {Container} from './TimerContainer.style';

const TimerContainer = () => {
    return (
        <Container>
            <TimerHeader/>
            <TimerProvider>
                <TimerClock/>
                <TimerActions/>
            </TimerProvider>
        </Container>
    )
}

export default TimerContainer
