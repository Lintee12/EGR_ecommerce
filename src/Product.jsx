import React from 'react'
import { Link } from 'react-router-dom';

import { urlFor } from './lib/client'
import SLUG from './pages/Slug'

export default function Product({ product: { image, name, slug, price, tags }}) {
  return (
    <Link className='product-a' id='product' to={`/${slug.current}`}>
        <div className='featured-product-container'>
            <div className='main-product-info'>
                <img width='100%' height='100%' draggable='false' src={urlFor(image && image[0])}></img>
                <span className='title-tag'>{name}</span>
                <price-renderer>{price}</price-renderer>
                <country-renderer data-location=''></country-renderer>
                <div>
                    <div>
                        <div>
                            <real-tag class='real-tag' id='no-display'>{tags}</real-tag>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}
