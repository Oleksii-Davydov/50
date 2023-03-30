import React from "react";
import { Component } from "react";
import Button from '@mui/material/Button';
import {
    Dialog,
    DialogActions,
    Card,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material';


export default class CreateModal extends Component {
  render() {
    const { description, title, image, section, open } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.props.handleOnClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Card sx={{ width: "100%", height: "max-content" }}>
            <CardMedia
              sx={{ height: "250px" }}
              image={image}
              title={title}

            />
            <CardContent class="box_quiz">
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>

              <Typography
                mt="10px"
                align="center"
                variant="body2"
                color="text.secondary"
              >
                Section: {section.join(", ")}
              </Typography>
            </CardContent>
          </Card>
          <DialogActions>
            <Button onClick={this.props.handleOnClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


