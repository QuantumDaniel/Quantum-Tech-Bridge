import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container-lg">
                <h2 className="text-center mb-5 fw-bold" style={{ fontSize: '2.5rem', color: '#667eea' }}>
                    About Quantum TechBridge
                </h2>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '20px',
                            padding: '40px',
                            color: 'white',
                            minHeight: '300px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div className="text-center">
                                <i className="fas fa-graduation-cap" style={{ fontSize: '80px', marginBottom: '20px' }}></i>
                                <p className="fs-5">Educating Tech Professionals Worldwide</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-4">
                        <h3 className="mb-3 fw-bold text-dark">Why We Exist</h3>
                        <p className="mb-3 text-muted">
                            Quantum TechBridge was founded with a mission to democratize tech education. We believe that everyone, regardless of background, should have access to world-class training from industry leaders.
                        </p>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <i className="fas fa-check-circle" style={{ color: '#667eea', marginRight: '10px' }}></i>
                                <strong>Expert Instructors:</strong> Learn from professionals with 10+ years of experience
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-check-circle" style={{ color: '#667eea', marginRight: '10px' }}></i>
                                <strong>Hands-on Projects:</strong> Build real-world applications and portfolio pieces
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-check-circle" style={{ color: '#667eea', marginRight: '10px' }}></i>
                                <strong>Career Support:</strong> Get job-ready with resume reviews and interview prep
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-check-circle" style={{ color: '#667eea', marginRight: '10px' }}></i>
                                <strong>Lifetime Access:</strong> Never stop learning with lifetime course access
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;