import { Link } from 'react-router-dom';
import './pages.css';


function Cloud() {

    return (
        <div className="course-page cloud-page">

            {/* ══ HERO ══ */}
            <section className="cp-hero cloud-hero">
                <div className="cp-hero-glow cloud-glow" />
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <h1 className="cp-title">
                                Store, Sync &amp;<br />
                                Share Files<br />
                                <span className="cloud-accent">From Anywhere</span>
                            </h1>
                            <p className="cp-sub">
                                Learn how to use Google Drive, OneDrive, Dropbox and more to back up your files,
                                collaborate with others, and access your work from any device — all on your smartphone.
                            </p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <Link to="https://forms.gle/DfeJ49DW9mXJAHvL6" target='blank' className="cp-btn-primary cloud-btn">Apply Now</Link>
                                <a href="/#courses" className="cp-btn-outline">← Back to Courses</a>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-center">
                            <div className="cp-hero-card cloud-card">
                                <div className="cp-hero-icon">☁️</div>
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
                                <div className="cp-who-icon">🏫</div>
                                <h5>Students</h5>
                                <p>Never lose an assignment again — store and access your schoolwork from any device.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">👩‍💼</div>
                                <h5>Professionals</h5>
                                <p>Share documents with colleagues and clients securely and professionally.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">🛒</div>
                                <h5>Small Businesses</h5>
                                <p>Organise business records, receipts, and files without expensive hardware.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="cp-who-card">
                                <div className="cp-who-icon">📸</div>
                                <h5>Everyone</h5>
                                <p>Back up your photos, contacts and important documents so you never lose them.</p>
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
                                <div className="cp-module-num cloud-num">01</div>
                                <div>
                                    <h5>Introduction to Cloud Storage</h5>
                                    <p>Understand what cloud storage is, why it matters, and how it differs from local storage on your phone.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num cloud-num">02</div>
                                <div>
                                    <h5>Google Drive Mastery</h5>
                                    <p>Upload, organise, share and collaborate on files using Google Drive — all from your phone.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num cloud-num">03</div>
                                <div>
                                    <h5>OneDrive &amp; Microsoft 365</h5>
                                    <p>Use OneDrive to sync your files with Office apps and access your documents across all your devices.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num cloud-num">04</div>
                                <div>
                                    <h5>Dropbox &amp; Other Tools</h5>
                                    <p>Explore Dropbox, Mega, and other cloud platforms — learn which tool fits which use case.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num cloud-num">05</div>
                                <div>
                                    <h5>Backup &amp; Auto-Sync</h5>
                                    <p>Set up automatic backups for your photos, contacts, and files so nothing is ever lost again.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cp-module-card">
                                <div className="cp-module-num cloud-num">06</div>
                                <div>
                                    <h5>Sharing &amp; Collaboration</h5>
                                    <p>Share files and folders with others, set permissions, and collaborate in real time using cloud tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="cp-cta cloud-cta">
                <div className="container text-center">
                    <h2 className="cp-cta-title">Ready to Take Your Files to the Cloud?</h2>
                    <p className="cp-cta-sub">Stop losing important files. Learn cloud storage in just 2 weeks — entirely on your phone.</p>
                    <Link to="https://forms.gle/DfeJ49DW9mXJAHvL6" target='blank' className="cp-btn-primary cloud-btn mt-3 d-inline-block">Apply Now →</Link>
                </div>
            </section>

        </div>
    )
};

export default Cloud;