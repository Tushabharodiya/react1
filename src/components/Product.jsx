import React from 'react'

let Product = ({ img, name, title, price,discount, data, dis }) => {
    return (
        <>
            <div className="product-card">
                <div className="product-img">
                    <img src={img} alt="product image" />
                </div>
                <div className="product-data">
                    <span>{name}</span>
                    <div className="box d-flex justify-content-center">
                        <div className="circle"></div>
                        <div className="circle gray"></div>
                        <div className="circle bule"></div>
                        <div className="circle orange"></div>
                    </div>
                    <h2 className="mb-2">{title}</h2>
                    <p>{price} <span className='ps-2'>{discount}</span> </p>
                </div>
                <div className="new position-absolute">
                    <span className="d-block">{data}</span>
                    <span className="d-block dis">{dis}</span>
                </div>
            </div>
        </>
    )
}

export default Product
