import React from 'react'

let Item = (props) => {
    return (
        <>
            <div className="item-data">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="ring-data">
                            <div className="item-img">
                                <img src={props.img} alt="item image" />
                            </div>
                            <div className="ring-img d-flex justify-content-between my-3">
                                <img src="https://htmldemo.net/corano/corano/assets/img/product/product-details-img4.jpg" alt="ring image" />
                                <img src="https://htmldemo.net/corano/corano/assets/img/product/product-details-img5.jpg" alt="ring image" />
                                <img src="https://htmldemo.net/corano/corano/assets/img/product/product-details-img1.jpg" alt="ring image" />
                                <img src="https://htmldemo.net/corano/corano/assets/img/product/product-details-img2.jpg" alt="ring image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="gold-data">
                            <a href="javascript:voidd(0)">HasTech</a>
                            <h2 className="mb-0">{props.title}</h2>
                            <div className="star">
                                <span>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star me-2"></i>1 Reviews
                                </span>
                            </div>
                            <h5 className="mb-0 ">{props.price} <span className="ps-2"> $90.00</span></h5>
                            <h6>Hurry up! <span>offer ends in</span>:</h6>
                            <div className="round d-flex">
                                <div className="day">
                                    <span>00</span>
                                    <p className='mb-0'>days</p>
                                </div>
                                <div className="day">
                                    <span>00</span>
                                    <p className='mb-0'>hours</p>
                                </div>
                                <div className="day">
                                    <span>00</span>
                                    <p className='mb-0'>mins</p>
                                </div>
                                <div className="day">
                                    <span>00</span>
                                    <p className='mb-0'>secs</p>
                                </div>
                            </div>
                            <span className="mb-3 d-inline-block stock"> 200 IN STOCK</span>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst.</p>
                            <button>add to cart</button>
                            <div className="size">size:
                                <select>
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                </select>
                            </div>
                            <div className="box d-flex align-items-center">
                                <span className="me-2">Color: </span>
                                <div className="circle"></div>
                                <div className="circle gray"></div>
                                <div className="circle bule"></div>
                                <div className="circle orange"></div>
                            </div>
                            <div className="compare">
                                <span><i class="fa-solid fa-rotate pe-2"></i>Compare</span>
                                <span><i class="fa-regular fa-heart pe-2"></i>Wishlist</span>
                            </div>
                            <div className="like-icon">
                                <span><i class="fa-brands fa-facebook-f pe-1"></i>like</span>
                                <span className='tweet'><i class="fa-brands fa-twitter pe-1"></i>tweet</span>
                                <span className='save'><i class="fa-brands fa-pinterest pe-1"></i>save</span>
                                <span className='share'><i class="fa-brands fa-google-plus-g pe-1"></i>share</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="view-btn">
                                <button>Description</button>
                                <button className='active'>information</button>
                                <button className='active'>reviews (1)</button>
                            </div>
                            <div className="view-data">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item
