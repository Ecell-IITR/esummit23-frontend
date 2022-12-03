// import styles from './Footer.module.css'
import Formsaa from './Form';

function Footer() {
  return (
    <div>
      <div className='Parent_footer'>
        <div className='footerLeft_footer'>
          <div className='logoNew_footer'>
            <div className='summitLogoAndName_footer'>
              <div className='esummitLogo_footer'>
                <img src='vector.webp' className='image_footer'></img>
              </div>
              <div className='collegeName_footer'>
                <div className='nameOfCollege_footer'>
                  <img src='motto.webp' className='motto_footer'></img>
                </div>
              </div>
            </div>
            <div className='ecellLogo_footer'>
              <img src='cellLogo.webp' className='cellLogo_footer'></img>
            </div>
          </div>
          <div className='description_footer'>
            E-Summit being the flagship event of ECell, is held annually brings
            together the academic community, venture capitalists, new age
            entrepreneurs and all those passionate about entrepreneurship to
            common grounds
          </div>
          <div className='handlesNewUp_footer'>Follow us at</div>

          <div className='handlesNew_footer'>
            <div className='iconFacebook_footer'>
              <img src='facebook.webp' className='icon_footer'></img>
            </div>
            <div className='iconInstagram_footer'>
              <img src='twitter.webp' className='icon_footer'></img>
            </div>
            <div className='iconLinkedin_footer'>
              <img src='instagram.webp' className='icon_footer'></img>
            </div>
            <div className='iconTwitter_footer'>
              <img src='linkedin.webp' className='icon_footer'></img>
            </div>
            <div className='iconYoutube_footer'>
              <img src='youtube.webp' className='icon_footer'></img>
            </div>
          </div>
        </div>

        <div className='footerMiddle_footer'>
          <div className='address_footer'>Address</div>
          <div className='text_footer'> E-cell Office, SAC Building</div>
          <div className='text_footer'>IIT Roorkee</div>
          <div className='text_footer'>Roorkee, Uttrakhand - 247667</div>
          <br></br>

          <div className='email_footer'>E-mail</div>
          <div className='text_footer'>esummitiitr@gmail.com</div>
          <br></br>

          <div className='contactNo_footer'> Phone No.</div>
          <div className='text_footer'>Pratyush: +91 9799042645</div>
          <div className='text_footer'>Shashank: +91 9102100531</div>
        </div>
        <div className='footerRight_footer'>
          <div className='formsParent_footer'>
            Contact Us
            <Formsaa />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// <div className="summitYear">E-SUMMIT'23</div>
//             <div className="motto}>ds</div>
//             <div className="countryName}><img src="BHARAT.png" className="Bharat}></img></div>

// <div className="contactUs}>Contact Us</div>
// <div className="name}><input type="text"></input></div>
// <div className="emailAddress}></div>
// <div className="phoneNoAndQuery}>
//   <div className="phoneNo}></div>
//   <div className="query}></div>

// </div>
// <div className="message}></div>
// <div className="button}></div>
