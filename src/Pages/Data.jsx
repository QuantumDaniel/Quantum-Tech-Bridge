import { Link } from "react-router-dom";
import './pages.css';
function Data() {

    return (
        <div className="course-page data-page">

            {/* ══ HERO ══ */}
            <section className="cp-hero data-hero">
                <div className="cp-hero-glow data-glow" />
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <h1 className="cp-title">
                                Boost Your<br />
                                <span className="data-accent">Productivity</span><br />
                                with Spreadsheet
                            </h1>
                            <p className="cp-sub">
                                Master data entry, spreadsheet skills, and workflow automation to become the most
                                productive person in any workplace — all learned on your smartphone.
                            </p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <Link to="https://forms.gle/DfeJ49DW9mXJAHvL6" target="blank" className="cp-btn-primary data-btn">Apply Now</Link>
                                <a href="/#courses" className="cp-btn-outline">← Back to Courses</a>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-center">
                            <div className="cp-hero-card data-card">
                                <div className="cp-hero-icon">📊</div>
                                <div className="cp-course-meta-box">
                                    <div className="cp-meta-item"><span className="cp-meta-label">Duration</span><span className="cp-meta-val">2 Weeks</span></div>
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
                                <div className="cp-who-icon">🏢</div>
                                <h5>Office Workers</h5>
                                <p>Work faster, make fewer errors, and become the go-to person for data tasks in your workplace.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">💼</div>
                                <h5>Job Seekers</h5>
                                <p>Data entry is one of the most advertised job skills — get certified and land your next role faster.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">🛒</div>
                                <h5>Business Owners</h5>
                                <p>Track inventory, manage finances, and automate repetitive tasks to save hours every week.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">🎓</div>
                                <h5>Students</h5>
                                <p>Learn spreadsheet skills that will serve you in every career path — from science to business.</p>
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
                                <div className="cp-module-num data-num">01</div>
                                <div>
                                    <h5>Introduction to Data Entry</h5>
                                    <p>Understand what data entry is, best practices for accuracy and speed, and how to set up your workspace on mobile.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num data-num">02</div>
                                <div>
                                    <h5>Spreadsheet Fundamentals</h5>
                                    <p>Navigate Google Sheets and Excel on your phone — enter, format, and organise data like a professional.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num data-num">03</div>
                                <div>
                                    <h5>Formulas &amp; Functions</h5>
                                    <p>Use powerful formulas — SUM, AVERAGE, IF, VLOOKUP and more — to calculate and analyse data automatically.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num data-num">04</div>
                                <div>
                                    <h5>Data Organisation &amp; Sorting</h5>
                                    <p>Sort, filter, and structure large datasets so information is always easy to find, read, and report on.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num data-num">05</div>
                                <div>
                                    <h5>Workflow Automation</h5>
                                    <p>Automate repetitive tasks using Google Sheets macros and built-in automation tools — save hours of manual work every week.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num data-num">06</div>
                                <div>
                                    <h5>Final Project &amp; Certification</h5>
                                    <p>Build a fully functional data tracker or business spreadsheet from scratch and earn your productivity certificate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="cp-cta data-cta">
                <div className="container text-center">
                    <h2 className="cp-cta-title">Become the Most Productive Person in the Room</h2>
                    <p className="cp-cta-sub">Advanced spreadsheet and automation skills — learned entirely on your phone in just 2 weeks.</p>
                    <Link to="https://forms.gle/DfeJ49DW9mXJAHvL6" target="blank" className="cp-btn-primary data-btn mt-3 d-inline-block">Apply Now →</Link>
                </div>
            </section>

        </div>

    )
};

export default Data;