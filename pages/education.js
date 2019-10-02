import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Cursor from '../components/cursor'
import Link from 'next/link'

const Education = () => (
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
                  <a href="#t1"><li className="icon fa fa-graduation-cap" id="one"></li></a>
                  <a href="#t2"><li className="icon fas fa-university" id="two"></li></a>
                  <a href="#t3"><li className="icon fas fa-user-graduate" id="three"></li></a>
                  <a href="#t4"><li className="icon fas fa-laptop-code" id="four"></li></a>
                </ul>
                <div className="page" id="p1">
                  <div className="page-content-top">
                    <h1>Education</h1>
                    <div className="page-body-top">
                      <section className="icon fas fa-arrow-circle-left"></section>
                      <p>You can learn about my education by using the icons on the right.</p>
                    </div>
                  </div>
                </div>
                <div className="page" id="p2">
                  <div className="page-content">
                    <h1>Loyola University Chicago</h1>
                    <div className="page-body">
                      <img className="page-image" src="../static/images/loyola.png" />
                      <div className="page-links">
                        <a href="http://popndrop.herokuapp.com/"><i className="github-link fab fa-chrome"></i></a>
                      </div>
                      <p>Loyoal University Chicago.</p>
                    </div>
                  </div>
                </div>
                <div className="page" id="p3">
                  <div className="page-content">
                    <h1>The University of Texas at Austin</h1>
                    <div className="page-body">
                      <img className="page-image" src="../static/images/mccombs.png" />
                      <div className="page-links">
                        <a href="https://lvndr.herokuapp.com/"><i className="github-link fab fa-chrome"></i></a>
                      </div>
                      <p>McCombs School of Business.</p>
                    </div>
                  </div>
                </div>
                <div className="page" id="p4">
                  <div className="page-content">
                    <h1>Le Wagon</h1>
                    <div className="page-body">
                      <img className="page-image" src="../static/images/le-wagon.png" />
                      <div className="page-links">
                        <a href="llama-trader.herokuapp.com"><i className="github-link fab fa-chrome"></i></a>
                      </div>
                      <p>Le Wagon.</p>
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

export default Education
