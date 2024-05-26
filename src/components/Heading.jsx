import React from 'react'

const Heading = ({ title, data }) => {
    return (
        <div>
            <>
                <div className="head-data">
                    <h2 className="mb-0">{title}</h2>
                    <p className="mb-0">{data}</p>
                </div>
            </>
        </div>
    )
}

export default Heading;
