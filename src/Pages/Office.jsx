import { Link } from "react-router-dom";
import './pages.css';

function Office() {

    return (
        <div className="course-page office-page">

            {/* ══ HERO ══ */}
            <section className="cp-hero office-hero">
                <div className="cp-hero-glow office-glow" />
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <h1 className="cp-title">
                                Word, Excel &amp;<br />
                                PowerPoint —<br />
                                <span className="office-accent">On Your Phone</span>
                            </h1>
                            <p className="cp-sub">
                                Master Microsoft Office tools from your smartphone. Learn to write professional documents,
                                build spreadsheets, and design presentations — skills every employer demands.
                            </p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <Link to="https://forms.gle/DfeJ49DW9mXJAHvL6" target="blank" className="cp-btn-primary office-btn">Apply Now</Link>
                                <a href="/#courses" className="cp-btn-outline">← Back to Courses</a>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-center">
                            <div className="cp-hero-card office-card">
                                <div className="cp-hero-icon">📱</div>
                                <div className="cp-course-meta-box">
                                    <div className="cp-meta-item"><span className="cp-meta-label">Duration</span><span className="cp-meta-val">4 Weeks</span></div>
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
                                <div className="cp-who-icon">🎓</div>
                                <h5>Students</h5>
                                <p>Write better assignments and create impressive presentations for school and university.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">💼</div>
                                <h5>Job Seekers</h5>
                                <p>Microsoft Office is required in almost every office job — get certified and stand out.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">🏢</div>
                                <h5>Office Workers</h5>
                                <p>Level up your productivity with advanced Word, Excel, and PowerPoint skills.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">🛒</div>
                                <h5>Business Owners</h5>
                                <p>Create invoices, track finances, and build professional proposals from your phone.</p>
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
                                <div className="cp-module-num office-num">01</div>
                                <div>
                                    <h5>Getting Started with Microsoft Office Mobile</h5>
                                    <p>Install and set up Word, Excel, and PowerPoint on your phone. Learn the mobile interface and how to navigate each app.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num office-num">02</div>
                                <div>
                                    <h5>Microsoft Word Essentials</h5>
                                    <p>Create, format, and style professional documents — letters, CVs, reports — entirely from your smartphone.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num office-num">03</div>
                                <div>
                                    <h5>Microsoft Excel Basics</h5>
                                    <p>Build spreadsheets, use formulas, create tables, and analyse data using Excel on mobile.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num office-num">04</div>
                                <div>
                                    <h5>Excel for Real Life</h5>
                                    <p>Build budgets, track expenses, create invoices, and manage data — practical Excel for everyday use.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num office-num">05</div>
                                <div>
                                    <h5>Microsoft PowerPoint</h5>
                                    <p>Design eye-catching slide presentations with animations, images, and professional layouts on your phone.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num office-num">06</div>
                                <div>
                                    <h5>Final Project &amp; Certification</h5>
                                    <p>Complete a real-world task combining all three apps — then earn your Microsoft Office certificate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="cp-cta office-cta">
                <div className="container text-center">
                    <h2 className="cp-cta-title">Become Microsoft Office Certified Today</h2>
                    <p className="cp-cta-sub">The most in-demand office skill — now learnable entirely on your smartphone in 4 weeks.</p>
                    <Link to="https://forms.gle/DfeJ49DW9mXJAHvL6" target="blank" className="cp-btn-primary office-btn mt-3 d-inline-block">Apply Now →</Link>
                </div>
            </section>

        </div>
    )
};

export default Office;