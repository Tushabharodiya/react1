import React from 'react'

const Categories = () => {
    return (
        <>
            <div className="categories-data">
                <div className="cate-data">
                    <h2>Categories</h2>
                    <ul>
                        <li><a href="javascripr:void(0)">Fashionware (10)</a></li>
                        <li><a href="javascripr:void(0)">Kitchenware (5)</a></li>
                        <li><a href="javascripr:void(0)">Electronics (8)</a></li>
                        <li><a href="javascripr:void(0)">Accessories (4)</a></li>
                        <li><a href="javascripr:void(0)">Shoe (5)</a></li>
                        <li><a href="javascripr:void(0)">Toys (2)</a></li>
                    </ul>
                </div>
                <div className="cate-data price-data">
                    <h2 className="mt-3">price</h2>
                    <input type="range" class="form-range"></input>
                    <div className="price d-flex justify-content-between">
                        <span>Price: $477 - $1000</span>
                        <button>filter</button>
                    </div>
                </div>
                <div className="cate-data brand">
                    <h2 className="mt-3">brand</h2>
                    <ul>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> Studio (3)</a></li>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> Hastech (4)</a></li>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> Quickiin (15)</a></li>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> Graphic Corner (10)</a></li>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> DevItems (12)</a></li>
                    </ul>
                </div>
                <div className="cate-data brand">
                    <h2 className="mt-3">color</h2>
                    <ul>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> Black (20)</a></li>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" />Red (6)</a></li>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> Blue (8)</a></li>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> Green (5)</a></li>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> Pink (4)</a></li>
                    </ul>
                </div>
                <div className="cate-data brand">
                    <h2 className="mt-3">size</h2>
                    <ul>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> S (4)</a></li>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> M (5)</a></li>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> L (7)</a></li>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> XL (3)</a></li>
                        <li><a href="javascripr:void(0)"> <input type="checkbox" /> DevItems (12)</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Categories
