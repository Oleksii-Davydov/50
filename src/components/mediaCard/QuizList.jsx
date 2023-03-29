import React from "react";
import {Grid} from "@mui/material";
import MediaCard from "./MediaCard"
import {Component} from "react";
import {quizs} from "../api/index"

export default class List extends Component {
    state = {
        quizs: [],
        complete: false,
    }

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

