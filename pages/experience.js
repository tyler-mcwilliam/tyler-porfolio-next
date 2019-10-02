import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Cursor from '../components/cursor'
import Link from 'next/link'

const Experience = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/static/favicon_io/favicon.ico' importance='low' />
      <link rel = "stylesheet" type = "text/css" href = "./static/pages_style.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </Head>

    <Nav />

    <div className="content">
      <div className="ct" id="t1">
        <div className="ct" id="t2">
          <div className="ct" id="t3">
            <div className="ct" id="t4">
               <div className="ct" id="t5">
                <ul className="hover-target page-ul" id="menu">
                  <a href="#t1"><li className="icon fa fa-home" id="one"></li></a>
                  <a href="#t2"><li className="icon fas fa-microchip" id="two"></li></a>
                  <a href="#t3"><li className="icon fas fa-fighter-jet" id="three"></li></a>
                  <a href="#t4"><li className="icon fas fa-chart-bar" id="four"></li></a>
                </ul>
                <div className="page" id="p1">
                  <div className="page-content-top">
                    <h1>Experience</h1>
                    <div className="page-body-top">
                      <section className="icon fas fa-arrow-circle-left"></section>
                      <p>You can find a list of my work experience by using the icons on the right.</p>
                    </div>
                  </div>
                </div>
                <div className="page" id="p2">
                  <div className="page-content">
                    <h1>Toho Technology <small><i>(2019)</i></small></h1>
                    <div className="page-body">
                      <div className="page-links">
                        <a href="http://popndrop.herokuapp.com/"><i className="github-link fab fa-chrome"></i></a>
                      </div>
                      <p>Toho Technology.</p>
                    </div>
                  </div>
                </div>
                <div className="page" id="p3">
                  <div className="page-content">
                    <h1>Boreas Technologies <small><i>(2019)</i></small></h1>
                    <div className="page-body">
                      <div className="page-links">
                        <a href="https://lvndr.herokuapp.com/"><i className="github-link fab fa-chrome"></i></a>
                      </div>
                      <p>Boreas Technologies.</p>
                    </div>
                  </div>
                </div>
                <div className="page" id="p4">
                  <div className="page-content">
                    <h1>Day Trader <small><i>(2019)</i></small></h1>
                    <div className="page-body">
                      <div className="page-links">
                        <a href="llama-trader.herokuapp.com"><i className="github-link fab fa-chrome"></i></a>
                      </div>
                      <p>Day Trader.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />

    <Cursor />

    <script src="./static/pages_scripts.js"></script>
  </div>
)

export default Experience
