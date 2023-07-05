import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
// import './Foot.css'
function Footer() {
  const states = [
    'Andhra Pradesh',
    'Assam',
    'Bihar',
    'Delhi',
    'Gujarat',
    'Haryana',
    'Karnataka',
    'Maharashtra',
    'Rajasthan',
    'Tamil Nadu',
    // Add more states here as needed
  ];


  return (
    <>
      <div className='Footer__Div'>

        <footer id="footer" className="footer">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Boards</h4>
                <ul>
                  <li><a href="#">Cambridge</a></li>
                  <li><a href="#">CBSE</a></li>
                  <li><a href="#">ICSE</a></li>
                  <li className="dropdown">
                    <a href="#">State Boards</a>
                    <ul className="dropdown-menu">
                      {states.map((state, index) => (
                        <li key={index}><a href="#">{state}</a></li>
                      ))}
                    </ul>
                  </li>

                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>NCERT Books</h4>
                <ul>
                  <li><a href="#">NCERT Books for Class 1</a></li>
                  <li><a href="#">NCERT Books for Class 2</a></li>
                  <li><a href="#">NCERT Books for Class 3</a></li>
                  <li><a href="#">NCERT Books for Class 4</a></li>
                  <li><a href="#">NCERT Books for Class 5</a></li>
                  <li><a href="#">NCERT Books for Class 6</a></li>
                  <li><a href="#">NCERT Books for Class 7</a></li>
                  <li><a href="#">NCERT Books for Class 8</a></li>
                  <li><a href="#">NCERT Books for Class 9</a></li>
                  <li><a href="#">NCERT Books for Class 10</a></li>
                  <li><a href="#">NCERT Books for Class 11</a></li>
                  <li><a href="#">NCERT Books for Class 12</a></li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Notifications</h4>
                <ul>
                  <li> <a href="#">List of Articles</a></li>
                  <li> <a href="#">Olympiad Examination</a></li>
                  <li> <a href="#">Education Related News</a></li>
                  <li> <a href="#">Support</a></li>
                  <li> <a href="#">Government Scholarships</a></li>
                  <li> <a href="#">Mock Tests</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">What Makes Us Different? </a></li>
                  <li><a href="#">Why Choose Us?</a></li>
                  <li><a href="#">Sponsorships</a></li>
                  <li><a href="#">Our Supporters</a></li>
                  <li><a href="#">Carriers</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Advisory Board</a></li>
                  <li><a href="#">FAQ's</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <div className="follow-section">
                  <h4>Contact Us</h4>
                  <address>
                    Corporate Office: <br />
                    Building 3A & 3B, <br />
                    Raheja Mindspace, HUDA Techno Enclave, <br />
                    HITEC City, Telangana 500081
                  </address>
                  <br />
                  <p>
                    <a href="tel:+9191234567890">+91 9123 456 7890</a> <br />
                    <a href="tel:+9140123567890">+91 40 123 56 7890</a> <br />
                    <a href="mailto:info@braneenterprises.com">info@braneenterprises.com</a>
                  </p>
                </div>
                <div className="follow-section">
                  <h4>Follow Us</h4>
                  <div className="social-links">
                    <a href="#" className="twitter"><FaTwitter size={24} /></a>
                    <a href="#" className="facebook"><FaFacebook size={24} /></a>
                    <a href="#" className="instagram"><FaInstagram size={24} /></a>
                    <a href="#" className="google-plus"><FaSkype size={24} /></a>
                    <a href="#" className="linkedin"><FaLinkedin size={24} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className='footer__bottom__div'>
        <div className="footer__bottom__div-child1">

          <div className="me-md-auto text-center text-md-center">

            <div className="footer__bottom__div-child1-privacy-links">

              <a href="/privacy-policy">Privacy Policy</a> | 
              <a href="/terms-and-conditions">Terms and Conditions</a> |
              <a href="/privacy-policy">Partners Relation</a>
            </div>
          </div>
          <div className="text-center text-md-center">
            <div className="footer__bottom__div-child1-copyright">
              Copyright &copy; 2023 Brane Education. All rights reserved.
            </div>
          </div>
        </div>

      </div>

    </>

  );
}

export default Footer;
