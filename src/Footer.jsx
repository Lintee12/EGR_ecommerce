import React from 'react'

export default function Footer() {
  return (
    <>
    <iframe title='Time left till no more fish in the sea' src='https://www.theworldcounts.com/embeds/counters/115?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14' style={{border: 'none',}} height='100' width='100%'></iframe>
    <iframe title='Time left till no more fish in the sea' src='https://www.theworldcounts.com/embeds/counters/121?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14' style={{border: 'none',}} height='100' width='100%'></iframe>
    <footer>
        <div className='footer-row'>
            <div className='footer-col'>
                <img width='32px' height='32px' src='https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-2048x2048.png'></img>
                <img width='32px' height='32px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png'></img>
                <img width='32px' height='32px' src='https://www.pnguniverse.com/wp-content/uploads/2020/10/Tik-Tok-fondo-circular.png'></img>
            </div>
            <ul>
                <li className='nav-item hover-underline mob-hide'>
                    <a className='a-none' href='/about'>About</a>
                </li>
                <li className='nav-item hover-underline mob-hide'>
                    <a className='a-none' href='#'>Browse</a>
                </li>
                <li className='nav-item hover-underline mob-hide'>
                    <a className='a-none' href='/contact'>Contact</a>
                </li>
            </ul>
        </div>
        <i style={{width: '100px', display: 'none'}} className='fab fa-discord'></i>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="business" value="XFP4ULSMLBF8S" />
        <input type="hidden" name="no_recurring" value="0" />
        <input type="hidden" name="currency_code" value="CAD" />
        <input style={{display: 'none'}} type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
    </form>
    </footer>
    </>
  )
}
