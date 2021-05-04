import { Box } from '@material-ui/core';
import { DiPython, DiJava, DiJavascript, DiHtml5, DiCss3, DiReact } from 'react-icons/di';
import { AiFillGithub, AiFillHtml5} from 'react-icons/ai';
import { FaNodeJs } from "react-icons/fa"
import { SiAutodesk, SiFirebase, SiFlask, SiJavascript } from "react-icons/si"



function ModalContent() {
    return(
        <div style = {{border: "2px solid #000", padding: "50px", background: "#e6edecCC", }}>
                <h2>SKILLS/TECHNOLOGIES</h2>
            <Box style={{display: "flex", alignItems: "center"}}> 
                <h3> Languages: </h3>
                <DiPython size="50px"style={{padding: "20px"}}/>
                <DiJava size="50px"style={{padding: "20px"}}/>
                <SiJavascript size="50px"style={{padding: "20px"}}/>
            </Box>
            <Box style={{display: "flex", alignItems: "center"}}> 
                <h3> Frontend: </h3>
                <AiFillHtml5 size="50px"style={{padding: "20px"}}/>
                <DiCss3 size="50px"style={{padding: "20px"}}/>
                <DiReact size="50px" style={{padding: "20px"}}/>
            </Box>
            <Box style={{display: "flex", alignItems: "center"}}> 
                <h3> Technologies: </h3>
                <FaNodeJs size="50px" style={{padding: "20px"}}/>
                <AiFillGithub size="50px" style={{padding: "20px"}}/>
                <SiFlask size = "50px" style={{padding: "20px"}}/>
                <SiFirebase size = "50px" style={{padding: "20px"}}/>
                <SiAutodesk size = "50px" style={{padding: "20px"}}/>
            </Box>
        </div>
    );
}

export default ModalContent;