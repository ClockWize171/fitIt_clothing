import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import Logo from '../../assets/logo (1).png'
import './Header.scss'

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <img className='logo' src={Logo} alt='logo' />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/contact'>
                    CONTACT
                </Link>
                {currentUser ?
                    (
                        <div
                            className="option"
                            onClick={() => { auth.signOut() }}>
                            SIGN OUT
                        </div>
                    )
                    :
                    (
                        <Link className="option" to='/signin'>
                            SIGN IN
                        </Link>
                    )}

            </div>
        </div>
    )
}

export default Header