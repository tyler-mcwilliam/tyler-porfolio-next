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
      <link rel='icon' href='/static/favicon.ico' importance='low' />
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
                  <div className="page-content">
                    <section className="icon fa fa-home"><span className="title">Projects</span><span className="hint">Hello</span></section>
                  </div>
                </div>
                <div className="page" id="p2">
                  <section className="icon fas fa-toilet"><span className="title">Pop'n'Drop</span></section>
                </div>
                <div className="page" id="p3">
                  <section className="icon fas fa-comments-dollar"><span className="title">Lavender</span></section>
                </div>
                <div className="page" id="p4">
                  <section className="icon fas fa-horse">
                    <span className="title">Llama Trader</span>
                    <p className="hint">

                    </p>
                  </section>
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
