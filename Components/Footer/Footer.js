// import styles from './Footer.module.css'
import Formsaa from './Form';
import Image from 'next/image' 


function Footer() {

  return (
    <div>
      <div className='Parent_footer'>
        <div className='footerLeft_footer'>
          <div className='logoNew_footer'>
            <div className='summitLogoAndName_footer'>
              <div className='esummitLogo_footer'>
              <a href="https://www.esummit.in/"><Image src="/vector.webp" height="90%" width="100%"></Image></a>
              </div>
              <div className='collegeName_footer'>
                <div className='nameOfCollege_footer'>
                <div className='motto_footer'>
                <a href="https://www.esummit.in/"><Image src="/motto.webp" height="53%" width="130%"></Image></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='ecellLogo_footer'>
            <a href="https://www.ecelliitr.org/"><Image src='/cellLogo.webp'  width="100%" height="50%"></Image></a>
            </div>
          </div>
          <div className='description_footer'>
            E-Summit being the flagship event of ECell, is held annually brings
            together the academic community, venture capitalists, new age
            entrepreneurs and all those passionate about entrepreneurship to
            common grounds
          </div>
          <div className='handlesNewUp_footer headings'>Follow us at</div>

          <div className='handlesNew_footer'>
            <div className='iconFacebook_footer'>
              <a href="https://www.facebook.com/ecelliitr/?mibextid=ZbWKwL"><Image src='/facebook.webp' className='icon_footer' height="100%" width="100%"></Image></a>
            </div>
            <div className='iconInstagram_footer'>
              <a href="https://twitter.com/ecell_iitr?t=hkalTs12wcOXd0Gj4-YCug&s=09"><Image src='/twitter.webp' className='icon_footer' height="100%" width="100%"></Image></a>
            </div>
            <div className='iconLinkedin_footer'>
              <a href="https://instagram.com/ecelliitr?igshid=ZDdkNTZiNTM="><Image src='/instagram.webp' className='icon_footer' height="100%" width="100%"></Image></a>
            </div>
            <div className='iconTwitter_footer'>
              <a href="https://www.linkedin.com/company/ecelliitr/"><Image src='/linkedin.webp' className='icon_footer' height="100%" width="100%"></Image></a>
            </div>
            <div className='iconYoutube_footer'>
              <a href="https://www.youtube.com/@e-celliitroorkee6035"><Image src='/youtube.webp' className='icon_footer' height="100%" width="100%"></Image></a>
            </div>
          </div>
        </div>

        <div className='footerMiddle_footer'>
        <div className='addressUp_footer'>
          <div className='address_footer headings'><b>Address</b></div>
          <div className='text_help_address'>
          <div className='text_footer'> E-cell Office, SAC Building</div>
          <div className='text_footer'>IIT Roorkee</div>
          <div className='text_footer'>Roorkee, Uttrakhand - 247667</div>
          </div>
          <br></br>
        </div>
        <div className='addressMiddle_footer'>
        <div className='text_help'>
          <div className='email_footer headings'>E-mail</div>
          <div className='text_footer'><a href="mailto:esummitiitr@gmail.com" style={{color:"white", textDecoration:"none"}} >esummitiitr@gmail.com</a></div>
        </div>
          <br></br>
        </div>
        <div className='addressBelow_footer'>
          <div className='contactNo_footer headings'> Phone No.</div>
          <div className='text_help_phone'>
          <div className='text_footer'>Pratyush: +91 9799042645</div>
          <div className='text_footer'>Shashank: +91 9102100531</div>
          </div>
        </div>
        </div>
        <div className='footerRight_footer'>
          <div className='formsParent_footer headings'>
          <div className='text_help_contactUs'>
            Contact Us
            </div>
            <div className='text_help_form'>
            <Formsaa/>
            </div>
          </div>
        </div>
        </div>





      <div className='line'>
      <hr></hr>
      </div>
      <div className='marginCopyright'>
      <div className='copyRight'> © 2022, E-cell IIT Roorkee, All rights reserved</div>
      </div>
        <br></br>
        <br></br>
        <br></br>
    </div>

  );
}

export default Footer;
