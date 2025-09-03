import React from 'react';
export default function Products({ product, addToCart }) {
    return (
        <div className='flex'>{
            product.map((productitem, productIndex) => {
                return (
                    <div>
                        <img src={productitem.url} width="20%" alt="" />
                        <p>{productitem.name}</p>
                        <p>Rs.{productitem.price}</p>
                        <button onClick={() => addToCart(productitem)}>Add Cart</button>
                    </div>
                )
            })
        }
        </div>
    )
}
