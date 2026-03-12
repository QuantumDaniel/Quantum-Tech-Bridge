import React from 'react';
import '../App.css';

const HeroSection = () => {
    return (
        <section id="home" className="hero-section text-white d-flex align-items-center" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '600px',
            paddingTop: '80px'
        }}>
            <div className="container-lg">
                <div className="row align-items-center ">
                    <div className="col-lg-6 mb-4 mb-lg-0 ">
                        <h1 className="  mb-4 hero-text">Learn <span className='tech'>Tech</span> With Just Your <span className='phone'>Phone</span> in 2026</h1>
                        <p className="lead mb-4">Quantum TechBridge teaches in-demand digital skills — Graphics, video editing, cloud storage, web development and more — using only your smartphone. No laptop. No excuses.</p>
                        <div className="d-flex gap-3">
                            <button className="btn btn-light btn-lg fw-bold btn-start"><a className="nav-link" href="https://forms.gle/DfeJ49DW9mXJAHvL6" target="blank">Start Learning Today</a></button>
                            <button className="btn btn-outline-light btn-lg fw-bold"><a className="nav-link" href="#courses">Explore Courses</a></button>

                        </div>
                        <div className="hero-stats">
                            <div><div className="stat-val">500<span>+</span></div><div className="stat-lbl">Students Trained</div></div>
                            <div><div className="stat-val">6<span>+</span></div><div className="stat-lbl">Courses Available</div></div>
                            <div><div className="stat-val">98<span>%</span></div><div className="stat-lbl">Satisfaction Rate</div></div>
                        </div>


                    </div>
                    <div className="col-lg-6 text-center">
                        <div className="hero-image image-container" style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '20px',
                            padding: '60px 40px',
                            backdropFilter: 'blur(10px)'
                        }}>

                            <img className="image-fluid rounded my-image " src="src\assets\Gemini_Generated_Image_f2stshf2stshf2st.png"></img>
                            <i><p className='text-large founder'>QUANTUM DANIEL (Founder)</p></i>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default HeroSection;