import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { userContext } from '../../../App';
import './NavbarMain.css'

const NavbarMain = () => {
    const [user, setUser] = useContext(userContext)
    const { email, name } = user
    return (
        <div>
            {/* //////////////////////////////////////////////////////////////// */}


            {/* <div className="p-4">
                <div className="row">
                    <div className="d-flex justify-content-start col-sm-12 col-md-6 col-lg-4 nav-item "><Link to="/home"><h3 style={{ fontWeight: '800' }}>Business Guru</h3></Link></div>
                    <div className="nav-item d-flex justify-content-end col-sm-12 col-md-6 col-lg-8">
                        <Link to="/home"><p>Home</p></Link>
                        <Link to="/dashboard"> <p>Dashboard</p></Link>
                        <p>Admin</p>
                        <p>Deals</p>
                        {
                            email && name ? <p style={{ color: 'red', fontWeight: '700' }}>{name}</p>
                                : <Link to="/logIn"><button className="btn btn-success">Log in</button></Link>
                        }
                    </div>
                </div>
            </div> */}


            {/* ////////////////////////////////////////////////////////////////// */}
            <Navbar expand="lg">
                <Navbar.Brand><Link style={{ textDecoration: 'none', color:'black' }} to="/home"><h3 style={{ fontWeight: '800', fontSize:'40px', textDecoration: 'none' }}>Business Guru</h3></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Link style={{ textDecoration: 'none', fontSize:'18px', color:'black', fontWeight:'bold' }} to="/home" className="mx-3 my-4"> Home</Link><br />
                    <Link style={{ textDecoration: 'none', fontSize:'18px', color:'black', fontWeight:'bold'  }} to="/dashboard" className="mx-3 my-4"> Dashboard</Link><br />
                    {
                        email && name ? <p style={{ color: 'red', fontWeight: '700' }}>{name}</p>
                            : <Link style={{ textDecoration: 'none' }} to="/logIn"><button className="btn btn-success mx-3">Log in</button></Link>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarMain;