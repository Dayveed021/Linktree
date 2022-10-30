import React from 'react'
import "../styles/linktree.scss"
import Footer from './Footer'
import { RWebShare } from 'react-web-share'

const LinkPage = () => {
  return (
    <body>
      <main>
        <section>
          <div id='profile_img'>
            <img src="./images/me.jpg" alt="Loading..." />
          </div>
          <div id='share'>
            <RWebShare
              data={{
                text: "Web share",
                url: "http://localhost:3000/",
                title: "sharing",
              }}><img src="./images/share.png" alt="Loading" className='share-icon' /></RWebShare>
            <RWebShare
              data={{
                text: "Web share",
                url: "http://localhost:3000/",
                title: "sharing",
              }}><img src="./images/ellipsis.png" alt="Loading" className='ellipsis' /></RWebShare>
          </div>
        </section>
        <p id='twitter'>Dae_vyed</p>
        <p id='slack'>David Udoh</p>
        <div className='links'>
          <div className='link'>
            <a href="https://twitter.com/Dae_vyed"><button>Twitter Link</button></a>
          </div>
          <div className='link'>
            <a href="https://training.zuri.team/"><button id='btn_zuri'>Zuri Team</button></a>
          </div>
          <div className='link'>
            <a href="http://books.zuri.team"><button id='books'>Zuri Books</button></a>
          </div>
          <div className='link'>
            <a href="https://books.zuri.team/python-for-beginners?ref_id= David Udoh"><button id='book_python'>Python Books</button></a>
          </div>
          <div className='link'>
            <a href="https://background.zuri.team"><button id='pitch'>Background checks for coders</button></a>
          </div>
          <div className='link'>
            <a href="https://books.zuri.team/design-rules"><button id='book_design'>Design Books</button></a>
          </div>
        </div>
        <div className='icons'>
          <img src="./images/slack.png" alt="Loading..." />
          <img src="./images/Github.png" alt="" />
        </div>
        <Footer />
      </main>
    </body >
  )
}

export default LinkPage;