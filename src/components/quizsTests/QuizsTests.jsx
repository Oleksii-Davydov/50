import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { quizsTests as quizsTestsApi } from '../../api/index';
import MeadiaCardTest from '../mediaCard/MeadiaCardTest';

export default function QuizsTests() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [quizsTests, setQuizsTests] = useState([]);

  useEffect(() => (async () => {
    try {
      // eslint-disable-next-line promise/catch-or-return
      quizsTestsApi.fetch(name).then((data) => setQuizsTests(data)); // не работает
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }));

  if (loading) return (<>Loading...</>);

  return (
        <Grid container spacing={2}>
            {quizsTests.length && quizsTests.map((quizTest, index) => (
                <MeadiaCardTest
                    key={quizTest.id}
                    quizTest={quizTest}
                    id={index}

                />
            ))}
        </Grid>
  );
}
