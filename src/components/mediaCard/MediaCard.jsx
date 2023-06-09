import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import CreateModal from '../dialogs/CreateModal';

export default function MediaCard({ quiz }) {
  const {
    avatar, name, description, section,
  } = quiz;
  const [open, setOpenModal] = useState(false);
  const pathToName = name.split(' ').join('_').toLowerCase();

  return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={avatar}
                    title={name}
                />
                <CardContent className="box_quiz">
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 100)}...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" class="button">
                        <Link
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            to={ `/quizs/${pathToName}` }
                        >
                            Find QUIZ
                            </Link>
                        </Button>
                    <Button size="small" onClick={() => setOpenModal(true)} class="button">Show More</Button>
                </CardActions>
            </Card>
            <CreateModal
                open={open}
                handleOnClose={() => setOpenModal(false)}
                image={avatar}
                title={name}
                description={description}
                section={section}
            />
        </>
  );
}
