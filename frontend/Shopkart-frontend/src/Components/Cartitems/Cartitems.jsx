import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import all_product from '../Assets/all_product'

const Cartitems = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext)
  const cartProducts = all_product.filter((e) => cartItems[e.id] !== 0)
  const subtotal = cartProducts.reduce((sum, e) => sum + e.new_price * cartItems[e.id], 0)

  return (
    <div className="cart-table-container">
      <h2 className="cart-table-title">Shopping Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Products</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.length === 0 ? (
            <tr>
              <td colSpan={6} className="cart-empty-row">Your cart is empty.</td>
            </tr>
          ) : (
            cartProducts.map((e) => (
              <tr key={e.id}>
                <td>
                  <img className="cart-table-img" src={e.image} alt={e.name} />
                </td>
                <td className="cart-table-titlecell">{e.name}</td>
                <td>₹{e.new_price}</td>
                <td>
                  <input
                    className="cart-table-qty"
                    type="number"
                    min="1"
                    value={cartItems[e.id]}
                    readOnly
                  />
                </td>
                <td>₹{e.new_price * cartItems[e.id]}</td>
                <td>
                  <button className="cart-table-remove" onClick={() => removeFromCart(e.id)}>
                    <img src={remove_icon} alt="Remove" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="cart-list">
        {cartProducts.length === 0 ? (
          <div className="cart-empty-row">Your cart is empty.</div>
        ) : (
          cartProducts.map((e) => (
            <div className="cart-list-item" key={e.id}>
              <img className="cart-list-img" src={e.image} alt={e.name} />
              <div className="cart-list-details">
                <div className="cart-list-title">{e.name}</div>
                <div className="cart-list-row">
                  <span className="cart-list-label">Price:</span>
                  <span>₹{e.new_price}</span>
                </div>
                <div className="cart-list-row">
                  <span className="cart-list-label">Quantity:</span>
                  <input
                    className="cart-list-qty"
                    type="number"
                    min="1"
                    value={cartItems[e.id]}
                    readOnly
                  />
                </div>
                <div className="cart-list-row">
                  <span className="cart-list-label">Total:</span>
                  <span>₹{e.new_price * cartItems[e.id]}</span>
                </div>
              </div>
              <button className="cart-list-remove" onClick={() => removeFromCart(e.id)}>
                <img src={remove_icon} alt="Remove" />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="cart-totals-section">
        <h3>Cart Totals</h3>
        <div className="cart-totals-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="cart-totals-row">
          <span>Shipping Fee</span>
          <span>Free</span>
        </div>
        <div className="cart-totals-row cart-totals-total">
          <span>Total</span>
          <span>₹{subtotal}</span>
        </div>
      </div>
    </div>
  )
}

export default Cartitems
