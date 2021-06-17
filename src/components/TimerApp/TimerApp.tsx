import React from 'react';
import TimerContainer from '../TimerContainer/TimerContainer';
import { App, GlobalStyle } from './TimerApp.style';


const TimerApp = () => {
  return (
    <App>
      <GlobalStyle/>
      <TimerContainer/>
    </App>
  )
}

export default TimerApp
 