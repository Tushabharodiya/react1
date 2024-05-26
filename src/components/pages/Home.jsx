import React from 'react'
import Button from '../Button'
import Support from '../Support'
import Jewelry from '../Jewelry'
import Heading from '../Heading'
import Product from '../Product'
import About from '../About'
import Seller from '../Seller'
import { Link } from 'react-router-dom'
import Blog from '../Blog'

const Home = () => {

    let support = [
        {
            policy: <i class="fa-solid fa-plane-departure"></i>,
            title: "Free Shipping",
            sub: "Free shipping all order",
        },
        {
            policy: <i class="fa-solid fa-life-ring"></i>,
            title: "Support 24/7",
            sub: "Support 24 hours a day",
        },
        {
            policy: <i class="fa-regular fa-circle-left"></i>,
            title: "Money Return",
            sub: "30 days for free return",
        },
        {
            policy: <i class="fa-regular fa-credit-card"></i>,
            title: "100% Payment Secure",
            sub: "We ensure secure payment",
        },
    ]

    let jewelry = [
        {
            image: "https://htmldemo.net/corano/corano/assets/img/banner/img1-top.jpg",
            name: "beautiful",
            title: "Wedding",
            sub: "Rings",
        },
        {
            image: "https://htmldemo.net/corano/corano/assets/img/banner/img2-top.jpg",
            name: "earrings",
            title: "Tangerine Floral ",
            sub: "Earring",
        },
        {
            image: "https://htmldemo.net/corano/corano/assets/img/banner/img3-top.jpg",
            name: "new arrivalls",
            title: "Pearl",
            sub: "Necklaces",
        },
        {
            image: "https://htmldemo.net/corano/corano/assets/img/banner/img4-top.jpg",
            name: "new desing",
            title: "Diamond",
            sub: "Jewelry",
        },
    ]

    let product = [
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-2.jpg",
            name: "sliver",
            title: "Perfect Diamond Jewelry",
            price: "$60.00",
            discount: "$90.00",
            data: "scle",
            dis: "new",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-4.jpg",
            name: "diamond",
            title: "Diamond Exclusive Ornament",
            price: "$70.00",
            discount: "$90.00",
            data: "new",
            dis: "15 %",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-1.jpg",
            name: "gold",
            title: "Citygold Exclusive Ring",
            price: "$70.00",
            discount: "$80.00",
            data: "scle",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-5.jpg",
            name: "mony",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            discount: "$60.00",
            data: "new",
            dis: "20 %",
        },
    ]

    let about = [
        {
            img: "https://htmldemo.net/corano/corano/assets/img/banner/img1-middle.jpg",
            title: "BRACELATES",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/banner/img4-middle.jpg",
            title: "rings",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/banner/img3-middle.jpg",
            title: "pearls",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/banner/img5-middle.jpg",
            title: "necjlaces",
        },
    ]

    let feature = [
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-2.jpg",
            name: "sliver",
            title: "Perfect Diamond Jewelry",
            price: "$60.00",
            discount: "$90.00",
            data: "scle",
            dis: "new",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-4.jpg",
            name: "diamond",
            title: "Diamond Exclusive Ornament",
            price: "$70.00",
            discount: "$90.00",
            data: "new",
            dis: "15 %",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-1.jpg",
            name: "gold",
            title: "Citygold Exclusive Ring",
            price: "$70.00",
            discount: "$80.00",
            data: "scle",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-5.jpg",
            name: "mony",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            discount: "$60.00",
            data: "new",
            dis: "20 %",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-5.jpg",
            name: "sliver",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            data: "new",
            dis: "15 %",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-6.jpg",
            name: "mony",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            data: "new",
            dis: "20 %",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-7.jpg",
            name: "diamond",
            title: "Handmade Golden Necklace",
            price: "$70.00",
            data: "new",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-8.jpg",
            name: "mony",
            title: "Handmade Golden Necklace",
            price: "$80.00",
            data: "new",
            dis: "20 %",
        },
    ]

    let seller = [
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-5.jpg",
            name: "sliver",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            data: "new",
            dis: "15 %",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-6.jpg",
            name: "mony",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            data: "new",
            dis: "20 %",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-7.jpg",
            name: "diamond",
            title: "Handmade Golden Necklace",
            price: "$70.00",
            data: "new",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-8.jpg",
            name: "mony",
            title: "Handmade Golden Necklace",
            price: "$80.00",
            data: "new",
            dis: "20 %",
        },
    ]

    let blog = [
        {
            img: "https://htmldemo.net/corano/corano/assets/img/blog/blog-img2.jpg",
            title: "Lotto Winner Offering Up Money To Any Man That Will Date Her",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/blog/blog-img5.jpg",
            title: "Children Left Home Alone For 4 Days In TV series Experiment",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/blog/blog-img1.jpg",
            title: "Celebrity Daughter Opens Up About Having Her Eye Color Changed",
        },
    ]

    let brand=[
        {
            logo:"https://htmldemo.net/corano/corano/assets/img/brand/1.png",
        },
        {
            logo:"https://htmldemo.net/corano/corano/assets/img/brand/1.png",
        },
        {
            logo:"https://htmldemo.net/corano/corano/assets/img/brand/3.png",
        },
        {
            logo:"https://htmldemo.net/corano/corano/assets/img/brand/4.png",
        },
        {
            logo:"https://htmldemo.net/corano/corano/assets/img/brand/5.png",
        },
    ]

    return (
        <div>
            <>
                {/* banner */}
                <section className="banner d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-data">
                                    <h1>Family Jewelry <br /> Collection</h1>
                                    <p className="fs-5">Designer Jewelry Necklaces-Bracelets-Earings</p>
                                    <Button />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* support */}
                <section className="support">
                    <div className="container">
                        <div className="row">
                            {
                                support.map((val) => {
                                    return (
                                        <div className="col-lg-3">
                                            <Support icon={val.policy} title={val.title} sub={val.sub} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                {/* jewelry */}
                <section className="jewelry">
                    <div className="container">
                        <div className="row">
                            {
                                jewelry.map((val) => {
                                    return (
                                        <div className="col-lg-6">
                                            <Jewelry image={val.image} name={val.name} title={val.title} sub={val.sub} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                {/* product */}
                <section className="product">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <Heading title={"Our Products"} data={"Add our products to weekly lineup"} />
                                <a href="javascript:void(0)" className='enterment d-inline-block'>Entertainment</a>
                            </div>
                            {
                                product.map((val) => {
                                    return (
                                        <div className="col-lg-3">
                                            <Product img={val.img} name={val.name} title={val.title} price={val.price} discount={val.discount} data={val.data} dis={val.dis} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                {/* about */}
                <section className="about">
                    <div className="row">
                        {
                            about.map((val) => {
                                return (
                                    <div className="col-lg-3">
                                        <About img={val.img} title={val.title} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>

                {/* feature */}
                <section className="feature">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Heading title={"Featured Products"} data={"Add featured products to weekly lineup"} />
                            </div>
                            {
                                feature.map((val) => {
                                    return (
                                        <div className="col-lg-3">
                                            <Product img={val.img} name={val.name} title={val.title} price={val.price} discount={val.discount} data={val.data} dis={val.dis} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                {/* testimonial */}
                <section className="tesimonials">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Heading title={"testimonials"} data={"What they say"} />
                            </div>
                            <div className="col-lg-12 ">
                                <div className="test-data text-center">
                                    <div className="test-img d-flex justify-content-center align-items-center">
                                        <img src="https://htmldemo.net/corano/corano/assets/img/testimonial/testimonial-2.png" alt="test image" />
                                        <img src="https://htmldemo.net/corano/corano/assets/img/testimonial/testimonial-1.png" className="girl" alt="test image" />
                                        <img src="https://htmldemo.net/corano/corano/assets/img/testimonial/testimonial-2.png" alt="test image" />
                                    </div>
                                    <p>Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque</p>
                                    <div className="star">
                                        <span>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                        </span>
                                    </div>
                                    <h2 className="mb-0 mt-1">lindsy niloms</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* seller */}
                <section className="seller">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="seller-data position-relative">
                                    <div className="seller-img">
                                        <img src="https://htmldemo.net/corano/corano/assets/img/banner/img-bottom-banner.jpg" alt="seller image" />
                                    </div>
                                    <div className="seller-info text-center position-absolute">
                                        <span className='d-inline-block'>BEAUTIFUL</span>
                                        <h2 className='mb-0 '>Wedding Rings</h2>
                                        <Link to={"/shope"} href="javascript:void(0)">shop now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="sel-data">
                                            <h2>Best Seller Product</h2>
                                            {
                                                product.map((val) => {
                                                    return (
                                                        <Seller img={val.img} title={val.title} price={val.price} discount={val.discount} />
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sel-data">
                                            <h2>On sale Product</h2>
                                            {
                                                seller.map((val) => {
                                                    return (
                                                        <Seller img={val.img} title={val.title} price={val.price} discount={val.discount} />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* blog */}
                <section className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Heading title={"Latest Blogs"} data={"There are latest blog posts"} />
                            </div>

                            {
                                blog.map((val) => {
                                    return (
                                        <div className="col-lg-4">
                                            <Blog img={val.img} title={val.title} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                {/* brand */}
                <section className="brand-logo">
                    <div className="container">
                        <div className="brand-data">
                            <div className="brand-img">
                                {
                                    brand.map((val)=>{
                                        return(
                                            <img src={val.logo} alt="brand image" />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>

                {/* footer */}
                
            </>
        </div>
    )
}


export default Home
