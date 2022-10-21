import React from 'react'
import { client } from './lib/client'
import Product from './Product';
import { useState, useEffect } from "react";

export default function Featured() {
  const [products, setProducts] = useState(null);

useEffect(() => {
    const query = '*[_type == "product"]';
    client.fetch(
        query
    )
    .then((data) => setProducts(data))
    .catch(console.error);

}, []);

  return (
    <main>
        <div className='container-featured'>

            <div className='listing-header-container'>
            <div className='listings-header'>Feautured</div>
            </div>
            <div className='featured-row'>
                {products?.map((product) => <Product key={product._id} product={product} />)}
            </div>
            <div className='listing-header-container'>
            <div className='listings-header'>New Clothes</div>
            </div>
            <div className='featured-row'>
                <a className='product-a' id='product' href='#'>
                    <div className='featured-product-container'>
                        <div className='main-product-info'>
                            <img width='100%' height='100%' draggable='false' src='https://m.media-amazon.com/images/I/51NUzXxDTyL._AC_UX569_.jpg'></img>
                            <span className='title-tag'>Champion Men's Powerblend Fleece Pullover Hoodie</span>
                            <price-renderer>79.99</price-renderer>
                            <country-renderer data-location=''></country-renderer>
                            <div>
                                <div>
                                    <div>
                                        <real-tag className='real-tag' id='no-display'>Sweater</real-tag>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className='listing-header-container'>
            <div className='listings-header'>On sale!</div>
            </div>
            <div className='featured-row'>
                <a className='a-none' id='product' href='#'>
                    <div className='featured-product-container'>
                        <div className='main-product-info'>
                            <img width='100%' height='100%' draggable='false' src='https://cdn.discordapp.com/attachments/697629520240443482/1031599467260022864/unknown.png'></img>
                            <span>Shoe</span>
                            <price-renderer>500,000</price-renderer>
                            <country-renderer data-location=''></country-renderer>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </main>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products, bannerData }
    }
  }
  
