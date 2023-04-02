import React from "react";
import { Container, Nav, Navbar, Dropdown, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from '../assets/image/meooo.jpg';
import classes from './Header.module.css';

const Header = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();
  const logOutHandler = () => {
    navigate('/login');
  }
  return (
    <Navbar className={classes.navbar} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/home"><img src={logo} width='100' alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className={classes.button}>Tin Tức</Nav.Link>
            <Nav.Link href="/forum" className={classes.button}>Diễn đàn</Nav.Link>
          </Nav>
          <Nav>
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink} className="text-white">{userInfo.name}</Dropdown.Toggle>
              <Dropdown.Menu variant="light" key="down-centered">
                <Dropdown.Item href="#action/3.1">Thông tin tài khoản</Dropdown.Item>
                <Dropdown.Item onClick={logOutHandler}>Đăng xuất</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Header;