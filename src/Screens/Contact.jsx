import '../index.css';
import { Helmet } from 'react-helmet';
import Navbar from "../Components/Navbar.jsx"


function Contact() {
    return (
        <div>
            <Helmet>
                <title> Contact | Aydan Pirani </title>
            </Helmet>
            <Navbar />
        </div>
    );
}

export default Contact;