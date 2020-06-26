import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="switch-wrap">
        <div id="switch" className="hover-target">
          <div id="circle"></div>
        </div>
      </div>
      <div className="social-icons hover-target">
        <li><a href="mailto:tylermcwilliam@gmail.com?subject=Website Inquiry" target="_blank" className="social-icon"> <i className="fas fa-envelope"></i></a></li>
        <li><a href="https://medium.com/@tylermcwilliam" target="_blank" className="social-icon"> <i className="fab fa-medium-m"></i></a></li>
        <li><a href="https://angel.co/tyler-mcwilliam" target="_blank" className="social-icon"> <i className="fab fa-angellist"></i></a></li>
        <li><a href="https://www.linkedin.com/in/thetylermcwilliam/" target="_blank" className="social-icon"> <i className="fab fa-linkedin"></i></a></li>
        <li><a href="https://github.com/tyler-mcwilliam" target="_blank" className="social-icon"> <i className="fab fa-github"></i></a></li>
      </div>
    </div>

    <style jsx>{`
      /* Footer */

      @import url(https://use.fontawesome.com/releases/v5.7.2/css/all.css);
      span {
        color: #171717;
      }


      .footer {
        width: 100%;
        z-index: 10;
        display:block;
        margin: 0 auto;
        position: fixed;
        bottom: 5%;
        text-align-last: center;
        padding-inline-start: 0px;
      }
      .social-icon {
          color: #fff;
      }
      social-icons {
        margin-top: 10px;
        cursor: pointer;
      }
      .social-icons li {
          vertical-align: top;
          display: inline;
          height: 100px;
      }
      .social-icons a {
          color: #fff;
          text-decoration: none;
      }
      .fa-envelope {
          padding:10px 14px;
          -o-transition:.5s;
          -ms-transition:.5s;
          -moz-transition:.5s;
          -webkit-transition:.5s;
          transition: .5s;
          background-color: #322f30;
      }
      .fa-envelope:hover {
          background-color: #B13424;
      }
      .fa-medium-m {
          padding:10px 14px;
          -o-transition:.5s;
          -ms-transition:.5s;
          -moz-transition:.5s;
          -webkit-transition:.5s;
          transition: .5s;
          background-color: #322f30;
      }
      .fa-medium-m:hover {
          background-color: #00aced;
      }
      .fa-angellist {
          padding:10px 14px;
          -o-transition:.5s;
          -ms-transition:.5s;
          -moz-transition:.5s;
          -webkit-transition:.5s;
          transition: .5s;
          background-color: #322f30;
      }
      .fa-angellist:hover {
          background-color: #E64980;
      }

      .fa-linkedin {
          padding:10px 14px;
          -o-transition:.5s;
          -ms-transition:.5s;
          -moz-transition:.5s;
          -webkit-transition:.5s;
          transition: .5s;
          background-color: #322f30;
      }
      .fa-linkedin:hover {
          background-color: #0073a4;
      }
      .fa-github {
          padding:10px 14px;
          -o-transition:.5s;
          -ms-transition:.5s;
          -moz-transition:.5s;
          -webkit-transition:.5s;
          transition: .5s;
          background-color: #322f30;
      }
      .fa-github:hover {
          background-color: #5a32a3;
      }

      /* #Dark Mode Switch
      ================================================== */


      .switch-wrap {
        z-index: 10;
        transform: translateY(-50%);
        transition: all 500ms linear;
        margin: 0 auto;
        margin-top: 10px;
      }
      #switch,
      #circle {
        cursor: pointer;
        -webkit-transition: all 300ms linear;
        transition: all 300ms linear;
      }
      #switch {
        width: 60px;
        height: 8px;
        margin: 0 auto;
        text-align: center;
        border: 2px solid #000;
        border-radius: 27px;
        background: #8167a9;
        position: relative;
        display: inline-block;
      }
      #circle {
        position: absolute;
        top: -11px;
        left: -13px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        box-shadow: 0 2px 2px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
        background: #fff;
      }
      .switched {
        border-color: #8167a9 !important;
        background: #000 !important;
      }
      .switched #circle {
        left: 43px;
        background: #000;
      }

    `}</style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>    <script>
    </script>
  </footer>
)

export default Footer
