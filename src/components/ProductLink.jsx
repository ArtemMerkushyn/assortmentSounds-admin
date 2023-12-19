import React from 'react';
import { Link } from 'react-router-dom';

export const ProductLink = ({ about }) => {
    if(!about) {
        return (
           <div>Дані відсутні</div>
        )
     }
    return (
        <div className='product-link'>
            <div className="product-link__img">
                <img src={about.imgUrl[0]} alt="img" />
            </div>
            <h4 className='title3'>{about.nameProduct}</h4>
            <div className="product-link-wrapper">
                <span>{about.price} грн</span>
                <Link className='link' to={`/vinils/${about._id}`}>Детальніше</Link>
            </div>
        </div>
    );
}
