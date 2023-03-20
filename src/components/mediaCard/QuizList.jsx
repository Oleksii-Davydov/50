import React, {useEffect, useState} from "react";
import axios from "axios";
import {Grid} from "@mui/material";
import MediaCard from "./MediaCard";

export default function List() {
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
                <MediaCard
                    key={quiz.key}
                    quiz={quiz}
                    id={index}

                />
            ))}
        </Grid>
    )

}