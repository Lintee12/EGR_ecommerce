import React from 'react'
import menu from './assets/images/menu.png'
import cart from './assets/images/cart.png'
import searchIcon from './assets/images/search.png'
import Search from './pages/Search'
import Post from './pages/Post'
import './assets/css/basic.css'

const rotate = () => {
  if (document.getElementById('menu').classList.contains('rotate')) {
    document.getElementById('menu').classList.remove('rotate');
  }
  else {
    document.getElementById('menu').classList += ' rotate';
  }
  toggle();
}

const toggle = () => {
  if(document.getElementById('menu').classList.contains('rotate')) {
    document.getElementsByClassName('nav-dropdown')[0].style.display = 'block';
  }
  else {
    document.getElementsByClassName('nav-dropdown')[0].style.display = 'none';
  }
}

function updateSearchResults() {
  var searchedFor = "";
  searchedFor = document.getElementsByClassName('main-search')[0].value;
  console.log("Searched For:" + searchedFor);
  localStorage.setItem("searchedFor", searchedFor);
}

function updateSearchResultsMob() {
  var searchedFor = "";
  searchedFor = document.getElementsByClassName('main-search')[1].value;
  console.log("Searched For:" + searchedFor);
  localStorage.setItem("searchedFor", searchedFor);
}

export default function Header() {
  return (
    <header>
      <nav className='nav-main'>
      <a href='/' className='a-none inverted-img'><img height='100%'  width='120px' src='https://cdn.discordapp.com/attachments/979817410624364545/1032751872005652581/EGR_logo.png'></img></a>
        <a href='/' className='a-none'><logo-renderer></logo-renderer></a>
        <ul className='nav-list nav-right'>
          <li className='nav-item hover-underline mob-hide'>
            <form onSubmit={() => {updateSearchResults()}} action='/search' className='search-box' >
                <img draggable='false' height='20px' width='20px' src={searchIcon}></img>
                <input type='search' name='q' className='main-search'></input>
            </form>
          </li>
          <li className='nav-item hover-underline mob-hide'>
            <a className='a-none' href='/about'>About</a>
          </li>
          <li className='nav-item hover-underline mob-hide'>
            <a className='a-none' href='#'>Browse</a>
          </li>
          <li className='nav-item hover-underline mob-hide'>
            <a className='a-none' href='/contact'>Contact</a>
          </li>
          <li className='nav-item mob-show'>
            <a className='a-none a-icon' id='menu' href='#' onClick={() => {rotate()}}>
              <img className='fix' draggable='false' width='40px' height='50px' src={menu}></img>
            </a>
          </li>
          <li className='nav-item mob-hide'>
            <a className='a-none btn btn-sign-in' href='#'>Sign in</a>
          </li>
          <li className='nav-item'>
            <a className='a-none a-icon' id='cart' href='#'>
              <div className='cart-item-renderer' data-cart-items='99' ></div>
              <img width='32px' height='32px' alt='cart' name='cart' aria-label='cart' title='cart' draggable='false' src={cart}></img>
            </a>
          </li>
        </ul>
      </nav>
      <nav className='nav-dropdown'>
        <ul className='nav-dropdown-list'>
          <li className='nav-item hover-underline mob-show drpd-item'>
            <a className='a-none' href='/about'>About</a>
          </li>
          <li className='nav-item hover-underline mob-show drpd-item'>
            <a className='a-none' href='#'>Browse</a>
          </li>
          <li className='nav-item hover-underline mob-show drpd-item'>
            <a className='a-none' href='/contact'>Contact</a>
          </li>
          <li className='nav-item mob-show'>
            <a className='a-none btn btn-sign-in' href='#'>Sign in</a>
          </li>
        </ul>
      </nav>
      <form action='/search' onSubmit={() => {updateSearchResultsMob()}} className='search-box-secondary'>
        <img draggable='false' height='20px' width='20px' src={searchIcon}></img>
        <input type='search' name='q' className='main-search'></input>
      </form>
    </header>
  )
}
