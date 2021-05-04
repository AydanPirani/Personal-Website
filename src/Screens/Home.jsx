import '../index.css';
import { Helmet } from 'react-helmet';
import Navbar from "../Components/Navbar.jsx"
import { Button, Box } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title> Home | Aydan Pirani </title>
      </Helmet>
      
      <Navbar />
      <Box style= {{maxWidth: "max-content", marginLeft: "5%"}}> 
        <header className="App-header">
          <p className="name">AYDAN&nbsp;PIRANI</p>        
          <p className="quote"> Building&nbsp;software,&nbsp;one&nbsp;step&nbsp;at&nbsp;a&nbsp;time.</p>
          <Box style={{marginTop: "25px"}}>
            <Button color="inherit" style={{background: "#839EAD", marginRight: "25px"}} href="/docs">RESUME</Button>
            <Button color="inherit" style={{background: "#839EAD", marginLeft: "25px"}} href="/about">LEARN MORE</Button>
          </Box>
        </header>        
      </Box>
    </div>
  );
}

export default App;
