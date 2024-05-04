import './index.css'

import {Component} from 'react'

class Products extends Component {
  render() {
    return (
      <div className="product_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          className="product_image_size"
          alt="products"
        />
        <p className="content">Products</p>
      </div>
    )
  }
}

export default Products
