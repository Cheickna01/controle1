import React from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  NavItem,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";
import BeforeHeader from "./BeforeHeaderComponent";
import Modal from "./Modal"
import PanierComponent from "./PanierComponent";
import { useSelector } from "react-redux";
export default function Header(){
    const [isNavOpen,setIsNavOpen] = useState(false)
    const [closeModal,setCloseModal] = useState(false)
    const panier_count = useSelector((state) => state.Cart.cart.length);
    const [search, setSearch] = useState("");
    const modal = createPortal(<Modal setCloseModal={setCloseModal} closeModal={closeModal}/>,document.body)
        function showModal(){
        setCloseModal(!closeModal)
    }
    function ToggleNav(){
        setIsNavOpen(!isNavOpen)
    }

    return (
      <>
        <BeforeHeader />
        <Navbar
          light
          expand="lg"
          id="mynavbar"
          className="align-items-center sticky-top ms-0 mb-md-0 navb"
        >
          <NavbarBrand>
            <NavLink to="/">
              <img src="/img/img/logo.png" alt="tyshop 237" height="50" width="200" />
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={ToggleNav}/>
          <Collapse navbar isOpen={isNavOpen} className="">
            <Nav navbar className="mynavbar1 me-lg-3 ">
              <NavItem className="me-2">
                <NavLink to="/">Products</NavLink>
              </NavItem>
              <NavItem className="me-2 mt-2 mt-lg-0">
                <NavLink to="/contact">Contact Us</NavLink>
              </NavItem>
            </Nav>

            <Nav navbar className="mynavbar3 ms-auto d-none d-lg-block">
              <NavItem>
                <Form className="">
                  <FormGroup className="form-group">
                    <Input
                      type="text"
                      id="searchbox"
                      name="searchbox"
                      placeholder="search..."
                      className=""
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button className="">
                    <NavLink to={"/search/" + search}>
                      <i className="fas fa-search"></i>
                    </NavLink>                    
                    </Button>
                  </FormGroup>
                </Form>
              </NavItem>
            </Nav>
            <Nav
              navbar
              className="mynavbar2 ms-0 ms-lg-auto align-items-center d-none d-lg-flex"
            >
              <NavItem className="me-2">
                <Button outline className="btn-perso1 relative">
                  <PanierComponent panier_count={panier_count} />
                  <NavLink to="/panier">
                    Mon panier<i className="fas fa-shopping-cart fa-lg"></i>
                  </NavLink>
                </Button>
              </NavItem>
              <NavItem className="me-2">
                <Button outline className=" ml-mr-auto btn-perso1" onClick={showModal}>
                  <NavLink>
                    Login<i className="fas fa-user fa-lg"></i>
                  </NavLink>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {closeModal && modal}
      </>
    );
}
