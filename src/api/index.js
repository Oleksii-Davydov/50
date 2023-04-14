import axios from './servis';

const quizs = {
  fetch: () => axios.get('/v1').then((data) => data),
};

const quizsTests = {
  fetch: (quizTest) => axios.get(`/${quizTest}`)
    .then((res) => {
      // eslint-disable-next-line promise/always-return
      if (res.status === 200) {
        return res.data;
      }
    }),
};
export { quizs, quizsTests };
