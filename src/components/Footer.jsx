import React from 'react';
import '../css/Footer.css'; // 스타일링을 위한 CSS 파일 임포트

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Rechelin Korea. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" className="text-white mx-3">Privacy Policy</a>
          <a href="#" className="text-white mx-3">Terms of Service</a>
          <a href="#" className="text-white mx-3">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
