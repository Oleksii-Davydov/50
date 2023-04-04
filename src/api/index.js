import axios from "./servis";

const quizs = {
    fetch: () => axios.get('/v1').then(data => data),
}

const quizsTests ={
    fetch: (quizTest) => axios.get(`/${quizTest}`)
        .then(res => {
            if (200=== res.status) {
                return res.data;
            }
        }),


}
export   { quizs, quizsTests };