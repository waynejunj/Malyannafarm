import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Makepayment = () => {
    const { product } = useLocation().state || {}

    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const img_url = "https://wangui-hsk.alwaysdata.net/static/images/"
    const navigate = useNavigate()

    const payment = async (e) => {
        e.preventDefault()
        setLoading("Processing payment...")
        try {
            const formdata = new FormData()
            formdata.append("phone", phone)
            formdata.append("amount", product.product_cost)

            const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/mpesa_payment", formdata)
            setSuccess(response.data.message)
            setLoading("")
            setPhone("")
        } catch (error) {
            setLoading("")
            setError("Payment failed. Please try again.")
        }
    }

    if (!product) {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 text-center">
                    <div className="card shadow-lg border-0 p-5">
                        <i className="bi bi-exclamation-triangle-fill text-warning display-1"></i>
                        <h3 className="mt-3">No Product Selected</h3>
                        <p className="text-muted">Please select a product to purchase</p>
                        <button onClick={() => navigate("/")} className="btn btn-success rounded-pill px-4 mx-auto">
                            <i className="bi bi-arrow-left me-2"></i> Go Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-fluid px-4" style={{ paddingTop: '80px' }}>
            <div className='row justify-content-center'>
                <div className="col-lg-10 col-xl-8">
                    <div className="card border-0 shadow-lg overflow-hidden">
                        <div className="row g-0">

                            {/* Product Image */}
                            <div className="col-md-6 bg-light d-flex align-items-center" style={{ minHeight: '400px' }}>
                                <div className="p-4 w-100">
                                    <img 
                                        src={img_url + product.product_photo} 
                                        alt={product.product_name}
                                        className='img-fluid rounded-3 shadow-sm'
                                        style={{ 
                                            maxHeight: '450px', 
                                            width: '100%', 
                                            objectFit: 'cover',
                                            borderRadius: '12px'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Payment Form */}
                            <div className="col-md-6 p-4 p-md-5">
                                <div className="d-flex justify-content-between align-items-start mb-4">
                                    <button 
                                        onClick={() => navigate("/")} 
                                        className="btn btn-outline-secondary btn-sm rounded-pill px-3"
                                    >
                                        <i className="bi bi-arrow-left me-1"></i> Back
                                    </button>
                                    <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                                        <i className="bi bi-shield-check me-1"></i> Secure Payment
                                    </span>
                                </div>

                                <h2 className="fw-bold mb-2">{product.product_name}</h2>
                                <p className="text-muted small">{product.product_description}</p>

                                <div className="d-flex align-items-baseline mb-4">
                                    <span className="display-4 fw-bold text-success">Kes {product.product_cost}</span>
                                    <span className="text-muted ms-2">
                                        <i className="bi bi-tag"></i>
                                    </span>
                                </div>

                                <div className="alert alert-info border-0 rounded-3 py-2 px-3 d-flex align-items-center gap-2">
                                    <i className="bi bi-info-circle-fill"></i>
                                    <small>You will receive a prompt on your phone to complete payment</small>
                                </div>

                                <form onSubmit={payment}>
                                    {loading && (
                                        <div className="alert alert-info border-0 d-flex align-items-center gap-2">
                                            <div className="spinner-border spinner-border-sm text-info" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                            {loading}
                                        </div>
                                    )}
                                    
                                    {success && (
                                        <div className="alert alert-success border-0 d-flex align-items-center gap-2">
                                            <i className="bi bi-check-circle-fill"></i>
                                            {success}
                                        </div>
                                    )}
                                    
                                    {error && (
                                        <div className="alert alert-danger border-0 d-flex align-items-center gap-2">
                                            <i className="bi bi-exclamation-circle-fill"></i>
                                            {error}
                                        </div>
                                    )}

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">
                                            <i className="bi bi-phone me-1"></i> M-Pesa Phone Number
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light border-0">
                                                <i className="bi bi-phone"></i>
                                            </span>
                                            <input 
                                                type="tel"
                                                placeholder="e.g., 0712345678"
                                                className="form-control form-control-lg border-0 shadow-sm"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                                style={{ background: '#f8f9fa' }}
                                            />
                                        </div>
                                        <small className="text-muted">Enter the M-Pesa registered number</small>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="btn btn-success btn-lg w-100 rounded-pill py-3 fw-bold shadow-sm hover-shadow"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-lock-fill me-2"></i>
                                                Pay Kes {product.product_cost}
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-muted small mt-3">
                                        <i className="bi bi-shield-lock-fill me-1"></i>
                                        Secured by M-Pesa
                                    </p>
                                </form>
                            </div>

                        </div>
                    </div>

                    {/* Security Badges */}
                    <div className="d-flex justify-content-center gap-4 mt-4">
                        <div className="d-flex align-items-center gap-2 text-muted small">
                            <i className="bi bi-check-circle-fill text-success"></i>
                            SSL Secure
                        </div>
                        <div className="d-flex align-items-center gap-2 text-muted small">
                            <i className="bi bi-check-circle-fill text-success"></i>
                            Encrypted
                        </div>
                        <div className="d-flex align-items-center gap-2 text-muted small">
                            <i className="bi bi-check-circle-fill text-success"></i>
                            Verified
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS */}
            <style jsx>{`
                .hover-shadow:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(40, 167, 69, 0.3) !important;
                }
                .form-control:focus {
                    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
                    border-color: #28a745;
                }
                .btn-outline-secondary:hover {
                    background: #f8f9fa;
                }
            `}</style>
        </div>
    )
}

export default Makepayment