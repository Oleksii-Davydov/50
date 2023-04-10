import React from 'react';
import { useTimer } from 'react-timer-hook';
import HtmlTestBasic from '../Tests/Html/HtmlTestBasic';
import Resuit from '../Tests/Html/ Result';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    isRunning,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div style={{ textAlign: 'start' }}>
      <div style={{ color: 'black' }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? <HtmlTestBasic /> : <Resuit />}</p>
    </div>
  );
}

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 180); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
