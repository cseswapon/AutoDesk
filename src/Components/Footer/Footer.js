import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-menu">
                <div>
                    <h5>Essential</h5>
                    <p>FAQ</p>
                    <p>About Us</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Feedback</p>
                </div>
                <div>
                    <h5>For Companies</h5>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Create Account</p>
                </div>
                <div>
                    <h5>Individual User</h5>
                    <p>Create Account</p>
                    <p>Login</p>
                </div>
                <div>
                    <h5>Contact Us</h5>
                    <p><i className="fas fa-user-circle"></i> Swapon Saha</p>
                    <p><i className="fas fa-envelope"></i> cseswaponsaha@gmail.com</p>
                    <p> <i className="fas fa-map-marker-alt"></i> Dhaka,Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;