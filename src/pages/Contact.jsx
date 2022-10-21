import React from 'react'
import '../assets/css/contact.css'
import JotFormEmbed from 'react-jotform-embed'
import MetaTags from 'react-meta-tags';

function applyForm () {
    const script = document.createElement("script");

    script.type = 'text/javascript'
    script.src = "https://form.jotform.com/jsform/222897374814064";
    script.defer = true;
    
}applyForm();

export default function Contact() {
    const URL = 'https://form.jotform.com/222897374814064'
  return (
    <main>
        <div className='container'>
            <JotFormEmbed src='https://form.jotform.com/222897374814064' />
            <div className='container-center'>
                <h1>Socials</h1>
                <ul className='ul'>
                    <a className='a-none a' target='_blank' href='https://discord.gg/gXFxSARZnT'>
                        <li className='li'>Discord 
                            <img width='32px' height='32px' src='https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-2048x2048.png'></img>
                        </li>
                    </a>
                    <a className='a-none a' target='_blank' href='https://discord.gg/gXFxSARZnT'>
                        <li className='li'>Instagram
                            <img width='32px' height='32px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png'></img>
                        </li>
                    </a>
                    <a className='a-none a' target='_blank' href='https://discord.gg/gXFxSARZnT'>
                        <li className='li'>TikTok
                            <img width='32px' height='32px' src='https://www.pnguniverse.com/wp-content/uploads/2020/10/Tik-Tok-fondo-circular.png'></img>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
        <MetaTags>
            <title>EGR | Contact</title>
            <meta name="description" content='EGR Contact page'></meta>
            <meta name="og:title" content='EGR | Contact' />
            <meta name="og:description" content='EGR Contact page' />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={window.location.href}/>
            <meta property="twitter:title" content='EGR | Contact' />
            <meta property="twitter:description" content='EGR Contact page' />
        </MetaTags>
    </main>
  );
}
