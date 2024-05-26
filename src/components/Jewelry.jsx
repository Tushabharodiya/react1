import React from 'react'
import { Link } from 'react-router-dom'

const Jewelry = (props) => {
    return (
        <div>
            <>
                <div className="jewelry-card">
                    <div className="card-img">
                        <img src={props.image} alt="card image" />
                    </div>
                    <div className="card-data ">
                        <h5 className="mb-0">{props.name}</h5>
                        <h2 className="mb-0">{props.title} <span className="d-block">{props.sub}</span></h2>
                        <Link to={"/shope"} href="javascript:void(0)">shop Now</Link>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Jewelry
