import styles from './Footer.module.css'
import Formsaa from './Form'

function Footer() {
  return (
    <div>

 <div className={styles.Parent_footer}>
      
    <div className={styles.footerLeft_footer}>
      <div className={styles.logoNew_footer}>
        <div className={styles.summitLogoAndName_footer}>
          <div className={styles.esummitLogo_footer}><img src="vector.webp" className={styles.image_footer}></img></div>
          <div className={styles.collegeName_footer}>
            <div className={styles.nameOfCollege_footer}><img src="motto.webp" className={styles.motto_footer}></img></div>
            
          </div>
        </div>
      <div className={styles.ecellLogo_footer}><img src="cellLogo.webp" className={styles.cellLogo_footer}></img></div>



    
      </div>
      <div className={styles.description_footer}>E-Summit being the flagship event of ECell, is held annually brings together the academic community, venture capitalists, new age entrepreneurs and all those passionate about entrepreneurship to common grounds
      </div>
      <div className={styles.handlesNewUp_footer}>Follow us at</div>
      
        <div className={styles.handlesNew_footer}> 
            <div className={styles.iconFacebook_footer}><img src="facebook.webp" className={styles.icon_footer}></img></div>
            <div className={styles.iconInstagram_footer}><img src="twitter.webp" className={styles.icon_footer}></img></div>
            <div className={styles.iconLinkedin_footer}><img src="instagram.webp" className={styles.icon_footer}></img></div>
            <div className={styles.iconTwitter_footer}><img src="linkedin.webp" className={styles.icon_footer}></img></div>
            <div className={styles.iconYoutube_footer}><img src="youtube.webp" className={styles.icon_footer}></img></div>
      
    
        </div>

    </div>

    <div className={styles.footerMiddle_footer}>
         <div className={styles.address_footer}>
         Address
         </div>
         <div className={styles.text_footer}>  E-cell Office, SAC Building</div>
         <div className={styles.text_footer}>IIT Roorkee</div>
         <div className={styles.text_footer}>Roorkee, Uttrakhand - 247667</div>
         <br></br>
        
         <div className={styles.email_footer}>E-mail</div><div className={styles.text_footer}>esummitiitr@gmail.com</div>
         <br></br>
         
         <div className={styles.contactNo_footer}> Phone No.</div>
         <div className={styles.text_footer}>Pratyush: +91 9799042645</div>
         <div className={styles.text_footer}>Shashank: +91 9102100531</div>
         
         
         

     
    </div>
    <div className={styles.footerRight_footer}>
    <div className={styles.formsParent_footer}>Contact Us<Formsaa/></div>
      
       





















    </div>
      
      
 </div>
</div>





  )
}

export default Footer





















// <div className={styles.summitYear}>E-SUMMIT'23</div>
//             <div className={styles.motto}>ds</div>
//             <div className={styles.countryName}><img src="BHARAT.png" className={styles.Bharat}></img></div>

// <div className={styles.contactUs}>Contact Us</div>
// <div className={styles.name}><input type="text"></input></div>
// <div className={styles.emailAddress}></div>
// <div className={styles.phoneNoAndQuery}>
//   <div className={styles.phoneNo}></div>
//   <div className={styles.query}></div>

// </div>
// <div className={styles.message}></div>
// <div className={styles.button}></div>
