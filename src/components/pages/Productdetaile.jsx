import React from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item';
import Heading from '../Heading';
import Product from '../Product';

const Productdetaile = () => {
    let { id } = useParams()
    console.log(id);

    let product = [
        {
            id: 1,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-1.jpg",
            name: "sliver",
            title: "Perfect Diamond Jewelry",
            price: "$60.00",
            data: "scle",
            dis: "new",
        },
        {
            id: 2,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-2.jpg",
            name: "diamond",
            title: "Diamond Exclusive Ornament",
            price: "$90.00",
            data: "new",
            dis: "15 %",
        },
        {
            id: 3,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-3.jpg",
            name: "gold",
            title: "Citygold Exclusive Ring",
            price: "$70.00",
            data: "scle",
        },
        {
            id: 4,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-4.jpg",
            name: "Quickiin",
            title: "Diamond Exclusive Ornament",
            price: "$60.00",
            data: "new",
            dis: "10 %",
        },
        {
            id: 5,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-5.jpg",
            name: "sliver",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            data: "new",
            dis: "15 %",
        },
        {
            id: 6,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-6.jpg",
            name: "mony",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            data: "new",
            dis: "20 %",
        },
        {
            id: 7,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-7.jpg",
            name: "diamond",
            title: "Handmade Golden Necklace",
            price: "$70.00",
            data: "new",
        },
        {
            id: 8,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-8.jpg",
            name: "mony",
            title: "Handmade Golden Necklace",
            price: "$80.00",
            data: "new",
            dis: "20 %",
        },
        {
            id: 9,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-9.jpg",
            name: "sliver",
            title: "Handmade Golden Necklace",
            price: "$90.00",
            data: "new",
            dis: "15 %",
        },
        {
            id: 10,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-10.jpg",
            name: "mony",
            title: "Handmade Golden Necklace",
            price: "$40.00",
            data: "new",
            dis: "20 %",
        },
        {
            id: 11,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-11.jpg",
            name: "sliver",
            title: "Handmade Golden Necklace",
            price: "$60.00",
            data: "new",
        },
        {
            id: 12,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-12.jpg",
            name: "sliver",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            data: "new",
            dis: "20 %",
        },
        {
            id: 13,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-13.jpg",
            name: "mony",
            title: "Handmade Golden Necklace",
            price: "$70.00",
            data: "new",
            dis: "15 %",
        },
        {
            id: 14,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-14.jpg",
            name: "sliver",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            data: "new",
            dis: "20 %",
        },
        {
            id: 15,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-15.jpg",
            name: "diamond",
            title: "Handmade Golden Necklace",
            price: "$80.00",
            data: "new",
        },
        {
            id: 16,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-16.jpg",
            name: "mony",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            data: "new",
            dis: "15 %",
        },
        {
            id: 17,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-17.jpg",
            name: "sliver",
            title: "Handmade Golden Necklace",
            price: "$8  0.00",
            data: "new",
            dis: "30 %",
        },
        {
            id: 18,
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-18.jpg",
            name: "diamond",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            data: "new",
        },
    ]

    let related = [
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-14.jpg",
            name: "sliver",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            data: "new",
            dis: "20 %",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-15.jpg",
            name: "diamond",
            title: "Handmade Golden Necklace",
            price: "$80.00",
            data: "new",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-16.jpg",
            name: "mony",
            title: "Handmade Golden Necklace",
            price: "$50.00",
            data: "new",
            dis: "15 %",
        },
        {
            img: "https://htmldemo.net/corano/corano/assets/img/product/product-17.jpg",
            name: "sliver",
            title: "Handmade Golden Necklace",
            price: "$8  0.00",
            data: "new",
            dis: "30 %",
        },
    ]

    let result = product.filter((val) => val.id == id)
    console.log(result);

    return (
        <>
            <div className="shop">
                <div className="container">
                    <span><i class="fa-solid fa-house-chimney pe-2"></i> / Product Deatails</span>
                </div>
            </div>

            {/* item */}
            <section className="item">
                <div className="container">
                    <Item img={result[0].img} name={result[0].name} title={result[0].title} price={result[0].price} data={result[0].data} dis={result[0].dis} />
                </div>
            </section>

            {/* related */}
            <section className="related">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <Heading title={"Related Products"} data={"Add related products to weekly lineup"} />
                        </div>
                        {
                            related.map((val) => {
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
        </>
    )
}

export default Productdetaile
