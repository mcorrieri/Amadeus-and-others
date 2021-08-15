import { Card } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";

function ComposerCard({ composer }) {
  let history = useHistory();
  // let classes = useStyles();
  const [open, setOpen] = useState(false);

  const { id, name, complete_name, birth, death, portrait } = composer;

  // function handleClick() {
  //   history.push("/composerworks");
  // }

  // const useStyles = makeStyles((theme) => ({
  //   modal: {
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   paper: {
  //     backgroundColor: theme.palette.background.paper,
  //     border: "2px solid #000",
  //     boxShadow: theme.shadows[5],
  //     padding: theme.spacing(2, 4, 3),
  //   },
  // }));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="composer-container">
        <img className="home-image" src={portrait} alt="composer-image" />
        <Button className="home-button" variant="outlined" onClick={handleOpen}>
          {name}
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        // className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {/* <div className={classes.paper}> */}
          <div>
            <h2 id="transition-modal-title">{complete_name}</h2>
            <img src={portrait} />
            <p id="transition-modal-description">
              Born in: {birth.substring(0, 4)}
            </p>
            <p id="transition-modal-description">
              Died in: {death.substring(0, 4)}
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ComposerCard;
