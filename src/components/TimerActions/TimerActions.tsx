import React from 'react'
import { Actions,Button } from './TimerActions.style'

const TimerActions = () => {
    return (
        <Actions>
            <Button>Start</Button>
            <Button>Stop</Button>
            <Button>Reset</Button>
        </Actions>
    )
}

export default TimerActions
