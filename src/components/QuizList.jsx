import React, {useEffect, useState} from "react";
import axios from "axios";
import QuizItem from "./QuizItem";
import {Grid} from "@mui/material";

export default function QuizList() {
    let [quizs, setQuiz] = useState([]);
    useEffect(() => {
        (async () => {
            const {data} = await axios.get("https://640f1ef14ed25579dc466e8a.mockapi.io/v1");
            setQuiz(data);
        })();

    }, [])


    return (

        <Grid container spacing={2}>
            {quizs.map((quiz, index) => (
                <QuizItem
                    key={quiz.id}
                    quiz={quiz}
                    id={index}
                />
            ))}
        </Grid>
    )
}