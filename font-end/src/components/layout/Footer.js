import React from "react";
import { Container } from "react-bootstrap";
import classes from './Footer.module.css';
const Footer = () => {
  return (
    <div className={classes.footer + ' mt-4'}>
      <Container className="d-flex align-items-center">
        <h1> Footer </h1>
        <p className="ms-auto">Mọi thông tin liên hệ: admin@gmail.com</p>
      </Container>
    </div>
  );
};

export default Footer;