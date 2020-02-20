import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';

function Navbar({ title, icon }) {
    const authContext = useContext(AuthContext);
    const { logout, user, isAuthenticated } = authContext;
    const logOut = () => {
        logout();
    };

    const AuthLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a href="#!" onClick={logOut}>
                Logout<i className='fas fa-sign-out-alt fa-sm' />
                </a>
            </li>
        </Fragment>
    );
    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>

            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    );

    return (
        <div className='navbar'>
            <h1>
                <Link to='/about'>
                    <i className={icon} />
                    {title}
                </Link>
            </h1>
            <ul>
                {isAuthenticated ? AuthLinks : guestLinks}
            </ul>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
};

export default Navbar;
