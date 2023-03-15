import React from "react";
import Button from "@mui/material/Button";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions} from "@mui/material";

export default function QuizItem({quiz}) {
    return (

        <Card sx={{maxWidth: 345}}>
            <CardMedia
                sx={{height: 140}}
                image={quiz.avatar}
                title={quiz.name}
            />
            <CardContent class="box_quiz">
                <Typography gutterBottom variant="h5" component="div">
                    {quiz.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {quiz.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" class="button">Start QUIZ</Button>
                <Button size="small" class="button">Show More</Button>
            </CardActions>
        </Card>

    )
}