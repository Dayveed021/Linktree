import React from 'react'
import "../styles/errorpage.scss"
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Errorpage = () => {
    return (
        <div>        <div id='error'>
            <p id='num'>404 error</p>
            <h1> We can't find that page</h1>
            <p class='error-text'>Sorry, the page you are looking for doesn't exist or has been moved.</p>
            <div id='btn'>
                <div>
                    <Link to="/" className='errorbutton'>
                        <button className='home'><p>Take me home</p></button>
                    </Link>
                    <Link to="/" className='errorbutton'>
                        <button className='back-2'>← Go back</button>
                    </Link>
                </div>
                <div>
                    <Link to="/" className='errorbutton'>
                        <button className='back'>← Go back</button>
                    </Link>
                    <Link to="/" className='errorbutton'>
                        <button className='home-2'>Take me home</button>
                    </Link>
                </div>
            </div>
        </div>
            <div className='foot'>
                <Footer />
            </div>
        </div>
    )
}

export default Errorpage