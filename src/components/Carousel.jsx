import React from 'react'

const Carousel = () => {
    return (
        <div 
            id='carouselExample' 
            className='carousel slide row justify-content-center carousel-fade shadow-lg rounded-4 overflow-hidden' 
            data-bs-ride='carousel' 
            style={{ 
                maxWidth: '1400px', 
                margin: '80px auto 0 auto',  // Added top margin to account for navbar
                paddingTop: '10px'
            }}
        >
            {/* indicators for navigation */}
            <div className='carousel-indicators'>
                <button type='button' data-bs-target='#carouselExample' data-bs-slide-to="0" className='active' aria-current="true" aria-label='Slide 1'>
                    <span className="indicator-dot"></span>
                </button>
                <button type='button' data-bs-target='#carouselExample' data-bs-slide-to="1" aria-label='Slide 2'>
                    <span className="indicator-dot"></span>
                </button>
                <button type='button' data-bs-target='#carouselExample' data-bs-slide-to="2" aria-label='Slide 3'>
                    <span className="indicator-dot"></span>
                </button>
            </div>

            {/* slides */}
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src={"images/Ofarm.jpeg"} className='d-block w-100 carousel-img' alt="Farm" style={{ height: '600px', objectFit: 'cover' }} />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-4 rounded-3" style={{ bottom: '80px' }}>
                        <h3 className="fw-bold">Fresh From Our Farm</h3>
                        <p>Quality produce delivered to your doorstep</p>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src={"images/farmer.jpeg"} className='d-block w-100 carousel-img' alt="Farmer" style={{ height: '600px', objectFit: 'cover' }} />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-4 rounded-3" style={{ bottom: '80px' }}>
                        <h3 className="fw-bold">Meet Our Farmers</h3>
                        <p>Dedicated to sustainable farming practices</p>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src={"images/market.jpeg"} className='d-block w-100 carousel-img' alt="Market" style={{ height: '600px', objectFit: 'cover' }} />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-4 rounded-3" style={{ bottom: '80px' }}>
                        <h3 className="fw-bold">Fresh Market</h3>
                        <p>Connecting farmers directly to consumers</p>
                    </div>
                </div>
            </div>

            {/* controls */}
            <button className='carousel-control-prev' type='button' data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target="#carouselExample" data-bs-slide="next">
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel