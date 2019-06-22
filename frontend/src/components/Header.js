import React from 'react';

import './Header.css';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

// import { Container } from './styles';

export default function Header() {
  return (
    <header id="main-header">
        <div class="header-content">
            <img src={logo} alt="InstaRocket" />
            <img src={camera} alt="Enviar Publicação" />
        </div>
    </header>
  );
}
