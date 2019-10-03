import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Cursor from '../components/cursor'
import Link from 'next/link'

const Projects = () => (
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
                  <a href="#t2"><li className="icon fas fa-toilet" id="two"></li></a>
                  <a href="#t3"><li className="icon fas fa-comments-dollar" id="three"></li></a>
                  <a href="#t4"><li className="icon fas fa-horse" id="four"></li></a>
                </ul>
                <div className="page" id="p1">
                  <div className="page-content-top">
                    <h1>Projects</h1>
                    <div className="page-body-top">
                      <p>You can find a list of my coding projects by using the icons on the right. Each demonstrates a different element of back end and front end coding work.</p>
                      <i className="icon-top fas fa-arrow-circle-left"></i>
                    </div>
                  </div>
                </div>
                <div className="page" id="p2">
                  <div className="page-content">
                    <h1>Pop'N'Drop <small><i>(2019)</i></small></h1>
                    <div className="page-body">
                      <img className="page-image" src="../static/images/popndrop.png" />
                      <div className="page-links">
                        <a href="http://popndrop.herokuapp.com/"><i className="github-link fab fa-chrome"></i></a>
                        <a href="https://github.com/toekneeyou/popndrop"><i className="github-link fab fa-github"></i></a>
                      </div>
                      <p>Pop'N'Drop was a humorous extension of the AirBnB model. Rather than rent out apartments, we created a platform for short term rentals of toilets.</p>
                      <p><i>Coded with <i className="fas fa-heart" /> in Ruby on Rails using Devise and MapBox integrations.</i></p>
                    </div>
                  </div>
                </div>
                <div className="page" id="p3">
                  <div className="page-content">
                    <h1>Lavender <small><i>(2019)</i></small></h1>
                    <div className="page-body">
                      <img className="page-image" src="../static/images/lavender.png" />
                      <div className="page-links">
                        <a href="https://lvndr.herokuapp.com/"><i className="github-link fab fa-chrome"></i></a>
                        <a href="https://github.com/tyler-mcwilliam/Lavender"><i className="github-link fab fa-github"></i></a>
                      </div>
                      <p>Lavender is a community investment platform allowing form friends to come together and vote on which stocks to buy.</p>
                      <p><i>Coded with <i className="fas fa-heart" /> in Ruby on Rails using IEX Cloud, Google Omni Authable, Alpaca Trade API, Sidekiq, and AM Charts integrations.</i></p>
                    </div>
                  </div>
                </div>
                <div className="page" id="p4">
                  <div className="page-content">
                    <h1>Llama Trader <small><i>(2019)</i></small></h1>
                    <div className="page-body">
                      <img className="page-image" src="../static/images/llama-trader.png" />
                      <div className="page-links">
                        <a href="https://llama-trader.herokuapp.com"><i className="github-link fab fa-chrome"></i></a>
                        <a href="https://github.com/tyler-mcwilliam/alpaca-front-end-react"><i className="github-link fab fa-github"></i></a>
                      </div>
                      <p>Llama Trader is a front end interface allowing users to quickly access their Alpaca trading account and make trades with the hassle of using an API.</p>
                      <p><i>Coded with <i className="fas fa-heart" /> completely in React-Redux.</i></p>
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

export default Projects
