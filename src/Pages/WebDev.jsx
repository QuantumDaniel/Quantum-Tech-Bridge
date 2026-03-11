import { Link } from "react-router-dom";
import './pages.css';

function WebDev() {

    return (
        <div className="course-page webdev-page">

            {/* ══ HERO ══ */}
            <section className="cp-hero webdev-hero">
                <div className="cp-hero-glow webdev-glow" />
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <h1 className="cp-title">
                                Build Websites<br />
                                with <span className="webdev-accent">HTML, CSS</span><br />
                                &amp; JavaScript
                            </h1>
                            <p className="cp-sub">
                                Learn front-end web development from scratch — no laptop, no coding experience needed.
                                You'll build real websites using only your smartphone and graduate with a live project to show employers.
                            </p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <Link to="https://forms.gle/DfeJ49DW9mXJAHvL6" target="blank" className="cp-btn-primary webdev-btn">Apply Now</Link>
                                <a href="/#courses" className="cp-btn-outline">← Back to Courses</a>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-center">
                            <div className="cp-hero-card webdev-card">
                                <div className="cp-hero-icon">🌐</div>
                                <div className="cp-course-meta-box">
                                    <div className="cp-meta-item"><span className="cp-meta-label">Duration</span><span className="cp-meta-val">6 Weeks</span></div>
                                    <div className="cp-meta-item"><span className="cp-meta-label">Level</span><span className="cp-meta-val">Intermediate</span></div>
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
                                <div className="cp-who-icon">🧑‍💻</div>
                                <h5>Aspiring Developers</h5>
                                <p>Start your journey into tech with the foundational skills every developer must know.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">🛒</div>
                                <h5>Business Owners</h5>
                                <p>Build and maintain your own website without paying expensive developers.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">💰</div>
                                <h5>Freelancers</h5>
                                <p>Offer web design as a service and earn income building websites for clients.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">🎓</div>
                                <h5>Students</h5>
                                <p>Get ahead in computer science and IT courses with real hands-on coding experience.</p>
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
                                <div className="cp-module-num webdev-num">01</div>
                                <div>
                                    <h5>How the Web Works</h5>
                                    <p>Understand browsers, servers, and how websites are structured. Set up your mobile coding environment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num webdev-num">02</div>
                                <div>
                                    <h5>HTML — Building the Structure</h5>
                                    <p>Learn HTML tags, elements, headings, links, images, forms, and how to structure a webpage from scratch.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num webdev-num">03</div>
                                <div>
                                    <h5>CSS — Styling Your Pages</h5>
                                    <p>Add colours, fonts, layouts, spacing, and responsiveness to your web pages using CSS.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num webdev-num">04</div>
                                <div>
                                    <h5>Responsive Design</h5>
                                    <p>Make your websites look great on all screen sizes — phones, tablets, and desktops — using media queries and Flexbox.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num webdev-num">05</div>
                                <div>
                                    <h5>JavaScript Basics</h5>
                                    <p>Add interactivity to your websites — buttons, alerts, dynamic content, and simple logic using JavaScript.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num webdev-num">06</div>
                                <div>
                                    <h5>Final Project — Build a Live Website</h5>
                                    <p>Design and publish your own personal or business website entirely from your smartphone. Graduate with a live portfolio.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="cp-cta webdev-cta">
                <div className="container text-center">
                    <h2 className="cp-cta-title">Start Building Websites Today</h2>
                    <p className="cp-cta-sub">No laptop. No prior experience. Just your phone and the drive to learn. Enroll in 6 weeks of hands-on web development.</p>
                    <Link to="https://forms.gle/DfeJ49DW9mXJAHvL6" target="blank" className="cp-btn-primary webdev-btn mt-3 d-inline-block">Apply Now →</Link>
                </div>
            </section>

        </div>

    )
};

export default WebDev;