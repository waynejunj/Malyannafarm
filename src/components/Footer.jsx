import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer mt-5" id='about' style={{
            background: 'linear-gradient(135deg, #1a3c2a 0%, #2d5a3d 50%, #1a3c2a 100%)',
            color: '#fff'
        }}>
            <div className='container py-4 py-md-5'>
                <div className='row g-4'>

                    {/* Brand / About Website */}
                    <div className='col-12 col-md-4'>
                        <h5 className="fw-bold mb-3 fs-5 d-flex align-items-center justify-content-center justify-content-md-start">
                            <div className="bg-success bg-opacity-25 p-2 rounded-circle me-2">
                                <i className="bi bi-flower1 text-success fs-5"></i>
                            </div>
                            Malyanna Farm
                        </h5>
                        <p className='text-white-50 small lh-lg text-center text-md-start'>
                            Building modern web applications with exceptional user experiences.
                            Connecting farmers to consumers through innovative digital solutions.
                        </p>
                        <div className="d-flex gap-3 mt-3 justify-content-center justify-content-md-start">
                            <button type="button" className="btn btn-link text-white-50 hover-text-success fs-5 p-0" style={{ transition: 'color 0.3s', textDecoration: 'none' }}>
                                <i className="bi bi-facebook"></i>
                            </button>
                            <button type="button" className="btn btn-link text-white-50 hover-text-success fs-5 p-0" style={{ transition: 'color 0.3s', textDecoration: 'none' }}>
                                <i className="bi bi-twitter-x"></i>
                            </button>
                            <button type="button" className="btn btn-link text-white-50 hover-text-success fs-5 p-0" style={{ transition: 'color 0.3s', textDecoration: 'none' }}>
                                <i className="bi bi-instagram"></i>
                            </button>
                            <button type="button" className="btn btn-link text-white-50 hover-text-success fs-5 p-0" style={{ transition: 'color 0.3s', textDecoration: 'none' }}>
                                <i className="bi bi-youtube"></i>
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='col-6 col-md-4'>
                        <h5 className='fw-bold mb-3 fs-6 position-relative d-inline-block'>
                            Quick Links
                            <span className="position-absolute bottom-0 start-0 w-50" style={{
                                height: '2px',
                                background: '#28a745',
                                borderRadius: '2px'
                            }}></span>
                        </h5>
                        <ul className='list-unstyled mt-3'>
                            <li className="mb-2">
                                <a href="/" className='text-white-50 text-decoration-none d-flex align-items-center gap-2 hover-link small'>
                                    <i className="bi bi-chevron-right text-success"></i> Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#aboutus" className='text-white-50 text-decoration-none d-flex align-items-center gap-2 hover-link small'>
                                    <i className="bi bi-chevron-right text-success"></i> About
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/addproduct" className='text-white-50 text-decoration-none d-flex align-items-center gap-2 hover-link small'>
                                    <i className="bi bi-chevron-right text-success"></i> Add Product
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/contact" className='text-white-50 text-decoration-none d-flex align-items-center gap-2 hover-link small'>
                                    <i className="bi bi-chevron-right text-success"></i> Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className='col-6 col-md-4'>
                        <h5 className='fw-bold mb-3 fs-6 position-relative d-inline-block'>
                            Contact Us
                            <span className="position-absolute bottom-0 start-0 w-50" style={{
                                height: '2px',
                                background: '#28a745',
                                borderRadius: '2px'
                            }}></span>
                        </h5>
                        <ul className='list-unstyled mt-3'>
                            <li className="mb-2 d-flex align-items-start gap-2 small">
                                <i className="bi bi-envelope-fill text-success mt-1"></i>
                                <span className="text-white-50">info@malyannafarm.com</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start gap-2 small">
                                <i className="bi bi-telephone-fill text-success mt-1"></i>
                                <span className="text-white-50">+254 757 821 094</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start gap-2 small">
                                <i className="bi bi-geo-alt-fill text-success mt-1"></i>
                                <span className="text-white-50">Riara, Nairobi</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start gap-2 small">
                                <i className="bi bi-clock-fill text-success mt-1"></i>
                                <span className="text-white-50">Mon-Fri: 8AM - 6PM</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <hr className="my-3 my-md-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                {/* Newsletter Subscription */}
                <div className="row justify-content-center mb-3 mb-md-4">
                    <div className="col-12 col-md-8">
                        <div className="d-flex flex-column flex-md-row align-items-center gap-2 gap-md-3 justify-content-center">
                            <p className="mb-0 text-white-50 small text-center text-md-start">
                                <i className="bi bi-envelope-paper-fill text-success me-2"></i>
                                Subscribe to our newsletter
                            </p>
                            <div className="input-group w-auto flex-nowrap" style={{ maxWidth: '400px' }}>
                                <input
                                    type="email"
                                    className="form-control form-control-sm bg-dark bg-opacity-25 border-0 text-white"
                                    placeholder="Your email"
                                    style={{ borderRadius: '25px 0 0 25px', minWidth: '150px' }}
                                />
                                <button className="btn btn-success btn-sm" style={{ borderRadius: '0 25px 25px 0' }}>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="container py-2 py-md-3">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                        <p className="mb-0 text-white-50 small text-center">
                            &copy; {new Date().getFullYear()} Malyanna Farm. All Rights Reserved.
                        </p>
                        <p className="mb-0 text-white-50 small">
                            Made with <span className="text-success">love</span> in Kenya
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer