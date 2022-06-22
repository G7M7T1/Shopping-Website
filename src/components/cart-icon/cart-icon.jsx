import "./cart-icon.scss"
import { AiOutlineShopping } from 'react-icons/ai'
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartItemCount} = useContext(CartContext)
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return(
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <AiOutlineShopping className="shopping-icon" />
            <span className="item-count">{cartItemCount}</span>
        </div>
    )
}

export default CartIcon