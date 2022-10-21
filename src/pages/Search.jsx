import React from 'react'
import { useEffect, useState } from 'react';

const $ = (className, index) => {
    return document.getElementsByClassName(className)[index];
}

function querey() {
    var searchQuerey = localStorage.getItem('searchedFor')
    for (let i = 0; i < document.querySelectorAll('real-tag').length; i++) {
        console.log(document.getElementsByClassName('real-tag')[i].innerHTML.toLowerCase())
        if (document.getElementsByClassName('real-tag')[i].innerHTML.toLowerCase().indexOf(searchQuerey.toLowerCase()) !== -1) {
            document.getElementsByClassName('product-a')[i].style.display = 'block';
        }
        else if (document.getElementsByClassName('title-tag')[i].innerHTML.toLowerCase().indexOf(searchQuerey.toLowerCase()) !== -1) {
            document.getElementsByClassName('product-a')[i].style.display = 'block';
        }
        else {
            document.getElementsByClassName('product-a')[i].style.display = 'none';
        }
        
    }
}

export default function Search() {
useEffect(() => {
    querey();
})

  return (
    <>
    <div className='listing-header-container'>
        <div className='listings-header' id='searched-for' style={{fontWeight: '500'}}>
            Results for <span style={{fontWeight: 'normal'}}>"{localStorage.getItem('searchedFor')}"</span>
        </div>
    </div>
    <div className='featured-row'>
        <a className='product-a' id='product' href='#'>
            <div className='featured-product-container'>
                <div className='main-product-info'>
                    <img width='100%' height='100%' draggable='false' src='https://cdn.discordapp.com/attachments/697629520240443482/1031599467260022864/unknown.png'></img>
                    <span className='title-tag'>Jordan 1 Retro Chicago</span>
                    <price-renderer>2,622</price-renderer>
                    <country-renderer data-location=''></country-renderer>
                    <div>
                        <div>
                            <div>
                                <real-tag class='real-tag' id='no-display'>Shoe</real-tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
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
                                <real-tag class='real-tag' id='no-display'>Sweater</real-tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
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
                                <real-tag class='real-tag' id='no-display'>Sweater</real-tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    </>
  )



}