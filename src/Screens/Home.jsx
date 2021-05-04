import '../index.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from "../Components/Navbar"
import Carousel from 'react-material-ui-carousel'
import { Button, Box, Grid, Paper } from '@material-ui/core';
import { Backdrop, Modal, Fade } from '@material-ui/core';
import ModalContent from '../Components/ModalContent';

function App() {
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #3",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #4",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #5",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #6",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #7",
      description: "Probably the most random thing you have ever seen!"
    }
  ];

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  return (
    <div className="App">
      <Helmet>
        <title> Home | Aydan Pirani </title>
      </Helmet>
      
      <Navbar />

      <Modal 
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500}}
        style={{display: "flex", alignItems: "center", justifyContent: "center", color: "#618194"}}>
        <Fade in={open}>
          <ModalContent />
        </Fade>
      </Modal>

      <Grid container spacing={1}>
        <Grid item xs={6} spacing={3}>
          <Box style= {{maxWidth: "max-content", marginRight: "5%", marginLeft: "5%"}}> 
            <header className="App-header">
              <p className="name">AYDAN&nbsp;PIRANI</p>        
              <p className="quote"> Building&nbsp;software,&nbsp;one&nbsp;step&nbsp;at&nbsp;a&nbsp;time.</p>
              <Box style={{marginTop: "25px"}}>
              <Button color="inherit" style={{background: "#839EAD", marginRight: "25px"}} onClick={handleOpen}>SKILLS</Button>
                <Button color="inherit" style={{background: "#839EAD", marginLeft: "25px", marginRight: "25px"}} href="/docs">RESUME</Button>
                <Button color="inherit" style={{background: "#839EAD", marginLeft: "25px"}} href="/about">LEARN MORE</Button>
              </Box>
            </header>        
          </Box>
        </Grid>
        <Grid item xs={6} spacing={3}>
          <Box style = {{display: "flex", height: "100vh", marginRight: "5%", marginLeft: "5%", minWidth: "100%", justifyContent: "center", alignItems: "center"}}>
            <Box>
                <Carousel>
                    {
                        items.map( (item, i) => <Item key={i} item={item} style={{width: "105%"}}/> )
                    }
                </Carousel> 
              </Box>            
          </Box>
        </Grid>
      </Grid>

    </div>
  );
}

function Item(props)
{
    return (
        <Paper style={{backgroundColor: "#839EAD", padding: "10px"}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default App;
