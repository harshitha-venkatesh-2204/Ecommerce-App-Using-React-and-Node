import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const productId = useParams();
    const productDetail = data.filter(x=>x.id==productId.id)
    const product = productDetail[0];
    console.log(product);

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={product.img} alt={product.title}></img>
                </div>
                <div className='col-md-6'>
                 <h1>{product.title}</h1>
                 <hr/>
                 <h2>{product.price}</h2>
                 <p>{product.desc}</p>
                 <button className='btn btn-outline-primary'>Add to Cart</button>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default ProductDetail
