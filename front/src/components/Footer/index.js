import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footer.scss';

const Footer = () => (
  <div className="footer-container">
    <Link to="/" className="footer-container-title">Météo actuelle</Link>
  </div>

);

export default Footer;
