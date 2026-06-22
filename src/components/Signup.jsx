import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const navigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Creating your account...")

        try {
            const formData = new FormData()
            formData.append("username", username)
            formData.append("email", email)
            formData.append("password", password)
            formData.append("phone", phone)

            const response = await axios.post("http://wangui-hsk.alwaysdata.net/api/signup", formData)

            setLoading("")
            setSuccess(response.data.success)
            
            // Clear form
            setUsername("")
            setEmail("")
            setPassword("")
            setPhone("")

            // Redirect after 2 seconds
            setTimeout(() => {
                navigate("/signin")
            }, 2000)

        } catch (error) {
            setLoading("")
            setError("Registration failed. Please try again.")
        }
    }

    return (
        <div className="container-fluid px-3 px-md-4" style={{ paddingTop: '80px' }}>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
                    <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                        {/* Header with Logo */}
                        <div className="bg-success p-3 p-md-4 text-center position-relative">
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                                background: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
                                pointerEvents: 'none'
                            }}></div>

                            <div className="d-flex justify-content-center mb-2 mb-md-3">
                                <img
                                    src="/malyanna_farm_icon.svg"
                                    alt="Malyanna Farm"
                                    className="shadow-lg"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        maxWidth: '80px',
                                        maxHeight: '80px',
                                        borderRadius: '50%',
                                        background: 'white',
                                        padding: '6px'
                                    }}
                                />
                            </div>

                            <h2 className="text-white fw-bold mb-0 h4 h-md-2">Create Account</h2>
                            <p className="text-white-50 mb-0 small">Join Malyanna Farm today</p>
                        </div>

                        {/* Form */}
                        <div className="p-3 p-md-4 p-lg-5">
                            {loading && (
                                <div className="alert alert-info border-0 d-flex align-items-center gap-2 py-2">
                                    <div className="spinner-border spinner-border-sm text-info" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    {loading}
                                </div>
                            )}

                            {success && (
                                <div className="alert alert-success border-0 d-flex align-items-center gap-2 py-2">
                                    <i className="bi bi-check-circle-fill"></i>
                                    {success}
                                    <i className="bi bi-arrow-right ms-auto"></i>
                                </div>
                            )}

                            {error && (
                                <div className="alert alert-danger border-0 d-flex align-items-center gap-2 py-2">
                                    <i className="bi bi-exclamation-circle-fill"></i>
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handlesubmit}>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold small">
                                        <i className="bi bi-person me-1"></i> Username
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-0">
                                            <i className="bi bi-person"></i>
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Choose a username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="form-control border-0 shadow-sm"
                                            style={{ background: '#f8f9fa' }}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold small">
                                        <i className="bi bi-envelope me-1"></i> Email Address
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-0">
                                            <i className="bi bi-envelope"></i>
                                        </span>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control border-0 shadow-sm"
                                            style={{ background: '#f8f9fa' }}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold small">
                                        <i className="bi bi-lock me-1"></i> Password
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-0">
                                            <i className="bi bi-lock"></i>
                                        </span>
                                        <input
                                            type="password"
                                            placeholder="Create a password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control border-0 shadow-sm"
                                            style={{ background: '#f8f9fa' }}
                                            required
                                            minLength="6"
                                        />
                                    </div>
                                    <small className="text-muted">Min. 6 characters</small>
                                </div>

                                <div className="mb-3 mb-md-4">
                                    <label className="form-label fw-semibold small">
                                        <i className="bi bi-phone me-1"></i> Phone Number
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-0">
                                            <i className="bi bi-phone"></i>
                                        </span>
                                        <input
                                            type="tel"
                                            placeholder="Enter phone number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="form-control border-0 shadow-sm"
                                            style={{ background: '#f8f9fa' }}
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-success w-100 rounded-pill py-2 py-md-3 fw-bold shadow-sm"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                            Creating...
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-person-plus me-2"></i>
                                            Create Account
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-muted mt-3 small">
                                    Already have an account?{' '}
                                    <Link to="/signin" className="text-success fw-bold text-decoration-none">
                                        Sign In
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup