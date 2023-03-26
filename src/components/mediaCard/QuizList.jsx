// import React, {useEffect, useState} from "react";
// import axios from "axios";
import {Grid} from "@mui/material";
import MediaCard from "./MediaCard"
import {Component} from "react";
import {quizs} from "../api/index"

export default class List extends Component {
    state = {
        quizs: [],
        complete: false,
    }

    // constructor() {
    //     super();
    // }

    render() {
        return (
            <Grid container spacing={2}>
                {this.state.quizs.map((quiz, index) => (
                <MediaCard
                    key={quiz.key}
                    quiz={quiz}
                    id={index}
                />
            ))}
        </Grid>


        );
    }

    componentDidMount() {
        quizs.fetch()
            .then(quizs => this.setState({...this.state, quizs}))
    console.log(this.quizs)
    }

}
// export default function List() {
//     let [quizs, setQuiz] = useState([]);
//
//     useEffect(() => {
//         (async () => {
//             const {data} = await axios.get("https://640f1ef14ed25579dc466e8a.mockapi.io/v1");
//             setQuiz(data);
//
//         })();
//     }, [])
//
//     return (
//         <Grid container spacing={2}>
//             {quizs.map((quiz, index) => (
//                 <MediaCard
//                     key={quiz.key}
//                     quiz={quiz}
//                     id={index}
//
//                 />
//             ))}
//         </Grid>
//     )
//
// }