import React from 'react'

const Support = ({icon,title,sub}) => {
    return (
        <div>
            <>
                <div className="support-data d-flex">
                    <div className="sop-icon">
                        <span>{icon}</span>
                    </div>
                    <div className="sop-data">
                        <h6 className="mb-0">{title}</h6>
                        <p className="mb-0">{sub}</p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Support
