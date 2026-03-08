import React from 'react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: '👨‍🏫',
            title: 'Expert Instructors',
            description: 'Learn from industry veterans with 10+ years of experience in their respective fields.'
        },
        {
            icon: '🎓',
            title: 'Certification',
            description: 'Earn recognized certificates that boost your resume and impress employers.'
        },
        {
            icon: '💼',
            title: 'Job Assistance',
            description: 'Get help with job placement, interviews, and career guidance from our team.'
        },
        {
            icon: '🌍',
            title: '24/7 Support',
            description: 'Access our community and support team anytime, anywhere across the globe.'
        },
        {
            icon: '💰',
            title: 'Affordable Pricing',
            description: 'Quality education without breaking the bank. Flexible payment plans available.'
        },
        {
            icon: '⚡',
            title: 'Fast-Track Options',
            description: 'Choose your learning pace with our flexible course schedules and on-demand content.'
        }
    ];

    return (
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container-lg">
                <h2 className="text-center mb-5 fw-bold" style={{ fontSize: '2.5rem', color: '#667eea' }}>
                    Why Choose Us?
                </h2>
                <div className="row g-4">
                    {reasons.map((reason, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="text-center p-4" style={{
                                backgroundColor: 'white',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.2)';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}>
                                <h3 style={{ fontSize: '3rem', marginBottom: '15px' }}>{reason.icon}</h3>
                                <h5 className="fw-bold mb-3">{reason.title}</h5>
                                <p className="text-muted mb-0">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;