import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'
import Logo from '../../assets/logo/Logo.png'
import ImgOne from '../../assets/imgs/ImgOne.svg'
import ImgTwo from '../../assets/imgs/ImgTwo.png'
import { FaUserAlt } from 'react-icons/fa';

export default function Home() {
    return (
        <React.Fragment>
            <div className="container">
                <header>
                    <div className="logo-container">
                        <img src={Logo} alt="Logo SK CODER" className="logo" />
                        <Link to="/" className="name-logo-link">
                            <h1 className="name-logo">SK <span>CODER</span></h1>
                        </Link>
                    </div>
                    <div className="links-container">
                        <Link to="/" className='links-menu'>Home</Link>
                        <Link to="/" className='links-menu'>Sobre nós</Link>
                        <Link to="/" className='links-menu'>Portifólio</Link>
                        <Link to="/" className='links-menu'>Produtos</Link>
                        <Link to="/" className='links-menu'>Contatos</Link>
                        <Link to="/" className='links-login'>login <FaUserAlt /></Link>
                    </div>
                </header>
                    <div className="container-body">
                        <img src={ImgOne} alt="Qualidade e Inovação" className="img-one" />
                        <div className="container-text">
                            <h2><span>Qualidade</span> e <span>Inovação</span> é nosso lema.</h2>
                            <button className="button-orange"> Quem Somos</button>
                        </div>
                    </div>
                    <div className="container-body2">
                        <div className="container-text2">
                            <h2>Desenvolvendo o <span>futuro</span> <br />Você sonha nós <span>realizamos</span></h2>
                            <button className="button-pink">Nosso Portifólio
                        </button>
                        </div>
                        <img src={ImgTwo} alt="APP" className="img-two" />
                    </div>
            </div>
        </React.Fragment>
    )
}
