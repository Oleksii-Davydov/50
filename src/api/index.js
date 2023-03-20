import axios from "/servis";

const quizs = {
    fetch: () => axios.get('/v1').then(data => data),
}

export   { quizs };