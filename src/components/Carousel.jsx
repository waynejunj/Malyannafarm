import React from 'react'

const Carousel = () => {
    return (
        <div
            id='carouselExample'
            className='carousel slide carousel-fade shadow-lg rounded-4 overflow-hidden mx-2 mx-md-4'
            data-bs-ride='carousel'
            style={{
                maxWidth: '1400px',
                margin: '80px auto 0 auto',
            }}
        >
            <div className='carousel-indicators'>
                <button type='button' data-bs-target='#carouselExample' data-bs-slide-to="0" className='active' aria-current="true" aria-label='Slide 1' />
                <button type='button' data-bs-target='#carouselExample' data-bs-slide-to="1" aria-label='Slide 2' />
                <button type='button' data-bs-target='#carouselExample' data-bs-slide-to="2" aria-label='Slide 3' />
            </div>

            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src="https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?w=1200" className='d-block w-100' alt="Farm" style={{ height: 'clamp(250px, 50vw, 600px)', objectFit: 'cover' }} />
                    <div className="carousel-caption d-block px-3 pb-4">
                        <h3 className="fw-bold h5 h-md-3">Fresh From Our Farm</h3>
                        <p className="d-none d-md-block">Quality produce delivered to your doorstep</p>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src="https://images.pexels.com/photos/325082/pexels-photo-325082.jpeg?w=1200" className='d-block w-100' alt="Farmer" style={{ height: 'clamp(250px, 50vw, 600px)', objectFit: 'cover' }} />
                    <div className="carousel-caption d-block px-3 pb-4">
                        <h3 className="fw-bold h5 h-md-3">Meet Our Farmers</h3>
                        <p className="d-none d-md-block">Dedicated to sustainable farming practices</p>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?w=1200" className='d-block w-100' alt="Market" style={{ height: 'clamp(250px, 50vw, 600px)', objectFit: 'cover' }} />
                    <div className="carousel-caption d-block px-3 pb-4">
                        <h3 className="fw-bold h5 h-md-3">Fresh Market</h3>
                        <p className="d-none d-md-block">Connecting farmers directly to consumers</p>
                    </div>
                </div>
            </div>

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