import '../index.css';
import { Helmet } from 'react-helmet';
import Navbar from "../Components/Navbar.jsx";
import { Grid} from "@material-ui/core"

function About() {
    return (
        <div>
            <Helmet>
                <title> About | Aydan Pirani </title>
            </Helmet>

            <Navbar />

            <Grid container spacing={1}>
                <Grid item xs={6} spacing={3}>
                    <text> TEXT </text>
                </Grid>
                <Grid item xs={6} spacing={3}>
                    <header className="header"> Hello! </header>
                </Grid>
            </Grid>

        </div>
    );
}

export default About;