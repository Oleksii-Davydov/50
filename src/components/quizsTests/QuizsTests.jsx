import React, { useEffect, useState } from "react";
// import {Grid} from "@mui/material";
// import MediaCard from "../mediaCard/MediaCard";

import axios from "axios";
import {useParams} from "react-router-dom"
import {quizsTests  as quizsTestsApi } from "../../api/index"
export default function QuizsTests() {
    const { name } = useParams();
    const [loading, setLoading] = useState(true);
    const [ quizsTests, setQuizsTests ] = useState([])

    useEffect(() =>
        (async () => {
            try {
                const {data} = quizsTestsApi.fetch(name) //не работает
                // const { data } = await axios.get(`https://640f1ef14ed25579dc466e8a.mockapi.io/html`); /работает в консоль выведет нудный масив
                console.log(data)
                setQuizsTests (data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        })(),
    {},[]);

    if (loading) return (<>Loading...</>);

    return (
        <>
            {quizsTests.map((quizTest) => (<li key={quizTest.id}>quizTest.nameTest</li>))}/не отражает список
        </>
    );
}