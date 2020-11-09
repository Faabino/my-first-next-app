import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function Layout() {
  return (
    <Navbar bg="light" expand="lg">
      <Link href="/">
        <Navbar.Brand>My Blog</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Articles" id="basic-nav-dropdown">
            <NavDropdown.Item href="/first-article">Article 1</NavDropdown.Item>
            <NavDropdown.Item href="/second-article">
              Article 2
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Flash cards" id="basic-nav-dropdown">
            <NavDropdown.Item href="/mental-flashcard">Mental</NavDropdown.Item>
            <NavDropdown.Item href="/input-flashcard">Input</NavDropdown.Item>
            <NavDropdown.Item href="/radio-flashcard">Radio</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
