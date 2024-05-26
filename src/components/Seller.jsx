import React from 'react'

const Seller = (props) => {
    return (
        <div>
            <>
                <div className="best-seller pe-3 mb-3">
                    
                    <div className="ring d-flex">
                        <div className="ring-img">
                            <img src={props.img} alt="ring image" />
                        </div>
                        <div className="ring-data">
                            <h5 className='mb-0'><a href="javascript:void(0)">{props.title}</a></h5>
                            <p className='mb-0'>{props.price} <span className='ps-1'>{props.discount}</span></p>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Seller
