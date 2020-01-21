import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'

export const Header = () => {
    return (
<div className="header">
    <Link to = '/'>
        <Logo className = 'logo' />
    </Link>
    <div className="options">
        <Link classname = 'option' to = '/shop'> SHOP</Link>
        <Link classname = 'option' to = '/shop'> CONTACT</Link>
    </div>
</div>
    )
}
