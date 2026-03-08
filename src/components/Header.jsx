import { useState, useEffect } from "react";


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
                <a className={`navbar-brand fw-bold fs-4 qt-logo ${active === 'home' ? "active" : ""}`} href="#home"                                                                                                                                                                                                      >
                    <i className="fas fa-quantum"></i>
                    Quantum<span className='text'>Tech</span>Bridge
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>

                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className={`nav-item ${active === "courses" ? "active" : ""}`} onClick={() => { setActive('courses') }}>
                            <a className='nav-link' href="#courses"  >Courses</a>
                        </li>
                        <li className={`nav-item ${active === "about" ? "active" : ""}`} onClick={() => { setActive('about') }}>
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className={`nav-item ${active === "blog" ? "active" : ""}`} onClick={() => { setActive('blog') }}>
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                        <li className={`nav-item ${active === "contact" ? "active" : ""}`} onClick={() => { setActive('contact') }}>
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <button className="btn btn-light ms-3 fw-bold"><a className="nav-link" href="https://www.google.com" target="blank">Enroll Now</a>
                    </button>
                </nav>
            </div>
        </header >
    );
};

export default Header;