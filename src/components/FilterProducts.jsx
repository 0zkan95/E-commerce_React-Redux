import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/FilterProducts.module.css';
import { useDispatch } from 'react-redux';
import { singleProduct } from '../features/productsSlice';



const FilterProducts = () => {
    const products = useSelector((state) => state.products.filteredProducts);
    const type = useParams();
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div className={styles.header}>
                    <h1 className=' font-inter'>
                        {type.type}
                    </h1>
                </div>
                <div id={styles.container} className='grid grid-cols-4 justify-center items-center gap-12 py-8'>
                    {products.filter((product) => product.type === type.type).map((product, index) => {
                        return (
                            <Link to={`/filteredProducts/${type}/` + product.id } key={index}>
                                <div key={index} onClick={() => dispatch(singleProduct(product.id))}>
                                    <div className={styles['cards-header']}>
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className={styles['cards-body']}>
                                        <h4> {product.name} </h4>
                                        <p> {product.text} </p>
                                    </div>
                                    <div className={styles["cards-footer"]}>
                                        <h6>$ {product.price}</h6>
                                        <p className={styles.colors}>
                                            {product.color?.map((color, index) => {

                                                return (

                                                    <i
                                                        key={index}
                                                        style={{ backgroundColor: color }}
                                                    >
                                                    </i>
                                                )
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FilterProducts
