import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Senior Web Developer at TechCorp',
            image: 'SJ',
            testimonial: 'Quantum TechBridge transformed my career! The hands-on projects and expert instructors made all the difference. I landed my dream job 3 months after completing the course.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Secondary School Teacher',
            image: 'MC',
            testimonial: 'The Cloud Storage course was exactly what I needed. I now manage all my teaching materials digitally. The certificate also helped me get a promotion at work',
            rating: 5
        },
        {
            name: 'Emma Williams',
            role: 'Freelance Designer',
            image: 'EW',
            testimonial: 'The Digital Graphics course gave me skills I use every single day. Affordable, practical, and genuinely excellent. I have already recommended it to five of my friends',
            rating: 5
        },
        {
            name: 'Anyor Benedictha',
            role: 'Small Business Owner',
            image: 'AB',
            testimonial: 'I enrolled in the Microsoft Office course and it completely transformed how I run my business. The smartphone-first approach means I could practice anywhere, anytime.',
            rating: 5
        }
    ];

    return (
        <section className="py-5" id="blog">
            <div className="container-lg">
                <h2 className="text-center mb-5 fw-bold" style={{ fontSize: '2.5rem', color: '#667eea' }}>
                    What Our Students Say
                </h2>
                <div className="row g-4">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-md-6 col-lg-6">
                            <div className="card border-0 shadow-sm h-100" style={{
                                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                            }}>
                                <div className="card-body">
                                    <div className="mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <i key={i} className="fas fa-star" style={{ color: '#ffc107', marginRight: '3px' }}></i>
                                        ))}
                                    </div>
                                    <p className="card-text mb-4 fst-italic">"{testimonial.testimonial}"</p>
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle" style={{
                                            width: '50px',
                                            height: '50px',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            marginRight: '15px'
                                        }}>
                                            {testimonial.image}
                                        </div>
                                        <div>
                                            <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                                            <small className="text-muted">{testimonial.role}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;