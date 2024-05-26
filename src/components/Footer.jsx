import React from 'react'

const Footer = () => {
  return (
    <div>
      <>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="fot-data">
                  <img src="https://htmldemo.net/corano/corano/assets/img/logo/logo.png" alt="logo image" />
                  <p>We are a team of designers and developers that create high quality wordpress, shopify, Opencart</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-data">
                  <h2>Contact Us</h2>
                  <ul>
                    <li><a href="javascript:void(0)"><i class="fa-solid fa-house-chimney pe-2"></i>  4710-4890 Breckinridge USA</a></li>
                    <li><a href="javascript:void(0)" className='letter'><i class="fa-regular fa-envelope pe-2"></i>  demo@yourdomain.com</a></li>
                    <li><a href="javascript:void(0)" className='letter'><i class="fa-solid fa-phone pe-2"></i>  (012) 800 456 789-987</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-data">
                  <h2>Contact Us</h2>
                  <div className="row">
                    <div className="col-5">
                      <ul>
                        <li><a href="javascript:void(0)">About Us</a></li>
                        <li><a href="javascript:void(0)">Privet Policy</a></li>
                        <li><a href="javascript:void(0)">Contact Us</a></li>
                      </ul>
                    </div>
                    <div className="col-7">
                      <ul>
                        <li><a href="javascript:void(0)">Delivery Information</a></li>
                        <li><a href="javascript:void(0)">Terms & Conditions</a></li>
                        <li><a href="javascript:void(0)">Site Map</a></li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-data">
                  <h2>Follow Us</h2>
                  <div className="widget d-flex">
                    <span><i class="fa-brands fa-facebook-f"></i></span>
                    <span><i class="fa-brands fa-twitter"></i></span>
                    <span><i class="fa-brands fa-instagram"></i></span>
                    <span><i class="fa-brands fa-youtube"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div className="row">
                <div className="col-lg-6">
                  <div className="footer-data">
                    <h2>Signup for newsletter</h2>
                    <div className="subscript position-relative">
                    <input type="text" placeholder='Enter your email address'/>
                    <button className='position-absolute top-0 end-0' type='submit'>Subscribe</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="fot-logo text-end mt-4">
                    <img src="https://htmldemo.net/corano/corano/assets/img/payment.png" alt="footer logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="footer-bottom">
          <div className="container">
            <div className="bot-data">
              <p className='mb-0'>© 2022 <span> Corano</span> Made with <i class="fa-solid fa-heart px-1"></i>  by <a href="javascript:void(0)"> HasThemes</a></p>
            </div>
          </div>
        </div>

      </>
    </div>
  )
}

export default Footer
