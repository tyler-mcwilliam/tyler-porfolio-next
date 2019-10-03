import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Cursor from '../components/cursor'
import Link from 'next/link'

const Experience = () => (
  <div>
    <Head>
      <title>Tyler McWilliam :: Full Stack Developer</title>
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
                      <p>You can find a list of my work experience by using the icons on the right.</p>
                      <i className="icon-top fas fa-arrow-circle-left"></i>
                    </div>
                  </div>
                </div>
                <div className="page" id="p2">
                  <div className="page-content">
                    <h1>Toho Technology</h1>
                    <div className="page-body">
                      <p><strong>Title:</strong> Product Manager</p>
                      <p><strong>Dates:</strong> 2013-2018</p>
                      <p>Worked with the engineering team in Japan for Product Development and Management. Responsible for consultative sales with key Semiconductor and Flat Panel Display clients representing $6M USD annual revenue. Clients included research, academic, and manufacturing sites at university labs and private facilities.</p>
                    </div>
                  </div>
                </div>
                <div className="page" id="p3">
                  <div className="page-content">
                    <h1>Boreas Technologies</h1>
                    <div className="page-body">
                      <p><strong>Title:</strong> Co-Founder</p>
                      <p><strong>Dates:</strong> 2017-2019</p>
                      <p>Funding acquisition for a development-level start up focusing on advanced environmental control systems for specialized aircraft.</p>
                    </div>
                  </div>
                </div>
                <div className="page" id="p4">
                  <div className="page-content">
                    <h1>Day Trader</h1>
                    <div className="page-body">
                      <p><strong>Dates:</strong> 2018-2019</p>
                      <p>Personal stock trading and investment. Transitioned from an entirely manual system to an automated system based on algorithmic trading strategies. System now operates in the cloud using Python code and the Alpaca API.</p>
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
