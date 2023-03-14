import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";



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