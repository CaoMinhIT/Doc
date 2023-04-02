import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container className={classes.container}>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;