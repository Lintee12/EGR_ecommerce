import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { client, urlFor } from '../lib/client'
import MetaTags from 'react-meta-tags';

export default function ProductDetails() {
  const [productData, setProductData] = useState(null);
  const { slug } = useParams();
useEffect(() => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    client.fetch(
      `*[slug.current == $slug]{
        name,
        slug,
        details,
        image,
        price,
     }`,
      { slug }
    )
    .then((data) => setProductData(data[0]))
    .catch(console.error);
}, [slug]); 

if (!productData) return <div>Loading...</div>;

return (
  
  <main>
    <div id='no-display' className='meta' data-title={productData.name}></div>
    <div className='product-page-container'>
      <div className='product-page-col'>
        <span className='product-page-title'>{productData.name}</span>
        <span className='product-page-details'>{productData.details}</span>
        <span className='product-page-price'>{productData.price}</span>
        <img className='product-page-image' width='500px' height='500px' src={urlFor(productData.image[0])} />
      </div>
    </div>
    <MetaTags>
      <title>EGR | {productData.name}</title>
      <meta name="description" content={productData.details}></meta>
      <meta name="og:title" content={productData.name} />
      <meta name="og:description" content={productData.details} />
      <meta property="twitter:card" content={urlFor(productData.image[0])} />
      <meta property="twitter:url" content={window.location.href}/>
      <meta property="twitter:title" content={productData.name} />
      <meta property="twitter:description" content={productData.details} />
    </MetaTags>
  </main>
  
)
}


