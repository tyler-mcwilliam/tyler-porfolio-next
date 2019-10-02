import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <header className="cd-header">
      <div className="header-wrapper">
        <div className="logo-wrap">
          <a href="index" className="hover-target" id="effect-box">     <span>TYLER</span>_McWILLIAM</a>
        </div>
        <div className="nav-but-wrap">
          <div className="menu-icon hover-target">
            <span className="menu-icon__line menu-icon__line-left"></span>
            <span className="menu-icon__line"></span>
            <span className="menu-icon__line menu-icon__line-right"></span>
          </div>
        </div>
      </div>
    </header>

    <div className="nav">
      <div className="nav__content">
        <ul className="nav__list">
          <li className="nav__list-item active-nav"><a href="home" className="hover-target">home</a></li>
          <li className="nav__list-item"><a href="projects" className="hover-target">projects</a></li>
          <li className="nav__list-item"><a href="experience" className="hover-target">experience</a></li>
          <li className="nav__list-item"><a href="education" className="hover-target">education</a></li>
          <li className="nav__list-item"><a href="index" className="hover-target">contact</a></li>
        </ul>
      </div>
    </div>

    <style jsx>{`

      span {
        color: #171717;
      }

      // Navigation

      .cd-header{
          position: fixed;
        width:100%;
        top:0;
        left:0;
        z-index:100;
      }
      .header-wrapper{
        position: relative;
        width: calc(100% - 100px);
        margin-left: 50px;
      }

      .logo-wrap {
        position: absolute;
        display:block;
        left:0;
        top: 40px;

      }

      .logo-wrap a {

        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 2px;
        color: #fff;
        transition : all 0.3s ease-out;
      }

      .logo-wrap a span{
        color: #8167a9;
      }

      // Nav

      .nav-but-wrap{
        position: relative;
        display: inline-block;
        float: right;
        padding-left: 15px;
        padding-top: 15px;
        margin-top: 26px;
        transition : all 0.3s ease-out;
      }
      .menu-icon {
        height: 30px;
        width: 30px;
        position: relative;
        z-index: 2;
        cursor: pointer;
        display: block;
      }
      .menu-icon__line {
        height: 2px;
        width: 30px;
        display: block;
        background-color: #fff;
        margin-bottom: 7px;
        cursor: pointer;
        -webkit-transition: background-color .5s ease, -webkit-transform .2s ease;
        transition: background-color .5s ease, -webkit-transform .2s ease;
        transition: transform .2s ease, background-color .5s ease;
        transition: transform .2s ease, background-color .5s ease, -webkit-transform .2s ease;
      }
      .menu-icon__line-left {
        width: 16.5px;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
      }
      .menu-icon__line-right {
        width: 16.5px;
        float: right;
        -webkit-transition: all 200ms linear;
        -moz-transition: all 200ms linear;
        -o-transition: all 200ms linear;
        -ms-transition: all 200ms linear;
        transition: all 200ms linear;
      }
      .menu-icon:hover .menu-icon__line-left,
      .menu-icon:hover .menu-icon__line-right {
        width: 30px;
      }
      .nav {
        position: fixed;
        z-index: 98;
      }
      .nav:before, .nav:after {
        content: "";
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: rgba(20, 21, 26,0.6);
        border-bottom-left-radius: 200%;
        z-index: -1;
        -webkit-transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
        transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
        transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
        transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
        -webkit-transform: translateX(100%) translateY(-100%);
                transform: translateX(100%) translateY(-100%);
      }
      .nav:after {
        background: #09090C;
        -webkit-transition-delay: 0s;
                transition-delay: 0s;
      }
      .nav:before {
        -webkit-transition-delay: .2s;
                transition-delay: .2s;
      }
      .nav__content {
        position: fixed;
        visibility: hidden;
        top: 50%;
        margin-top: 20px;
        -webkit-transform: translate(0%, -50%);
                transform: translate(0%, -50%);
        width: 100%;
        text-align: center;
      }
      .nav__list {
        position: relative;
        padding: 0;
        margin: 0;
        z-index: 2;
      }
      .nav__list-item {
        position: relative;
        display: block;
        -webkit-transition-delay: 0.8s;
                transition-delay: 0.8s;
        opacity: 0;
        text-align: center;
        color: #fff;
        overflow: hidden;
        font-family: 'Montserrat', sans-serif;
        font-size: 6vh;
        font-weight: 900;
        line-height: 1.15;
        letter-spacing: 3px;
        -webkit-transform: translate(100px, 0%);
                transform: translate(100px, 0%);
        -webkit-transition: opacity .2s ease, -webkit-transform .3s ease;
        transition: opacity .2s ease, -webkit-transform .3s ease;
        transition: opacity .2s ease, transform .3s ease;
        transition: opacity .2s ease, transform .3s ease, -webkit-transform .3s ease;
        margin-top: 0;
        margin-bottom: 0;
      }
      .nav__list-item a{
        position: relative;
        text-decoration: none;
        color: rgba(255,255,255,0.6);
        overflow: hidden;
        cursor: pointer;
        padding-left: 5px;
        padding-right: 5px;
        font-weight: 900;
        z-index: 2;
        display: inline-block;
        text-transform: uppercase;
          -webkit-transition: all 200ms linear;
          transition: all 200ms linear;
      }
      .nav__list-item a:after{
        position: absolute;
        content: '';
        top: 50%;
        margin-top: -2px;
        left: 50%;
        width: 0;
        height: 0;
        opacity: 0;
        background-color: #8167a9;
        z-index: 1;
          -webkit-transition: all 200ms linear;
          transition: all 200ms linear;
      }
      .nav__list-item a:hover:after{
        height: 4px;
        opacity: 1;
        left: 0;
        width: 100%;
      }
      .nav__list-item a:hover{
        color: rgba(255,255,255,1);
      }
      .nav__list-item.active-nav a{
        color: rgba(255,255,255,1);
      }
      .nav__list-item.active-nav a:after{
        height: 4px;
        opacity: 1;
        left: 0;
        width: 100%;
      }
      body.nav-active .nav__content {
        visibility: visible;
      }
      body.nav-active .menu-icon__line {
        background-color: #fff;
        -webkit-transform: translate(0px, 0px) rotate(-45deg);
                transform: translate(0px, 0px) rotate(-45deg);
      }
      body.nav-active .menu-icon__line-left {
        width: 15px;
        -webkit-transform: translate(2px, 4px) rotate(45deg);
                transform: translate(2px, 4px) rotate(45deg);
      }
      body.nav-active .menu-icon__line-right {
        width: 15px;
        float: right;
        -webkit-transform: translate(-3px, -3.5px) rotate(45deg);
                transform: translate(-3px, -3.5px) rotate(45deg);
      }
      body.nav-active .menu-icon:hover .menu-icon__line-left,
      body.nav-active .menu-icon:hover .menu-icon__line-right {
        width: 15px;
      }
      body.nav-active .nav {
        visibility: visible;
      }
      body.nav-active .nav:before, body.nav-active .nav:after {
        -webkit-transform: translateX(0%) translateY(0%);
                transform: translateX(0%) translateY(0%);
        border-radius: 0;
      }
      body.nav-active .nav:after {
        -webkit-transition-delay: .1s;
                transition-delay: .1s;
      }
      body.nav-active .nav:before {
        -webkit-transition-delay: 0s;
                transition-delay: 0s;
      }
      body.nav-active .nav__list-item {
        opacity: 1;
        -webkit-transform: translateX(0%);
                transform: translateX(0%);
        -webkit-transition: opacity .3s ease, color .3s ease, -webkit-transform .3s ease;
        transition: opacity .3s ease, color .3s ease, -webkit-transform .3s ease;
        transition: opacity .3s ease, transform .3s ease, color .3s ease;
        transition: opacity .3s ease, transform .3s ease, color .3s ease, -webkit-transform .3s ease;
      }
      body.nav-active .nav__list-item:nth-child(0) {
        -webkit-transition-delay: 0.7s;
                transition-delay: 0.7s;
      }
      body.nav-active .nav__list-item:nth-child(1) {
        -webkit-transition-delay: 0.8s;
                transition-delay: 0.8s;
      }
      body.nav-active .nav__list-item:nth-child(2) {
        -webkit-transition-delay: 0.9s;
                transition-delay: 0.9s;
      }
      body.nav-active .nav__list-item:nth-child(3) {
        -webkit-transition-delay: 1s;
                transition-delay: 1s;
      }
      body.nav-active .nav__list-item:nth-child(4) {
        -webkit-transition-delay: 1.1s;
                transition-delay: 1.1s;
      }
      body.nav-active .nav__list-item:nth-child(5) {
        -webkit-transition-delay: 1.2s;
                transition-delay: 1.2s;
      }
      body.nav-active .nav__list-item:nth-child(6) {
        -webkit-transition-delay: 1.3s;
                transition-delay: 1.3s;
      }
      body.nav-active .nav__list-item:nth-child(7) {
        -webkit-transition-delay: 1.4s;
                transition-delay: 1.4s;
      }
      body.nav-active .nav__list-item:nth-child(8) {
        -webkit-transition-delay: 1.5s;
                transition-delay: 1.5s;
      }
      body.nav-active .nav__list-item:nth-child(9) {
        -webkit-transition-delay: 1.6s;
                transition-delay: 1.6s;
      }
      body.nav-active .nav__list-item:nth-child(10) {
        -webkit-transition-delay: 1.7s;
                transition-delay: 1.7s;
      }


      /* #Box Effect
      ================================================== */


      @-webkit-keyframes bounce {
        0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}
        40% {-webkit-transform: translateY(-5px);}
        60% {-webkit-transform: translateY(-2px);}
      }

      @-moz-keyframes bounce {
        0%, 20%, 50%, 80%, 100% {-moz-transform: translateY(0);}
        40% {-moz-transform: translateY(-5px);}
        60% {-moz-transform: translateY(-2px);}
      }

      @-o-keyframes bounce {
        0%, 20%, 50%, 80%, 100% {-o-transform: translateY(0);}
        40% {-o-transform: translateY(-5px);}
        60% {-o-transform: translateY(-2px);}
      }
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
        40% {transform: translateY(-5px);}
        60% {transform: translateY(-2px);}
      }

      a {
        text-decoration: none;
      }

      a#effect-box:after,
      a#effect-box:before {
        content: '';
        position: absolute;
        left: 0;
        display: inline-block;
        height: 1em;
        width: 100%;
        margin-top: 10px;
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        animation: bounce 2s infinite;
        -webkit-animation: bounce 2s infinite;
        -moz-animation: bounce 2s infinite;
        -o-animation: bounce 2s infinite;
      }

      a#effect-box:after {
        border-bottom: 4px solid #8167A9;
        -webkit-transform: scale(0,1);
        transform: scale(0,1);
        animation: bounce 2s infinite;
      }

      a#effect-box:hover:after,
      a#effect-box:hover:before {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
        animation: bounce 2s infinite;
      }

    `}</style>
  </nav>
)

export default Nav
