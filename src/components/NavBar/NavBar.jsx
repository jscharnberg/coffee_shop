import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import "./NavBar.css"

function NavBar() {
    return (
        <Navbar expand="lg" className='nav'>

            <Container className='nav-text'>
                Charni's Coffee
                <a href="#">HOME</a>
                <a href="#">MENU</a>
                <a href="#">SERVICES</a>
                <a href="#">BLOG</a>
                <a href="#">ABOUT</a>
                <a href="#">SHOP</a>
                <a href="#">CONTACT</a>
                <a href="#">Home</a>
            </Container>

        </Navbar>

    )
}

export default NavBar