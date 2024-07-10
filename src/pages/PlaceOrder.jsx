import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSection from '../components/ProductSection';
import { assets } from '../assets/assets'; // Ensure you import assets correctly
import './PlaceOrder.css';

const PlaceOrder = () => {
  
  const product3 = [
    { id: 1, name: 'Sturdy Suede Arm Chair', price: '₦86,000', weight: 'weight: 5kg', image: assets.table1 },
    { id: 2, name: 'Single Arm Chair', price: '₦70,000', weight: 'weight: 5kg', image: assets.table2 },
    { id: 3, name: 'Single Arm Chair', price: '₦75,000', weight: 'weight: 5kg', image: assets.table3 },
    { id: 4, name: 'Sturdy Suede Arm Chair', price: '₦86,000', weight: 'weight: 5kg', image: assets.table4 },
    { id: 5, name: 'Single Arm Chair', price: '₦70,000', weight: 'weight: 5kg', image: assets.table5 },
    { id: 6, name: 'Single Arm Chair', price: '₦75,000', weight: 'weight: 5kg', image: assets.table6 },
  ];

  return (
    <div>
      <Header />
      <div className="order-steps">
        <div className="step">
          <div className="step-line active1"></div>
          <div className="step-label">Your Cart</div>
        </div>
        <div className="step">
          <div className="step-line active"></div>
          <div className="step-label">Shipping & Billing</div>
        </div>
        <div className="step">
          <div className="step-line"></div>
        </div>
      </div>
      <div className="cart-container">
        <div className="cart-item-details">
          <div>Email Address</div>
          <div className="sign-in"> 
            <input type="email" placeholder="Enter your Email Address" />
            <p>
              <button className="brown-button">Sign In</button>
              <button className="light-brown-button">Continue As Guest</button>
            </p>
            <p>New Here? <a href="#">Create Account</a></p>
            <label>
              <input type="checkbox" /> Send me promotional offers and deals.
            </label>
          </div>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p><span>Subtotal:</span> <span className="right-align">₦86,000</span></p>
          <p className="shipping-cost">
            <span>Shipping costs:</span>
          </p>
          <p className="tax-estimate"><span>Tax Estimate:</span> <span className="right-align">₦4500</span></p>
          <p><span><strong>GRANDTOTAL Estimate:</strong></span> <span className="right-align"><strong>₦90,500</strong></span></p>
          <button className="proceed-to-checkout">Proceed to Checkout</button>
          <img src={assets.info} alt="Info Icon" />Shipping fee to be updated upon adding shipping location
          
        </div>
      </div>
      <div className="shipping-address">
        <h3>Shipping Address</h3>
        <input type="text" placeholder="Full Name" /><br />
        <input type="text" placeholder="Street Address" /><br />
        <input type="text" placeholder="Enter your Street Address" /><br />
        <input type="text" placeholder="Postal Code" /><br />
        <select>
          <option>Select your City</option>
          <option>Lagos</option>
          <option>Abuja</option>
        </select><br />
        <input type="text" placeholder="Enter your phone number" /><br />
        <h3>Billing Information</h3>
        <input type="checkbox" /> Billing Address same as Shipping Address
      </div>
      <ProductSection title="FREQUENTLY BOUGHT PRODUCTS" products={product3} />
      <Footer />
    </div>
  );
};

export default PlaceOrder;
