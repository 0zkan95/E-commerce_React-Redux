import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from '../styles/SingleProduct.module.css';
import { addToCart } from '../features/cartSlice';
import Button from './Button';
import Card from './Card';
import Navbar from './Navbar';
import CategoryButtons from './CategoryButtons';
import Footer from './Footer';

const SingleProduct = () => {
    const product = useSelector((state) => state.products.singleProduct);
    const { id } = useParams();
    const productSize = product[0]?.size ? product[0] : "";
    const [size, setSize] = useState(productSize);

    const productColor = product[0]?.color?.[0];
    const [color, setColor] = useState(productColor);

    const dispatch = useDispatch();

    return (
        <>
            <Navbar />
            <CategoryButtons />
            <div className="max-w-7xl mx-auto px-4 py-8">
                {product.filter((product) => product.id === id)
                    .map((item, index) => {
                        return (
                            <div key={index} className="flex items-center justify-center gap-4">
                                <div className="w-1/2 max-w-md">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-auto object-contain rounded-lg"
                                    />
                                </div>
                                <Card className="w-[35rem] p-6 opacity-100">
                                    <div className='max-w-lg mx-auto'>
                                        <h5 className="text-2xl font-bold mb-4">
                                            {item.name}
                                        </h5>
                                        <p className="text-green-600 text-xl font-bold mb-4">
                                            15% OFF 
                                        </p>
                                        <p className="text-gray-600 text-md font-bold mb-4">
                                            {item.text}
                                        </p>
                                        <div className="mb-4">
                                            {item.size ? (
                                                <div>
                                                    <label
                                                        htmlFor="size"
                                                        className="block mb-2 text-sm font-medium"
                                                    >
                                                        Sizes:
                                                    </label>
                                                    <select
                                                        id='size'
                                                        value={size}
                                                        name='size'
                                                        onChange={(e) => setSize(e.target.value)}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                                                        className="block mb-2 text-sm font-medium"
                                                    > 
                                                        Sizes:
                                                    </label>
                                                    <select
                                                        id='size'
                                                        value={size}
                                                        disabled={true}
                                                        name='size'
                                                        onChange={(e) => setSize(e.target.value)}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

                                        <div className="mb-4">
                                            <label
                                                htmlFor="color"
                                                className="block mb-2 text-sm font-medium"> Colors:
                                            </label>
                                            <select
                                                id='color'
                                                value={color}
                                                name='color'
                                                onChange={(e) => setColor(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            >
                                                {item.color.map((color, index) => {
                                                    return (
                                                        <option value={color} key={index}>{color}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    
                                        <div className="mt-4">
                                            <Button
                                                onClick={() => dispatch(addToCart({
                                                    id: item.id,
                                                    name: item.name,
                                                    size: size,
                                                    img: item.img,
                                                    text: item.text,
                                                    color: color,
                                                    price: item.price,
                                                    amount: 1,
                                                    totalPrice: item.price,
                                                }))}
                                            >
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )
                    })}
            </div>
            <Footer />
        </>
    )
}

export default SingleProduct
