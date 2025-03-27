import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from '../styles/SingleProduct.module.css';


const SingleProduct = () => {
    const product = useSelector((state) => state.products.singleProduct);
    const { id } = useParams();
    const productSize = product[0].size ? product[0] : "";
    const [size, setSize] = useState(productSize);

    const productColor = product[0].color[0];
    const [color, setColor] = useState(productColor);
    console.log(color);


    return (
        <div>
            {product.filter((product) => product.id === id)
                .map((item, index) => {
                    return (
                        <div key={index} className={style.container}>
                            <div className={style["img-div"]}>
                                <img
                                    src={item.img}
                                    alt={item.name} />
                            </div>
                            <div className={style["info-con"]}>
                                <div className='max-w-lg'>
                                    <h5 id={style['item-name']} >
                                        {item.name}
                                    </h5>
                                    <p className={style.discount}>
                                        15% OFF
                                    </p>
                                    <p className={style['item-text']}>
                                        {item.text}
                                    </p>
                                    <div className={style['choice-div']}>
                                        {item.size ? (
                                            <div>
                                                <label
                                                    htmlFor="size"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    Sizes
                                                </label>
                                                <select
                                                    id='size'
                                                    value={size}
                                                    name='size'
                                                    onChange={(e) => setSize(e.target.value)}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                >
                                                    {item.size.map((item, index) => {
                                                        return (
                                                            <option value={item} key={index}>{item}</option>
                                                        )
                                                    })}

                                                </select>
                                            </div>

                                        ) : (
                                            <div>
                                                <label
                                                    htmlFor="size"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    Sizes
                                                </label>
                                                <select
                                                    id='size'
                                                    value={size}
                                                    disabled={true}
                                                    name='size'
                                                    onChange={(e) => setSize(e.target.value)}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                >
                                                    {item?.size?.map((item, index) => {
                                                        return (
                                                            <option value={item} key={index}>{item}</option>
                                                        )
                                                    })}

                                                </select>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="color"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Colors
                                        </label>
                                        <select
                                            id='color'
                                            value={color}
                                            name='color'
                                            onChange={(e) => setColor(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
                                            {item.color.map((color, index) => {
                                                return (
                                                    <option value={color} key={index}>{color}</option>
                                                )
                                            })}

                                        </select>
                                    </div>
                                    <div>
                                        <button className={style["add-btn"]}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div >
    )
}

export default SingleProduct
