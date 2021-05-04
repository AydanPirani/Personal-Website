import '../index.css';
import { Button, ButtonGroup } from '@material-ui/core';
import { AppBar, Toolbar } from "@material-ui/core"
import { Home } from "@material-ui/icons"

function Navbar() {
    return (
        <AppBar className="Bar" position="static" style={{ background: '#839EAD' }}>
            <Toolbar>
            <Button color="inherit" href="/"><Home /></Button>
            <ButtonGroup style={{ marginLeft: "auto" }} size="large" variant="text" color="inherit" aria-label="large outlined primary button group">
                {/* <Button style={{minWidth: "150px"}} href="/experience">EXPERIENCE</Button> */}
                <Button style={{minWidth: "150px"}} href="/about">ABOUT</Button>
                <Button style={{minWidth: "150px"}} href="/contact">CONTACT</Button>
            </ButtonGroup>
            </Toolbar>
        </AppBar>
    )

}

export default Navbar;