import React from 'react';
import './App.css';
import ClippedDrawer from './components/drower/Drower';
import BoxTemplate from './components/Templates/MainTemplateWropp'

function App() {
    return (
        <BoxTemplate>
            <div className="App">

                <ClippedDrawer/>
            </div>
        </BoxTemplate>
    );
}

export default App;
