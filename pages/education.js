import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Cursor from '../components/cursor'
import Link from 'next/link'

const Education = () => (
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
                  <a href="#t1"><li className="icon fa fa-graduation-cap" id="one"></li></a>
                  <a href="#t2"><li className="icon fas fa-university" id="two"></li></a>
                  <a href="#t3"><li className="icon fas fa-user-graduate" id="three"></li></a>
                  <a href="#t4"><li className="icon fas fa-laptop-code" id="four"></li></a>
                </ul>
                <div className="page" id="p1">
                  <div className="page-content-top">
                    <h1>Education</h1>
                    <div className="page-body-top">
                      <p>You can learn about my education by using the icons on the right.</p>
                      <i className="icon-top fas fa-arrow-circle-left"></i>
                    </div>
                  </div>
                </div>
                <div className="page" id="p2">
                  <div className="page-content">
                    <div className="page-body">
                      <img className="page-image-loyola" src="../static/images/loyola.png" />
                      <div className="page-links">
                        <a href="http://luc.edu/"><i className="github-link fab fa-chrome"></i></a>
                      </div>
                      <p>I completed my BS in Economics and my BA in International Studies at Loyola. I also studied abroad in France, China, and Oman.</p>
                    </div>
                  </div>
                </div>
                <div className="page" id="p3">
                  <div className="page-content">
                    <div className="page-body">
                      <img className="page-image-texas" src="../static/images/mccombs.png" />
                      <div className="page-links">
                        <a href="https://www.utexas.edu/"><i className="github-link fab fa-chrome"></i></a>
                      </div>
                      <p>I earned my <abbr title="Master of Science in Technology Commercialization">MSTC</abbr> degree at the McCombs School of Business at the University of Texas at Austin. This included an international component in Colombia!</p>
                    </div>
                  </div>
                </div>
                <div className="page" id="p4">
                  <div className="page-content">
                    <div className="page-body">
                      <img className="page-image-le-wagon" src="../static/images/le-wagon.png" />
                      <div className="page-links">
                        <a href="https://www.lewagon.com/"><i className="github-link fab fa-chrome"></i></a>
                      </div>
                      <p>I completed the Le Wagon full stack developer boot camp in Bali. This was a 9-week intensive course covering the intracacies of <abbr title="Object Oriented Programming">OOP</abbr>, databases, and <abbr title="Model-View-Controller">MVC</abbr> applications.</p>
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
