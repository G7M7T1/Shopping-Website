import {Outlet, Link} from 'react-router-dom'
import {Fragment, useContext} from 'react';
import "./navigation.scss"
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";

const Navigation = () => {
    const {currentUser} = useContext(UserContext)

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <p>Logo</p>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>

                    {currentUser ?
                        (<span className='nav-link' onClick={signOutUser}>
                            SIGN OUT
                        </span>)
                        :
                        (<Link className='nav-link' to='/register'>
                            SIGN IN
                        </Link>)
                    }

                    <CartIcon />
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation