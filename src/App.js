import React from "react";
import {Component} from "react";
import './App.css';
import ClippedDrawer from "./components/drower/Drower";


export default class App extends Component {
    render() {
        return (
            <div className="App">
                             <ClippedDrawer/>
                         </div>
        );
    }
}

