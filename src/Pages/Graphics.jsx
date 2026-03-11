import { Link } from "react-router-dom";
import './pages.css';

function Graphics() {

    return (
        <div className="course-page graphics-page">

            {/* ══ HERO ══ */}
            <section className="cp-hero graphics-hero">
                <div className="cp-hero-glow graphics-glow" />
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <h1 className="cp-title">
                                Design Like a<br />
                                <span className="graphics-accent">Pro</span> Using<br />
                                Just Canva
                            </h1>
                            <p className="cp-sub">
                                Learn to create stunning graphics, logos, flyers, social media posts, and brand materials
                                using Canva on your smartphone — no design experience needed.
                            </p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <Link to="https://forms.gle/DfeJ49DW9mXJAHvL6" target="blank" className="cp-btn-primary graphics-btn">Apply Now</Link>
                                <a href="/#courses" className="cp-btn-outline">← Back to Courses</a>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-center">
                            <div className="cp-hero-card graphics-card">
                                <div className="cp-hero-icon">🎨</div>
                                <div className="cp-course-meta-box">
                                    <div className="cp-meta-item"><span className="cp-meta-label">Duration</span><span className="cp-meta-val">3 Weeks</span></div>
                                    <div className="cp-meta-item"><span className="cp-meta-label">Level</span><span className="cp-meta-val">Beginner</span></div>
                                    <div className="cp-meta-item"><span className="cp-meta-label">Mode</span><span className="cp-meta-val">Smartphone Only</span></div>
                                    <div className="cp-meta-item"><span className="cp-meta-label">Certificate</span><span className="cp-meta-val">✓ Included</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ WHO IT'S FOR ══ */}
            <section className="cp-section">
                <div className="container">
                    <h2 className="cp-section-title">Is This Course for You?</h2>
                    <div className="row g-4 mt-2">
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">📱</div>
                                <h5>Content Creators</h5>
                                <p>Design eye-catching posts, thumbnails, and stories that get more engagement.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">🛍️</div>
                                <h5>Business Owners</h5>
                                <p>Create your own flyers, banners, and marketing materials without hiring a designer.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">💰</div>
                                <h5>Freelancers</h5>
                                <p>Offer graphic design services to clients and build a profitable design side hustle.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">🎓</div>
                                <h5>Students</h5>
                                <p>Design stunning project presentations, posters, and school materials that impress.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CURRICULUM ══ */}
            <section className="cp-section cp-section-dark">
                <div className="container">
                    <h2 className="cp-section-title">What You'll Cover</h2>
                    <div className="row g-4 mt-2">
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num graphics-num">01</div>
                                <div>
                                    <h5>Introduction to Canva</h5>
                                    <p>Set up Canva on your phone, explore the interface, and understand templates, elements, and design basics.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num graphics-num">02</div>
                                <div>
                                    <h5>Design Principles</h5>
                                    <p>Learn colour theory, typography, spacing, and layout principles that make designs look professional.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num graphics-num">03</div>
                                <div>
                                    <h5>Social Media Graphics</h5>
                                    <p>Design Instagram posts, Facebook banners, WhatsApp flyers, and YouTube thumbnails optimised for each platform.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num graphics-num">04</div>
                                <div>
                                    <h5>Logo &amp; Brand Design</h5>
                                    <p>Create a professional logo and brand identity — colour palette, fonts, and visual style — entirely in Canva.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num graphics-num">05</div>
                                <div>
                                    <h5>Flyers, Posters &amp; Print</h5>
                                    <p>Design event flyers, business cards, posters, and certificates that are ready to print or share digitally.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num graphics-num">06</div>
                                <div>
                                    <h5>Final Project — Build Your Portfolio</h5>
                                    <p>Complete a full brand design project and build a Canva portfolio you can show to clients or employers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="cp-cta graphics-cta">
                <div className="container text-center">
                    <h2 className="cp-cta-title">Start Designing Beautiful Graphics Today</h2>
                    <p className="cp-cta-sub">No design degree. No expensive software. Just Canva on your phone and 3 weeks of expert training.</p>
                    <Link to="https://forms.gle/DfeJ49DW9mXJAHvL6" target="blank" className="cp-btn-primary graphics-btn mt-3 d-inline-block">Apply Now →</Link>
                </div>
            </section>

        </div>
    )
};

export default Graphics;