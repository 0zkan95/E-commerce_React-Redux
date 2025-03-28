import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Cart.module.css';
import { CiSquareRemove } from "react-icons/ci";




const Cart = ({openModal, setOpen }) => {
    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    const handleOpen = () => {
        setOpen(!true)
    }

    return (
        <div className='bg-gray-300 rounded-2xl border-white-700 border-3 w-[600px] h-[500px] absolute left-[25%] top-[25%] z-10'>
            {cart.length > 0 ? 
           ( <dialog
                open={openModal}
                onChange={() => handleOpen(false)}  
                className={styles.dialog}
            >
                <h3 className='text-center border-b-2'>
                    Shopping Bag
                </h3>
                <section className={styles["card-list"]}>
                    
                    {cart.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='grid grid-cols-2 py-4'>
                                    <div>
                                        <img 
                                            src={item.img} 
                                            alt={item.name} 
                                            className='h-[75px]'    
                                        />
                                        <div className='flex flex-col items-start'>
                                            <h4 className='text-black text-base font-bold tracking-normal leading-none pt-2'>
                                                {item.name}
                                            </h4>
                                         </div>
                                        <div className='max-w-xs'>
                                            <p className='text-black text-xs tracking-normal leading-none'>
                                                {item.text}
                                            </p>
                                            
                                        </div>
                                    </div>
                                    <div >
                                        <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'>
                                            Selected size: {" "}
                                            <span className='ml-2'>{item.size}</span>
                                        </p>
                                        <p className='text-black flex items-center justify-start text-sm font-inter tracking-normal leading-none pt-2'>
                                            Selected color: {"  "} 
                                            <span  
                                                className="rounded-full w-4 h-4 inline-block" 
                                                style={{backgroundColor: item.color}}
                                            ></span>
                                        </p>
                                        <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'>
                                            Amount: {" "}
                                            <span className='ml-2'>{item.amount}</span>
                                        </p>
                                        <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'>
                                            Price: {" "}
                                            <span className='ml-2'>$ {item.price}</span>
                                        </p>
                                        <button>< CiSquareRemove  color="red" size={30} /></button>
                                    </div>
                                </div>
                            </div>
                            )
                    })}
                </section>
                <footer className={styles.footer}>
                    <p>Total Price: $ {totalPrice} </p>
                    <button className={styles["order-btn"]}>Order</button>
                </footer>
            </dialog>)
            :
            ( <dialog
                open={openModal}
                onChange={() => handleOpen()}  
                className={styles.dialog}
            >
                <h3 className='text-center border-b-2'>Shopping Bag</h3>
                <section className={styles["sec-con"]}>
                    <div>
                        <h1 className={styles['bag-header']}>
                            Your bag is empty
                        </h1>
                        <p className='text-black text-base font-inter font-bold tracking-normal leading-none'>
                            Add some products
                        </p>
                    </div>
                </section>
                <footer>

                </footer>
            </dialog> )

        }
        </div>
    )
}

export default Cart
