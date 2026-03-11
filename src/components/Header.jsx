import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"
import '../App.css';


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('active');
    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);


    }, []);



    return (
        <header className={`navbar navbar-expand-lg sticky-top header ${scrolled ? "scrolled" : ""}`} onClick={() => { setActive('home') }} >
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold fs-4 qt-logo " to="/" >
                    <i className="fas fa-quantum"></i>
                    Quantum<span className='text'>Tech</span>Bridge
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>

                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className={`nav-item ${active === "courses" ? "active" : ""}`} onClick={() => { setActive('courses') }}>
                            <HashLink className='nav-link' to="/#courses"  >Courses</HashLink>
                        </li>
                        <li className={`nav-item ${active === "about" ? "active" : ""}`} onClick={() => { setActive('about') }}>
                            <HashLink className="nav-link" to="/#about">About</HashLink>
                        </li>
                        <li className={`nav-item ${active === "blog" ? "active" : ""}`} onClick={() => { setActive('blog') }}>
                            <HashLink className="nav-link" to="/#blog">Blog</HashLink>
                        </li>
                        <li className={`nav-item ${active === "contact" ? "active" : ""}`} onClick={() => { setActive('contact') }}>
                            <HashLink className="nav-link" to="/#contact">Contact</HashLink>
                        </li>
                    </ul>
                    <button className="btn btn-light ms-3 fw-bold"><Link className="nav-link" to="https://forms.gle/DfeJ49DW9mXJAHvL6" target="blank">Enroll Now</Link>
                    </button>
                </nav>
            </div>
        </header >
    );
};

export default Header;