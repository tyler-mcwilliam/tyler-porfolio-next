import React from 'react'
import Link from 'next/link'

const Cursor = () => (
  <div>
    <div className='cursor' id="cursor"></div>
    <div className='cursor2' id="cursor2"></div>
    <div className='cursor3' id="cursor3"></div>

    <style jsx>{`
      // Cursor

      .cursor,
      .cursor2,
      .cursor3{
        position: fixed;
        border-radius: 50%;
        transform: translateX(-50%) translateY(-50%);
        pointer-events: none;
        left: -100px;
        top: 50%;
        mix-blend-mode: difference;
        -webkit-transition: all 300ms linear;
        transition: all 300ms linear;
      }
      .cursor{
        background-color: #fff;
        height: 0;
        width: 0;
        z-index: 99999;
      }
      .cursor2,.cursor3{
        height: 18px;
        width: 18px;
        z-index:99998;
        -webkit-transition:all 0.3s ease-out;
        transition:all 0.3s ease-out
      }
      .cursor2.hover,
      .cursor3.hover{
        -webkit-transform:scale(2) translateX(-25%) translateY(-25%);
        transform:scale(2) translateX(-25%) translateY(-25%);
        border:none
      }
      .cursor2{
        border: 2px solid #fff;
        box-shadow: 0 0 22px rgba(255, 255, 255, 0.6);
      }
      .cursor2.hover{
        background: rgba(255,255,255,1);
        box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
      }

      @media screen and (max-width: 1200px){
        .cursor,.cursor2,.cursor3{
          display: none
        }
      }
    `}</style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script>
    </script>
  </div>
)

export default Cursor
