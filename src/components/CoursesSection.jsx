import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesSection = () => {

    const ref = useRef(null);
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    const courses = [
        {
            id: 1,
            title: 'Web Development Masterclass',
            description: 'Build your first website using HTML, CSS, and JavaScript — all taught on a smartphone.',
            level: 'Intermediate',
            duration: '6weeks',
            students: 2450,
            icon: '🌐',
            color: '#667eea',
            link: 'WebDev'
        },
        {
            id: 2,
            title: 'AI models',
            description: 'Learn content creation, image and video creation with AI models',
            level: 'Intermediate',
            duration: '5 weeks',
            students: 1890,
            icon: '🤖',
            color: '#764ba2',
            link: 'Ai'
        },
        {
            id: 3,
            title: 'Cloud Storage Mastery',
            description: 'Learn Google Drive, OneDrive, and Dropbox to store, share, and collaborate like a pro.',
            level: 'Beginner',
            duration: '2 weeks',
            students: 1650,
            icon: '☁️',
            color: '#f093fb',
            link: 'Cloud'
        },
        {
            id: 4,
            title: 'Microsoft Office on Mobile',
            description: 'Master Word, Excel, and PowerPoint entirely from your smartphone — no laptop needed.',
            level: 'Beginner',
            duration: '4 weeks',
            students: 1420,
            icon: '📱',
            color: '#4facfe',
            link: 'Office'
        },
        {
            id: 5,
            title: 'Data Entry & Productivity',
            description: 'Boost workplace productivity with advanced spreadsheet skills and workflow automation.',
            level: 'Beginner',
            duration: '2 weeks',
            students: 1780,
            icon: '📊',
            color: '#43e97b',
            link: 'Data'
        },
        {
            id: 6,
            title: 'Digital Graphics Design',
            description: 'Create stunning visuals, logos, and brand materials using mobile-friendly design tools.',
            level: 'Beginner',
            duration: '3 weeks',
            students: 980,
            icon: '🎨',
            color: '#fa709a',
            link: 'Graphics'
        }
    ];

    return (
        <section id="courses" className="py-5">
            <div className="container-lg">
                <h2 className="text-center mb-5 fw-bold" style={{ fontSize: '2.5rem', color: '#667eea' }}>
                    Our Popular Courses
                </h2>
                <div className="row g-4">
                    {courses.map(course => (
                        <div key={course.id} className="col-md-6 col-lg-4">
                            <div ref={ref} className="card h-100 border-0 shadow-sm transition-card" style={{
                                borderTop: `4px solid ${course.color}`,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(40px)",
                                transition: "opacity 0.6s ease, transform 0.6s ease",
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                                }}>
                                <div className="card-body">
                                    <h3 className="mb-3" style={{ fontSize: '2.5rem' }}>{course.icon}</h3>
                                    <h5 className="card-title fw-bold mb-2">{course.title}</h5>
                                    <p className="card-text text-muted mb-3">{course.description}</p>
                                    <div className="mb-3">
                                        <span className="badge bg-light text-dark me-2 mb-2">{course.level}</span>
                                        <span className="badge bg-light text-dark me-2 mb-2">{course.duration}</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted">
                                            <i className="fas fa-users me-1"></i>{course.students} students
                                        </small>
                                        <button className="btn btn-sm" style={{ backgroundColor: course.color, color: 'white' }}>
                                            <Link className='link text-white' to={course.link}>Learn More </Link>
                                        </button>
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

export default CoursesSection;