import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarList() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/CreateQrCodeModel">Form</Nav.Link>
            <Nav.Link href="/FileFormat">File Format</Nav.Link>
            <Nav.Link href="DemoFiles">Dodload filte type</Nav.Link>
            <Nav.Link href="dragNdrop">Drag and Drop</Nav.Link>
        </Nav>
    );
}

export default NavbarList;