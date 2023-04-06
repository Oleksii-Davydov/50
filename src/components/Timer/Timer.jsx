// import React from 'react';
// import { useTimer } from 'react-timer-hook';
// import HtmlTestBasic from '../Tests/Html/HtmlTestBasic'
// import Resuit from '../Tests/Html/ Result'
//
// function MyTimer({ expiryTimestamp }) {
//     const {
//         seconds,
//         minutes,
//         hours,
//         days,
//         isRunning,
//         start,
//         pause,
//         resume,
//         restart,
//     } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
//
//
//     return (
//         <div style={{textAlign: 'center'}}>
//             <h1>react-timer-hook </h1>
//             <p>Timer Demo</p>
//             <div style={{fontSize: '100px'}}>
//                 <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
//             </div>
//             <p>{isRunning ? <HtmlTestBasic/> : <Resuit/>}</p>
//             <button onClick={start}>Start</button>
//             <button onClick={pause}>Pause</button>
//             <button onClick={resume}>Resume</button>
//             <button onClick={() => {
//                 // Restarts to 5 minutes timer
//                 const time = new Date();
//                 time.setSeconds(time.getSeconds() + 300);
//                 restart(time)
//             }}>Restart</button>
//         </div>
//     );
// }
//
// export default function Timer() {
//     const time = new Date();
//     time.setSeconds(time.getSeconds() + 20); // 10 minutes timer
//     return (
//         <div>
//             <MyTimer expiryTimestamp={time} />
//         </div>
//     );
// }

import React from 'react';
import { useTimer } from 'react-timer-hook';
import HtmlTestBasic from '../Tests/Html/HtmlTestBasic'
import Resuit from '../Tests/Html/ Result'

function MyTimer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        isRunning,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (

        <div style={{textAlign: 'start'}}>
            <div style={{color: 'black'}}>
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? <HtmlTestBasic/> : <Resuit/>}</p>
        </div>
    );
}

export default function Timer() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10); // 10 minutes timer
    return (
        <div>
            <MyTimer expiryTimestamp={time} />
        </div>
    );
}