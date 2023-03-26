import axios from "./servis";

const quizs = {
    fetch: () => axios.get('/v1').then(({quizs}) => quizs),
}

export   { quizs };