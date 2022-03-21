import React from 'react';

import '../styles/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__knowUs'>
                <h3>Get to Know Us</h3>
                <ul>
                    <li>Carriers</li>
                    <li>Blog</li>
                    <li>About Drin</li>
                    <li>Investor Relations</li>
                    <li>Drin Science</li>
                </ul>
            </div>
            <div className="footer__makeMoney">
                <h3>Make Money with Us</h3>
                <ul>
                    <li>Sell Products</li>
                    <li>Sell Apps</li>
                    <li>Become an Affiliate</li>
                    <li>Adverise Your Product</li>
                    <li>Self-Publish with Us</li>
                </ul>
            </div>
            <div className="footer__help">
                <h3>Let Us Help You</h3>
                <ul>
                    <li>Drin and COVID</li>
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Shipping Policies</li>
                    <li>Returns</li>
                    <li>Drin Assistant</li>
                </ul>

            </div>
            <p> &copy; 2022 hoxtonacademy.com</p>

        </div>
    )
}

export default Footer;