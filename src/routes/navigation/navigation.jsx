import {Outlet, Link} from 'react-router-dom'
import {Fragment, useContext} from 'react';
import "./navigation.scss"
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase";

const Navigation = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext)

    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <p>Logo</p>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        SHOP
                    </Link>

                    {currentUser ?
                        (<span className='nav-link' onClick={signOutHandler}>
                            SIGN OUT
                        </span>)
                        :
                        (<Link className='nav-link' to='/register'>
                            SIGN IN
                        </Link>)
                    }
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation