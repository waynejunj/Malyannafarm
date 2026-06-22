import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Signin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Signing in...")

        try {
            const formdata = new FormData()
            formdata.append("email", email)
            formdata.append("password", password)

            const response = await axios.post("http://wangui-hsk.alwaysdata.net/api/signin", formdata)

            setLoading("")

            if (response.data.success === "Welcome") {
                localStorage.setItem("user", JSON.stringify(response.data.user))
                navigate("/")
            } else {
                setError("Invalid email or password")
            }
        } catch (error) {
            setLoading("")
            setError("Connection error. Please try again.")
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
                                background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
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

                            <h2 className="text-white fw-bold mb-0 h4 h-md-2">Welcome Back</h2>
                            <p className="text-white-50 mb-0 small">Sign in to your account</p>
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

                            {error && (
                                <div className="alert alert-danger border-0 d-flex align-items-center gap-2 py-2">
                                    <i className="bi bi-exclamation-circle-fill"></i>
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handlesubmit}>
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

                                <div className="mb-3 mb-md-4">
                                    <div className="d-flex justify-content-between">
                                        <label className="form-label fw-semibold small">
                                            <i className="bi bi-lock me-1"></i> Password
                                        </label>
                                        <button type="button" className="btn btn-link text-success text-decoration-none small p-0">Forgot?</button>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-0">
                                            <i className="bi bi-lock"></i>
                                        </span>
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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
                                            Signing in...
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-box-arrow-in-right me-2"></i>
                                            Sign In
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-muted mt-3 small">
                                    Don't have an account?{' '}
                                    <Link to="/signup" className="text-success fw-bold text-decoration-none">
                                        Register Here
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

export default Signin