import "./cart-icon.scss"
import { AiOutlineShopping } from 'react-icons/ai'

const CartIcon = () => {
    return(
        <div className="cart-icon-container">
            <AiOutlineShopping className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon