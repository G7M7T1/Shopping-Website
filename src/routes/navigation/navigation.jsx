import {Outlet, Link} from 'react-router-dom'
import {Fragment, useContext} from 'react';
import "./navigation.scss"
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import {CartContext} from "../../context/cart.context";

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    const user = currentUser

    let displayName = null
    if (user !== null) {
        displayName = user.displayName
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <p>Logo</p>
                </Link>
                <div className='nav-links-container'>
                    {displayName ?
                        (<span>Hi, {displayName}</span>)
                        :
                        (<span>Hello <span className="green-color">New User</span></span>)
                    }

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
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation