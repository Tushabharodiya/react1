import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg py-0">
                <div className="container-fluid">
                    <a className="navbar-brand p-0" href="#"><img src="https://htmldemo.net/corano/corano/assets/img/logo/logo.png" alt="logo image" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="head-info d-flex justify-content-between align-items-center">
                            <div className="nav-data">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to={"/"}  className="nav-link active" href="#">Home <i class="fa-solid fa-angle-down"></i></Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">pages <i class="fa-solid fa-angle-down"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/shope"} className="nav-link" href="#">shop <i class="fa-solid fa-angle-down"></i></Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">blog <i class="fa-solid fa-angle-down"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/contact"} className="nav-link" href="#">contact us</Link>
                                    </li>
                                </ul>
                            </div>
                            <form className="d-flex">
                                <i class="fa-solid fa-magnifying-glass"></i><input className="form-control me-2 d-inline-block" type="search" placeholder="Search entire store hire" />
                            </form>
                            <div className="head">
                                <a href='javascript:void(0)'><i class="fa-regular fa-circle-user"></i></a>
                                <a href='javascript:void(0)'><i class="fa-regular fa-heart"></i></a>
                                <a href='javascript:void(0)'><i class="fa-solid fa-basket-shopping"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
