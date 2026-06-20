import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'  // Add this import
import Carousel from './Carousel'
import Navbar from './Navbar'
import './Getproducts.css'
import Footer from './Footer'

const Getproducts = () => {

  const [loading, setLoading] = useState("")
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")

  const img_url = "https://wangui-hsk.alwaysdata.net/static/images/"
  const navigate = useNavigate()  // Add this hook

  const fetchProducts = async () => {
    setLoading("Loading products...")
    try {
        const response = await axios.get("http://wangui-hsk.alwaysdata.net/api/getproducts")
        setProducts(response.data.products)
        setLoading("")
    } catch (error) {
        setLoading("")
        setError(error.message)
    }
  }

  useEffect(() => { fetchProducts() }, [])

  // Function to handle Buy Now click
  const handleBuyNow = (product) => {
    navigate("/makepayment", { state: { product } })
  }

  return (
  <div className='container-fluid px-4'>
    <Navbar/>
    {/* Carousel Section */}
    <div className="mb-5">
        <Carousel />
    </div>

    {/* Loading & Error States */}
    {loading && (
        <div className="text-center py-5">
            <div className="spinner-border text-success" role="status" style={{ width: '3rem', height: '3rem' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
            <h4 className="text-muted mt-3">{loading}</h4>
        </div>
    )}

    {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            <strong>Error:</strong> {error}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )}

    {/* Products Grid */}
    {!loading && !error && (
      <>
          <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold">
                  <span className="border-start border-success border-5 ps-3">Our Products</span>
              </h2>
              <span className="badge bg-success bg-opacity-10 text-success px-4 py-2 rounded-pill">
                  <i className="bi bi-grid-3x3-gap-fill me-2"></i>
                  {products.length} Products
              </span>
          </div>

          <div className="row g-4">
              {products.map((product, index) => (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                      <div className='card h-100 border-0 shadow-sm hover-card transition-all' 
                            style={{ borderRadius: '16px', overflow: 'hidden' }}>
                          <div className="position-relative">
                              <img 
                                  src={img_url + product.product_photo} 
                                  alt={product.product_name}
                                  className='card-img-top product-img'
                                  style={{ height: '220px', objectFit: 'cover' }}
                              />
                              <span className="position-absolute top-0 end-0 m-3 bg-success text-white px-3 py-1 rounded-pill small">
                                  <i className="bi bi-tag-fill me-1"></i>
                                  New
                              </span>
                          </div>
                          
                          <div className='card-body p-3'>
                              <h5 className='card-title fw-bold text-truncate'>{product.product_name}</h5>
                              <p className="card-text text-muted small mb-2" style={{ minHeight: '40px' }}>
                                  {product.product_description.slice(0, 60)}...
                              </p>
                              <div className="d-flex justify-content-between align-items-center mt-2">
                                  <h4 className="text-success fw-bold mb-0">
                                      <span className="small fw-normal text-muted">Kes</span> {product.product_cost}
                                  </h4>
                                  {/* Buy Now Button - Updated */}
                                  <button 
                                      className="btn btn-success btn-sm rounded-pill px-3 hover-btn"
                                      onClick={() => handleBuyNow(product)}
                                  >
                                      <i className="bi bi-cart-check me-1"></i> Buy Now
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </>
    )}

    {/* ABOUT US SECTION */}
    <section id="aboutus" className="about-section py-5 mt-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left: Image/Visual */}
          <div className="col-lg-6">
            <div className="about-image-wrapper position-relative">
                <div className="about-image-main position-relative">
                    <img
                        src="/images/malyannafarmaboutusphoto.jpg"
                        alt="About Sokogarden"
                        className="img-fluid rounded-4 shadow-lg"
                        style={{ height: '500px', width: '100%', objectFit: 'cover' }}
                    />
                    <div className="experience-badge position-absolute bottom-0 start-0 m-4 bg-white rounded-4 shadow-lg p-3 d-flex align-items-center gap-3">
                        <span className="exp-number display-4 fw-bold text-success mb-0">5+</span>
                        <span className="exp-text small fw-bold">Years of<br />Excellence</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-6">
            <div className="about-content">
                <h6 className="text-uppercase fw-bold text-success mb-3">
                    <span className="bg-success bg-opacity-10 px-3 py-2 rounded-pill">
                        <i className="bi bi-dash-lg me-2"></i>About Us
                    </span>
                </h6>
                <h2 className="fw-bold display-6 mb-4">
                    We Provide The Best <span className="text-success">Digital Solutions</span> For Your Business
                </h2>
                <p className="text-secondary lead mb-4">
                    At Sokogarden, we believe in cultivating digital experiences that grow your brand.
                    Our team of passionate developers and designers work tirelessly to deliver
                    modern web applications that combine stunning aesthetics with powerful functionality.
                </p>

                {/* Features Grid */}
                <div className="row g-3 mb-4">
                    <div className="col-6">
                        <div className="about-feature d-flex align-items-center gap-3 p-3 bg-light rounded-3 hover-bg">
                            <div className="feature-icon text-success bg-success bg-opacity-10 p-2 rounded-circle">
                                <i className="bi bi-lightning-charge-fill fs-5"></i>
                            </div>
                            <div>
                                <h6 className="fw-bold mb-1">Fast Delivery</h6>
                                <p className="small text-secondary mb-0">Quick turnaround</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about-feature d-flex align-items-center gap-3 p-3 bg-light rounded-3 hover-bg">
                            <div className="feature-icon text-primary bg-primary bg-opacity-10 p-2 rounded-circle">
                                <i className="bi bi-shield-check fs-5"></i>
                            </div>
                            <div>
                                <h6 className="fw-bold mb-1">Secure</h6>
                                <p className="small text-secondary mb-0">Enterprise-grade</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about-feature d-flex align-items-center gap-3 p-3 bg-light rounded-3 hover-bg">
                            <div className="feature-icon text-warning bg-warning bg-opacity-10 p-2 rounded-circle">
                                <i className="bi bi-people-fill fs-5"></i>
                            </div>
                            <div>
                                <h6 className="fw-bold mb-1">User Focused</h6>
                                <p className="small text-secondary mb-0">UX-first approach</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about-feature d-flex align-items-center gap-3 p-3 bg-light rounded-3 hover-bg">
                            <div className="feature-icon text-danger bg-danger bg-opacity-10 p-2 rounded-circle">
                                <i className="bi bi-headset fs-5"></i>
                            </div>
                            <div>
                                <h6 className="fw-bold mb-1">24/7 Support</h6>
                                <p className="small text-secondary mb-0">Always here</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="btn btn-success btn-lg rounded-pill px-5 shadow-sm hover-shadow">
                    Learn More <i className="bi bi-arrow-right ms-2"></i>
                </button>
            </div>
          </div>

        </div>

        {/* Stats Row - Redesigned */}
        <div className="row mt-5 pt-5 g-4">
            <div className="col-6 col-md-3">
                <div className="stat-item text-center p-4 bg-success bg-opacity-10 rounded-4 hover-scale">
                    <h3 className="display-4 fw-bold text-success mb-0">500+</h3>
                    <p className="stat-label text-secondary fw-bold mb-0">Products Delivered</p>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="stat-item text-center p-4 bg-primary bg-opacity-10 rounded-4 hover-scale">
                    <h3 className="display-4 fw-bold text-primary mb-0">120+</h3>
                    <p className="stat-label text-secondary fw-bold mb-0">Happy Clients</p>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="stat-item text-center p-4 bg-warning bg-opacity-10 rounded-4 hover-scale">
                    <h3 className="display-4 fw-bold text-warning mb-0">50+</h3>
                    <p className="stat-label text-secondary fw-bold mb-0">Team Members</p>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="stat-item text-center p-4 bg-danger bg-opacity-10 rounded-4 hover-scale">
                    <h3 className="display-4 fw-bold text-danger mb-0">15+</h3>
                    <p className="stat-label text-secondary fw-bold mb-0">Awards Won</p>
                </div>
            </div>
        </div>
      </div>
    </section>

    <Footer/>
  </div>
  )
}

export default Getproducts