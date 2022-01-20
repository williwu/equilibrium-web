import { Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Portfolio</Nav.Link>
                        <Nav.Link href="/setup">Setup</Nav.Link>
                        <Nav.Link href="/contribute">Contribute</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
        </>
    )
};

export default Layout;