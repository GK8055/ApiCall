// Write your JS code here
import './index.css'

import {Component} from 'react'

class Cart extends Component {
  render() {
    return (
      <div className="cart_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          className="cart_image_size"
          alt="cart"
        />
        <p className="content">Cart</p>
      </div>
    )
  }
}

export default Cart
