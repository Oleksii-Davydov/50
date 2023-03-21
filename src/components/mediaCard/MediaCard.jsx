import { Component } from "react";
import Button from "@mui/material/Button";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions
} from "@mui/material";
import CreateModal from "../dialogs/CreateModal";

export default class MediaCard extends Component {
    state = {
        open: false
    };

    constructor() {
        super();
        this.hendelToggleOpenModal = this.hendelToggleOpenModal.bind(this);
    }

    render() {
        const {avatar, name, description, section} = this.props;
        return (
            <>
                <Card sx={{maxWidth: 345}}>
                    <CardMedia
                        sx={{height: 140}}
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
                         <Button size="small" class="button">Start QUIZ</Button>
                        <Button size="small" onClick={this.hendelToggleOpenModal} class="button">Show More</Button>
                    </CardActions>
                </Card>
                <CreateModal
                    open={this.open}
                    handleOnClose={this.hendelToggleOpenModal}
                    image={avatar}
                    title={name}
                    description={description}
                    section={section}
                />
            </>
        )
    }
        hendelToggleOpenModal() {
            this.setState({open: !this.state.open})
        }
    }

// export default function MediaCard({quiz}) {
//     const {avatar, name, description, section} = quiz;
//     const [open, setOpenModal] = useState(false)
//
//     return (
//         <>
//             <Card sx={{maxWidth: 345}}>
//                 <CardMedia
//                     sx={{height: 140}}
//                     image={avatar}
//                     title={name}
//                 />
//                 <CardContent className="box_quiz">
//                     <Typography gutterBottom variant="h5" component="div">
//                         {name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         {description.slice(0, 100)}...
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Button size="small" class="button">Start QUIZ</Button>
//                     <Button size="small" onClick={() => setOpenModal(true)} class="button">Show More</Button>
//                 </CardActions>
//             </Card>
//             <CreateModal
//                 open={open}
//                 handleOnClose={() => setOpenModal(false)}
//                 image={avatar}
//                 title={name}
//                 description={description}
//                 section={section}
//             />
//         </>
//     )
// }
