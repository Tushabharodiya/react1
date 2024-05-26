import React from 'react'

const Blog = ({img,title}) => {
  return (
    <div>
      <>
        <div className="blog-data">
            <div className="blog-img">
                <img src={img} alt="blog image" />
            </div>
            <div className="blog-data">
                <p className='mb-0' >25/03/2019 |  <span>corano</span></p>
                <h2>{title}</h2>
            </div>
        </div>
      </>
    </div>
  )
}

export default Blog
