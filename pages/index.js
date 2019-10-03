import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Cursor from '../components/cursor'
import Link from 'next/link'

const Home = () => (
  <div id="full-page">
    <Head>
      <title>Tyler McWilliam :: Full Stack Developer</title>
      <link rel='icon' href='/static/favicon_io/favicon.ico' importance='low' />
      <link rel = "stylesheet" type = "text/css" href = "./static/style.css" />
      <meta property='og:title' content='Tyler McWilliam :: Full Stack Developer"/>
      <meta property="og:image" content="../static/images/thumbnail.png" />
      <meta property='og:description' content="An overview of my coding capacity"/>
      <meta property='og:url' content='//tylermcwilliam.com" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </Head>

    <Nav />

    <div className="content">
      <div className="headline">
        <code>// TODO: render amazing front ends</code>
        <h1><span><i className="fa fa-code"></i> FULL STACK DEVELOPER</span></h1>
        <div className="contact-btn-container">
          <a href="mailto:tylermcwilliam@gmail.com" className="contact-btn hover-target">Get in Touch</a>
        </div>
        <div className='console-container'>
          <span>tyler-mcwilliam git:(master) ✗ </span>
          <span id='text'></span><div className='console-underscore' id='console'>&#95;</div>
          <div className='hidden-stack'><span>tyler-mcwilliam git:(master) ✗ Solidity</span></div>
          <div className='hidden-stack'><span>tyler-mcwilliam git:(master) ✗ Ruby on Rails</span></div>
          <div className='hidden-stack'><span>tyler-mcwilliam git:(master) ✗ React-Redux</span></div>
          <div className='hidden-stack'><span>tyler-mcwilliam git:(master) ✗ Django</span></div>
          <div className='hidden-stack'><span>tyler-mcwilliam git:(master) ✗ Express</span></div>
        </div>
        <code>// EDIT: done</code>
      </div>
    </div>

    <Footer />

    <Cursor />

    <script src="./static/scripts.js"></script>
  </div>
)

export default Home
