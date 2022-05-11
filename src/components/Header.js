import React from 'react';
import Icon from '@mdi/react';
import { mdiDownload } from '@mdi/js';
import logo from '../assets/atoms_family.webp';

export default class Header extends React.Component {

    toggleMenu() {
        document.getElementById('navbarMenu').classList.toggle('is-active');
    }

    render() {
        return(
            <section className="hero is-success is-fullheight">
                <div className="hero-head">
                    <header className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <a href="/" className="navbar-item">
                                    <img src={logo} alt="Atoms Family" />
                                </a>

                                <span className="navbar-burger" data-target="navbarMenu" onClick={this.toggleMenu}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>

                            <div id="navbarMenu" className="navbar-menu">
                                <div className="navbar-end">
                                    <a href="/" className="navbar-item active">Merch</a>
                                    <a href="/" className="navbar-item">Blog</a>
                                    <a href="/" className="navbar-item">Forum</a>
                                    <span className="navbar-item">
                                        <button className="button is-success is-inverted">
                                            <span className="icon">
                                                <Icon path={mdiDownload}/>
                                            </span>
                                            <span>Download</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title">
                            Catoms
                        </p>
                        <p className="subtitle">
                            By The Atoms Family
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}