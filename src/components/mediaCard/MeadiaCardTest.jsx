import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material';
import { Link } from "react-router-dom";

export default function MeadiaCardTest({quizTest}) {
    const { nameTest, imegeSrc, tittleHtml } = quizTest
    const pathToNameTest = nameTest.split(' ').join('_').toLowerCase()

    return (
        <>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{height: 140}}
                image={imegeSrc}
                title={nameTest}
            />
            <CardContent className="box_quiz">
                <Typography gutterBottom variant="h5" component="div">
                    {nameTest}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {tittleHtml}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" class="button"> <Link
                    style={{textDecoration: 'none', color: 'inherit'}}
                    to={`/html/${pathToNameTest}`}
                >
                    Start QUIZ
                </Link></Button>
            </CardActions>
        </Card>
</>

    );
}
