import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button} from 'reactstrap';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Ibaline Media</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto " navbar>
                            <NavItem>
                                <NavLink href="#Home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#Services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#Packages">Packages</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#Focus">Focus</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#About">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#Testimonials">Testimonials</NavLink>
                            </NavItem>
                            <NavItem>
                                <Button outline color="success" to="#Contact">Contact Us</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}